class CreateMediaItems < ActiveRecord::Migration[5.0]
  def change
    create_table :media_items do |t|
      t.integer :user_id, null: false
      t.string :url
      t.string :title
      t.text :caption
      t.attachment :media

      t.timestamps
    end

    add_index :media_items, :user_id
  end
end
