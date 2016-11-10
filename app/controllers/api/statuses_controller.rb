class Api::StatusesController < ApplicationController
  before_action :authenticate_user!
  before_action :friend_or_self, only: [:create]
  before_action :set_object, only: [:destroy, :update]

  def create
    wall_id = params[:user_id] == 'home' ? current_user.id : params[:user_id]
    @status = current_user.statuses.new(status_params.merge(wall_id: wall_id))

    if @status.save
      @activity = @status.activities.last
      @status_comment_counts = {}
      @status_comment_counts[@status.id] = 0
      render :show
    else
      render 'api/shared/errors', errors: status.errors.full_messages
    end
  end

  def update
    if @object.update(status_params)
      @status = @object
      render :show
    else
      render 'api/shared/errors', errors: status.errors.full_messages
    end
  end

  def destroy
    if @object.user == current_user
      @object.destroy
    end

    render json: {}
  end

  private
  def status_params
    params.require(:status).permit(:content, media_item_ids: [])
  end
end
