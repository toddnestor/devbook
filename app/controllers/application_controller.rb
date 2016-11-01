class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token! if current_user
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
      render :show
    else
      render '/api/shared/errors', status: 401
    end
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
    @object.destroy
    render :show
  end
end
