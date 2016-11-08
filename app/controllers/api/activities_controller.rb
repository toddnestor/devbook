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

    @activities = @activities.page(page)
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
