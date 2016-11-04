class Api::FriendshipsController < ApplicationController
  before_action :authenticate_user!

  def create
    @friend = User.find(friendship_params[:friend_id])
    @friendship = Friendship.request(current_user, @friend)
    render json: @friendship
  end

  def accept
    @friendship = current_user.friendships.find(params[:id])
    @friendship.accept!
  end

  private
  def friendship_params
    params.require(:friendship).require(:friend_id)
  end

  def friendships
    case params[:list]
    when nil
      current_user.friendships
    when 'blocked'
      current_user.blocked_friendships
    when 'pending'
      current_user.pending_friendships
    when 'requested'
      current_user.requested_friendships
    when 'friends'
      current_user.accepted_friendships
    end
  end
end
