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

if activity.feedable_type == 'User' && ['avatar_url', 'cover_image_url'].include?(activity.action)
  json.media_items do
    json.array! [1] do
      json.urls do
        json.large activity.action == 'avatar_url' ? activity.user.avatar_url : activity.user.cover_image_url
      end
    end
  end
end
