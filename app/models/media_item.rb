class MediaItem < ApplicationRecord
  has_attached_file :media,
                    storage: :s3,
                    url: "/images/:hash/:filename",
                    hash_secret: "longSecretString"

  validates_attachment_content_type :media, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  belongs_to :user
end
