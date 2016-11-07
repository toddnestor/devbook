class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :text
      t.references :user, foreign_key: true
      t.integer :parent_id
      t.references :commentable, polymorphic: true

      t.timestamps
    end
    add_index :comments, :parent_id
  end
end
