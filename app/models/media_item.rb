class MediaItem < ApplicationRecord
  has_attached_file :media,
                    styles: {
                      large: "2400x1434",
                      avatar: "180x180#",
                      wide: "260x183#",
                      narrow: "175x183#",
                      square: "300x300#",
                      small: "500x500"
                    }

  validates_attachment_content_type :media, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  belongs_to :user, optional: true
  has_many :attachments, dependent: :destroy
end
