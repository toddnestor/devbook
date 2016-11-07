class Api::NotificationsController < ApplicationController
  before_action :authenticate_user!

  def index
    @requested_friends = current_user.requested_friendships.includes(:friend)

    if params[:last_friend_request_id]
      @requested_friends = @requested_friends.where("friendships.id > ?",
        params[:last_friend_request_id])
    end
  end
end
