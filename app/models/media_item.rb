class MediaItem < ApplicationRecord
  has_attached_file :media,
                    styles: {
                      large: "1200x717",
                      avatar: "180x180",
                      wide: "260x183#",
                      narrow: "175x183#",
                      square: "300x300#"
                    }

  validates_attachment_content_type :media, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  belongs_to :user
  has_many :attachments, dependent: :destroy
end
