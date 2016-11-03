class User < ApplicationRecord
  validates :password, confirmation: true, length: {minimum: 6, allow_nil: true}
  validates :email, confirmation: true, uniqueness: true
  validates :username, uniqueness: true
  validates :username, :email, presence: true
  validate :email_is_correct_format
  after_initialize :ensure_session_token
  after_initialize :set_avatar_url

  attr_accessor :password

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

  def email_is_correct_format
    unless self.email =~ /^[a-z0-9]{1}[a-z0-9\+\.\-\_]{1,}@[a-z0-9]{1}[a-z0-9\-]{1,}\.[a-z0-9\-]{2,}$/i
      self.errors[:email] = "must be a validly formatted e-mail address."
    end
  end
end
