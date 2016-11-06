class Api::StatusesController < ApplicationController
  before_action :authenticate_user!
  before_action :friend_or_self, only: [:create]

  def create
    wall_id = params[:user_id] == 'home' ? current_user.id : params[:user_id]
    @status = current_user.statuses.new(status_params.merge(wall_id: wall_id))

    if @status.save
      render :show
    else
      render 'api/shared/errors', errors: status.errors.full_messages
    end
  end

  private
  def status_params
    params.require(:status).permit(:content, media_item_ids: [])
  end
end
