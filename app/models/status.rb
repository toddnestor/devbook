class Status < ApplicationRecord
  after_create :create_activity

  belongs_to :user
  has_many :attachments, as: :attachable, dependent: :destroy

  has_many :media_items, through: :attachments

  has_many :activities, as: :feedable, dependent: :destroy
  has_many :comments, as: :commentable, dependent: :destroy

  def create_activity
    self.activities.create(wall_id: self.wall_id, user_id: self.user_id, action: 'created')
  end

  def can_comment?(other_user)
    self.user == other_user || self.user.are_we_friends?(other_user)
  end
end
