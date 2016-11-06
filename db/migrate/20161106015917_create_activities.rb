class CreateActivities < ActiveRecord::Migration[5.0]
  def change
    create_table :activities do |t|
      t.references :user, foreign_key: true
      t.integer :wall_id, null: false
      t.references :feedable, polymorphic: true

      t.timestamps
    end
    add_index :activities, :wall_id
  end
end
