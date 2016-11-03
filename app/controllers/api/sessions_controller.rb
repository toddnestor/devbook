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
    # if I want a random demo user each time
    # demo_users = User.where(demo: true).to_a
    # @object = demo_users.sample
    @object = User.where(demo: true, fname: 'Luke', lname: 'Skywalker').first
    if @object
      login(@object)
      render :show
    else
      render json: Hash.new, status: 401
    end
  end

  def destroy
    logout
    render json: Hash.new
  end
end
