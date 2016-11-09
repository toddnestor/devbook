json.extract! comment, :id, :text, :commentable_type, :commentable_id, :user, :created_at

json.media_items do
  json.array! comment.media_items do |media_item|
    json.partial! 'api/media_items/media_item', media_item: media_item
  end
end
