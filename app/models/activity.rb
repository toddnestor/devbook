class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :wall_user,
    primary_key: :id,
    foreign_key: :wall_id,
    class_name: :User

  belongs_to :feedable, polymorphic: true

  belongs_to :status,
    -> { includes(:activities).where(activities: {feedable_type: 'Status'}) },
    foreign_key: :feedable_id,
    optional: true

  belongs_to :album,
    -> { includes(:activities).where(activities: {feedable_type: 'Album'}) },
    foreign_key: :feedable_id,
    optional: true

  has_many :comments,
    -> { includes(:user, :media_items)},
    as: :commentable, dependent: :destroy

  has_many :first_ten_comments,
    -> { limit(10).order(created_at: :desc)},
    class_name: :Comment,
    as: :commentable

  def can_comment?(other_user)
    return true if self.user == other_user || self.user.are_we_friends?(other_user)
    return true if self.wall_user == other_user || self.wall_user.are_we_friends?(other_user)
    false
  end
end
