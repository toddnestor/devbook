class Comment < ApplicationRecord
  validates :text, :commentable, presence: true
  validate :can_comment

  belongs_to :user
  belongs_to :commentable, polymorphic: true
  has_many :attachments, as: :attachable, dependent: :destroy
  has_many :media_items, through: :attachments

  private
  def can_comment
    unless self.commentable.can_comment?(self.user)
      self.errors[:must_be] = "friends to comment on a status"
    end
  end
end
