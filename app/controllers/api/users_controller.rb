class Api::UsersController < ApplicationController
  before_action :set_object, only: [:update, :destroy]

  def create
    super do |user|
      login(user)
    end
  end

  def show
    @object = User.find_by_username(params[:username])
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
