class Activity < ApplicationRecord
  belongs_to :user
  belongs_to :wall_user,
    primary_key: :id,
    foreign_key: :wall_id,
    class_name: :User
  
  belongs_to :feedable, polymorphic: true
end
