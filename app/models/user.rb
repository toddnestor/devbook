class User < ApplicationRecord
  validates :password, confirmation: true, length: {minimum: 6, allow_nil: true}
  validates :email, confirmation: true, uniqueness: true
  validates :username, uniqueness: true
  validates :username, :email, presence: true
  validate :email_is_correct_format
  after_initialize :ensure_session_token
  after_initialize :set_avatar_url

  attr_accessor :password

  has_many :media_items

  has_many :friendships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Friendship

  has_many :friends,
    -> { where(friendships: { status: 'accepted' }) },
    through: :friendships

  has_many :accepted_friendships,
    -> { where( status: 'accepted' ) },
    class_name: :Friendship,
    foreign_key: :user_id

  has_many :accepted_friends,
    through: :accepted_friendships,
    source: :friend

  has_many :pending_friendships,
    -> { where( status: 'pending' ) },
    class_name: :Friendship,
    foreign_key: :user_id

  has_many :pending_friends,
    through: :pending_friendships,
    source: :friend

  has_many :requested_friendships,
    -> { where( status: 'requested' ) },
    class_name: :Friendship,
    foreign_key: :user_id

  has_many :requested_friends,
    through: :requested_friendships,
    source: :friend

  has_many :blocked_friendships,
    -> { where( status: 'blocked' ) },
    class_name: :Friendship,
    foreign_key: :user_id

  has_many :blocked_friends,
    through: :blocked_friendships,
    source: :friend

  has_many :been_blocked_friendships,
    -> { where( status: 'been_blocked' ) },
    class_name: :Friendship,
    foreign_key: :user_id

  has_many :been_blocked_friends,
    through: :been_blocked_friendships,
    source: :friend

  def self.find_by_credentials(email, password)
    @user = User.find_by_email(email)
    return @user if @user && @user.is_password?(password)
    return nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


  def reset_session_token!
    self.session_token = generate_session_token
    self.save
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def are_we_friends?(other_user)
    accepted_friends.include?(other_user)
  end

  def friend_status(other_user)
    friendship = Friendship.friendship_between(self, other_user)
    return 'none' unless friendship
    return friendship.status
  end

  private
  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def set_avatar_url
    unless self.avatar_url
      hash = ""
      hash = Digest::MD5.hexdigest(self.attributes["email"]) if self.attributes["email"]
      self.avatar_url = "https://www.gravatar.com/avatar/#{hash}"
    end
  end

  def set_cover_image
    unless self.cover_image_url
      self.cover_image_url = 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/002/large/Programmer.jpg?1478195335'
    end
  end

  def email_is_correct_format
    unless self.email =~ /^[a-z0-9]{1}[a-z0-9\+\.\-\_]{1,}@[a-z0-9]{1}[a-z0-9\-]{1,}\.[a-z0-9\-]{2,}$/i
      self.errors[:email] = "must be a validly formatted e-mail address."
    end
  end
end
