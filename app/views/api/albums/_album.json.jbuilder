json.extract! album, :id, :title, :description, :photos_count
json.set! :cover do
  json.partial! 'api/media_items/media_item', media_item: album.album_cover
end
