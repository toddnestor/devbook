class Api::FriendshipsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_friendship, only: [:accept, :block, :unblock, :unfriend, :deny, :cancel]
  before_action :destroy, only: [:unblock, :unfriend, :deny, :cancel]
  after_action :render_success, only: [:accept, :block, :unblock, :unfriend, :deny, :cancel]

  def accept
    @friendship.accept! if @friendship
  end

  def request
    @friendship = Friendship.request(current_user, User.find(params[:user_id]))
    render json: @friendship
  end

  def block
    unless @friendship
      @friendship = Friendship.new(user_id: current_user.id, friend_id: params[:user_id])
    end

    @friendship.block!
  end

  def unblock
  end

  def unfriend
  end

  def deny
  end

  def cancel
  end

  def destroy
    @friendship.destroy if @friendship
  end

  private
  def set_friendship
    @friendship = current_user.friendships.find_by_friend_id(params[:user_id])
  end

  def render_success
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
