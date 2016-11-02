class Api::SessionsController < ApplicationController
  def create
    @object = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @object
      login(@object)
      render :show
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def demo
    demo_users = User.where(demo: true).to_a
    @object = demo_users.sample
    login(@object)
    render :show
  end

  def destroy
    logout
    render json: Hash.new
  end
end
