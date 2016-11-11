class Album < ApplicationRecord
  belongs_to :user
  has_many :attachments, as: :attachable, dependent: :destroy
  has_many :media_items, through: :attachments
  has_many :activities, as: :feedable, dependent: :destroy
  has_many :comments,
    -> { includes(:user, :media_items)},
    as: :commentable, dependent: :destroy

  def photos_count
    self.attachments.count
  end

  def first_photo
    self.media_items.first
  end

  def album_cover
    @cover = MediaItem.find(self.album_cover_id) if self.album_cover_id
    @cover = first_photo unless @cover
    @cover
  end

  def create_activity
    self.activities.create(wall_id: self.wall_id, user_id: self.user_id, action: 'created')
  end

  def can_comment?(other_user)
    self.user == other_user || self.user.are_we_friends?(other_user)
  end
end
