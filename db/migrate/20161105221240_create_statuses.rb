class CreateStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :statuses do |t|
      t.references :user, foreign_key: true
      t.integer :wall_id, index: true, null: false
      t.text :content

      t.timestamps
    end
  end
end
