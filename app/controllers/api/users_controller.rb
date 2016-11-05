class Api::UsersController < ApplicationController
  before_action :set_object, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:show, :update, :destroy, :index]

  def index
    @users = User.where.not(id: current_user.been_blocked_friendships.pluck(:friend_id)).all
  end

  def create
    super do |user|
      login(user)
    end
  end

  def show
    @object = User.find_by_username(params[:username])
  end

  def friends
    @user = User.find_by_username(params[:username])
    @users = @user.friends.where.not(id: current_user.been_blocked_friendships.pluck(:friend_id)).all
    render :index
  end

  private
  def input_params
    params.require(:user).permit(
      :fname,
      :lname,
      :username,
      :email,
      :email_confirmation,
      :hometown,
      :works_at,
      :lives_at,
      :intro,
      :tagline,
      :avatar_url,
      :cover_image_url,
      :password,
      :password_confirmation,
      :birthday,
      :gender,
      :relationship_status
    )
  end
end
