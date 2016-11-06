class Attachment < ApplicationRecord
  belongs_to :media_item
  belongs_to :attachable, polymorphic: true, optional: true
end
