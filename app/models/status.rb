class Status < ApplicationRecord
  after_create :create_activity

  belongs_to :user
  has_many :attachments, as: :attachable

  has_many :media_items,
    through: :attachments

  has_many :activities, as: :feedable

  def create_activity
    self.activities.create(wall_id: self.wall_id, user_id: self.user_id, action: 'created')
  end
end
