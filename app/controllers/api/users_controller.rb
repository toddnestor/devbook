class Api::UsersController < ApplicationController
  before_action :set_object, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:show, :update, :destroy]

  def create
    super do |user|
      login(user)
    end
  end

  def show
    @object = User.find_by_username(params[:username])

    unless current_user == @object || current_user.are_we_friends?(@object)
      render json: ["You must be friends to view user's profile"], status: 401
    end
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
