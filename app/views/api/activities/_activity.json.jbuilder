json.extract! activity, :user_id, :user, :wall_id, :feedable, :action, :id,
                        :created_at, :updated_at, :feedable_type, :feedable_id

if( activity.wall_id != activity.user_id )
  json.set! :wall_user do
    json.partial! 'api/users/basic_user', user: activity.wall_user
  end
end

if activity.feedable_type == 'Status'
  json.media_items do
    json.array! activity.feedable.media_items do |media_item|
      json.partial! 'api/media_items/media_item', media_item: media_item
    end
  end
end
