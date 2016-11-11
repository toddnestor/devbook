json.extract! album, :id, :title, :description, :photos_count
json.set! :cover do
  json.partial! 'api/media_items/media_item.json.jbuilder', media_item: album.album_cover
end
