class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token.session_token
  end

  def logout
    current_user.session_token.destroy if current_user
    session[:session_token] = nil
  end

  def model
    self.class.model
  end

  def self.model
    controller_name.classify.constantize
  end

  def create
    @object = model.new(input_params)

    if @object.save
      yield @object if block_given?
      render :show
    else
      render '/api/shared/errors', status: 401
    end
  end

  def destroy
    @object.destroy
    render :show
  end

  def update
    if @object.update(input_params)
      render :show
    else
      render '/api/shared/errors', status: 401
    end
  end

  def set_object
    @object = model.find(params[:id])
  end

  def authenticate_user!
    unless current_user
      render json: ["You must be logged in to do that."], status: 401
    end
  end

  def friend_or_self
    return nil if params[:user_id] == 'home'
    user = User.find(params[:user_id])
    return nil if current_user.id == user.id

    unless user && user.are_we_friends?(current_user)
      render json: []
    end
  end
end
