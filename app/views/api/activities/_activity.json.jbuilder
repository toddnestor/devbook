json.extract! activity, :user_id, :wall_id, :feedable, :action, :id,
                        :created_at, :updated_at, :feedable_type, :feedable_id

json.set! :user do
  json.partial! 'api/users/basic_user', user: activity.user
end

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

  @comments = activity.feedable.comments
else
  @comments = activity.comments
end

json.comment_count @comments.count

@comments = @comments.limit(10).order(created_at: :desc).to_a.reverse

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
