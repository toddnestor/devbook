class AddAlbumCover < ActiveRecord::Migration[5.0]
  def change
    add_column :albums, :album_cover_id, :integer
  end
end
