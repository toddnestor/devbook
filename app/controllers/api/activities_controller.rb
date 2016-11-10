class Api::ActivitiesController < ApplicationController
  before_action :authenticate_user!
  before_action :friend_or_self, only: [:index]

  def index
    if params[:user_id] == 'home'
      home_feed
    else
      profile_feed
    end

    page = 1
    page = params[:page] if params[:page]

    if params[:created]
      @activities = @activities.where.not(id: params[:created].map(&:to_i))
    end

    @activities = @activities.includes(:user, :wall_user, :feedable, first_ten_comments: [:user, :media_items], status: [:user, :wall_user, :media_items, first_ten_comments: [:user, :media_items]])

    @activities = @activities.page(page)

    @activity_ids = []
    @status_ids = []

    @activities.each do |activity|
      if activity.feedable_type == 'Status'
        @status_ids << activity.status.id
      else
        @activity_ids << activity.id
      end
    end

    @status_comment_counts = Comment.where(commentable_id: @status_ids, commentable_type: 'Status').group(:commentable_id).count
    @activity_comment_counts = Comment.where(commentable_id: @activity_ids, commentable_type: 'Activity').group(:commentable_id).count
  end

  def home_feed
    user_ids = current_user.friends.pluck(:id)
    user_ids << current_user.id

    @activities = Activity.where(user_id: user_ids)
                  .or(Activity.where(wall_id: user_ids))
                  .order(updated_at: :desc)
  end

  def profile_feed
    @activities = Activity.where(user_id: params[:user_id])
                  .or(Activity.where(wall_id: params[:user_id]))
                  .order(updated_at: :desc)
  end
end
