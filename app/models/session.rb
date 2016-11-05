class Session < ApplicationRecord
  validates :user_id, :session_token, presence: true

  belongs_to :user, optional: true
end
