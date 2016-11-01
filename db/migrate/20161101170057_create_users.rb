class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :fname, null: false, index: true
      t.string :lname, null: false, index: true
      t.string :username, null: false, unique: true, index: true
      t.string :email, null: false, unique: true, index: true
      t.text :hometown
      t.text :works_at
      t.text :lives_at
      t.text :intro
      t.text :tagline
      t.string :avatar_url
      t.string :cover_image_url
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true

      t.timestamps
    end

    add_column :media, :title, :string
  end
end
