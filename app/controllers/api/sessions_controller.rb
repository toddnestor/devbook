class Api::SessionsController < ApplicationController
  def create
    @object = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @object
      login(@object)
      render :show
    else
      render json: ["Invalid credentials"]
    end
  end

  def destroy
    logout
    render json: Hash.new
  end
end
