json.extract! activity, :user_id, :wall_id, :action, :id,
                        :created_at, :updated_at, :feedable_type, :feedable_id

json.set! :user do
  json.partial! 'api/users/minimal_user', user: activity.user
end

if( activity.wall_id != activity.user_id )
  json.set! :wall_user do
    json.partial! 'api/users/minimal_user', user: activity.wall_user
  end
end

if activity.feedable_type == 'Status'
  json.feedable activity.status
  used_media_items = []
  json.media_items do
    json.array! activity.status.media_items do |media_item|
      unless used_media_items.include?(media_item.id)
        json.partial! 'api/media_items/media_item', media_item: media_item
        used_media_items << media_item.id
      end
    end
  end

  @comments = activity.status.comments.first(10).to_a.reverse
  json.comment_count @status_comment_counts[activity.status.id]
elsif activity.feedable_type == 'Album'
  json.feedable activity.album
  used_media_items = []
  json.media_items do
    json.array! activity.album.media_items do |media_item|
      unless used_media_items.include?(media_item.id)
        json.partial! 'api/media_items/media_item', media_item: media_item
        used_media_items << media_item.id
      end
    end
  end
else
  json.feedable activity.feedable
  @comments = activity.comments.first(10).to_a.reverse
  json.comment_count @activity_comment_counts[activity.id]
end

json.comments do
  json.array! @comments do |comment|
    json.partial! 'api/comments/comment', comment: comment
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
