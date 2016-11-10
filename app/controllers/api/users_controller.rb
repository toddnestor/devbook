class Api::UsersController < ApplicationController
  before_action :set_object, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:show, :update, :destroy, :index]

  def index
    @users = User.where.not(id: current_user.been_blocked_friendships.pluck(:friend_id)).all
  end

  def search
    @users_query = User.where.not(id: current_user.been_blocked_friendships.pluck(:friend_id))

    search_term = params[:search]
    search_words = search_term.split(' ')

    where_clause = sanitize_sql("(CONCAT(fname,' ',lname) ILIKE ? OR email ILIKE ? OR username ILIKE ?)", "%#{search_term}%", "%#{search_term}%", "%#{search_term}%")

    search_words.each do |word|
      where_clause += sanitize_sql(" OR (CONCAT(fname,' ',lname) ILIKE ? OR email ILIKE ? OR username ILIKE ?)", "%#{word}%", "%#{word}%", "%#{word}%")
    end

    @users = @users_query.where(where_clause)

    highest_number = search_words.length

    order_query = <<-SQL
      CASE
        WHEN CONCAT(fname, ' ', lname) ILIKE ? THEN #{highest_number + 3}
        WHEN email ILIKE ? THEN #{highest_number + 3}
        WHEN username ILIKE ? THEN #{highest_number + 3}
        WHEN CONCAT(fname, ' ', lname) ILIKE ? THEN #{highest_number + 2}
        WHEN email ILIKE ? THEN #{highest_number + 2}
        WHEN username ILIKE ? THEN #{highest_number + 2}
        WHEN CONCAT(fname, ' ', lname) ILIKE ? THEN #{highest_number + 1}
        WHEN email ILIKE ? THEN #{highest_number + 1}
        WHEN username ILIKE ? THEN #{highest_number + 1}
    SQL

    search_words = search_words.map {|w| "%#{w}%"}
    triplicated_search_words = []

    search_words.each do |word|
      3.times {triplicated_search_words << word}
      order_query += <<-SQL
        WHEN CONCAT(fname, ' ', lname) ILIKE ? THEN #{highest_number}
        WHEN email ILIKE ? THEN #{highest_number}
        WHEN username ILIKE ? THEN #{highest_number}
      SQL
      highest_number -= 1
    end

    order_query += <<-SQL
      END desc
    SQL



    @users = @users.order(
      sanitize_sql(
          order_query,
          search_term,
          search_term,
          search_term,
          "%#{search_term}",
          "%#{search_term}",
          "%#{search_term}",
          "%#{search_term}%",
          "%#{search_term}%",
          "%#{search_term}%",
          *triplicated_search_words
      )
    )

    render :search
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

  def sanitize_sql(*args)
    ActiveRecord::Base.send(:sanitize_sql, args)
  end
end
