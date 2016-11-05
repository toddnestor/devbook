class Api::FriendshipsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_friendship, only: [:accept, :block, :unblock, :unfriend, :deny, :cancel_request]
  before_action :destroy, only: [:unblock, :unfriend, :deny, :cancel_request]

  def accept
    @friendship.accept! if @friendship
    render json: @friendship
  end

  def request_friendship
    friend = User.find(params[:user_id])
    @friendship = Friendship.request(current_user, friend)
    render json: @friendship
  end

  def block
    unless @friendship
      @friendship = Friendship.new(user_id: current_user.id, friend_id: params[:user_id])
    end

    @friendship.block!
    render json: @friendship
  end

  def unblock
    render json: @friendship
  end

  def unfriend
    render json: @friendship
  end

  def deny
    render json: @friendship
  end

  def cancel_request
    render json: @friendship
  end

  def destroy
    @friendship.destroy if @friendship
  end

  private
  def set_friendship
    @friendship = current_user.friendships.find_by_friend_id(params[:user_id])
  end

  def success_rendering
    hash = Hash.new
    hash[:success] = true
    render json: hash
  end

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
