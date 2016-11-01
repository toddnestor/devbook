class Api::UsersController < ApplicationController
  before_action :set_object, only: [:update, :show, :destroy]

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
      :password_confirmation
    )
  end
end
