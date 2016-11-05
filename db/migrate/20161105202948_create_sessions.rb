class CreateSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :sessions do |t|
      t.references :user, foreign_key: true
      t.string :session_token

      t.timestamps
    end
    
    add_index :sessions, :session_token, unique: true
  end
end
