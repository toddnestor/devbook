class Comment < ApplicationRecord
  validates :text, :commentable, presence: true

  belongs_to :user
  belongs_to :commentable, polymorphic: true
  has_many :attachments, as: :attachable, dependent: :destroy
  has_many :media_items, through: :attachments
end
