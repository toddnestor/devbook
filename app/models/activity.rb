class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :wall_user,
    primary_key: :id,
    foreign_key: :wall_id,
    class_name: :User

  belongs_to :feedable, polymorphic: true
  has_many :comments, as: :commentable, dependent: :destroy

  def can_comment?(other_user)
    return true if self.user == other_user || self.user.are_we_friends?(other_user)
    return true if self.wall_user == other_user || self.wall_user.are_we_friends?(other_user)
    false
  end
end
