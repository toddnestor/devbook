# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161110190814) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "wall_id",       null: false
    t.string   "feedable_type"
    t.integer  "feedable_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "action"
    t.index ["feedable_type", "feedable_id"], name: "index_activities_on_feedable_type_and_feedable_id", using: :btree
    t.index ["user_id"], name: "index_activities_on_user_id", using: :btree
    t.index ["wall_id"], name: "index_activities_on_wall_id", using: :btree
  end

  create_table "albums", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title",       null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_albums_on_user_id", using: :btree
  end

  create_table "attachments", force: :cascade do |t|
    t.integer  "media_item_id"
    t.string   "attachable_type"
    t.integer  "attachable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["attachable_type", "attachable_id"], name: "index_attachments_on_attachable_type_and_attachable_id", using: :btree
    t.index ["media_item_id"], name: "index_attachments_on_media_item_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.text     "text"
    t.integer  "user_id"
    t.integer  "parent_id"
    t.string   "commentable_type"
    t.integer  "commentable_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree
    t.index ["parent_id"], name: "index_comments_on_parent_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "friend_id",  null: false
    t.string   "status",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friend_id"], name: "index_friendships_on_friend_id", using: :btree
    t.index ["status"], name: "index_friendships_on_status", using: :btree
    t.index ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_friendships_on_user_id", using: :btree
  end

  create_table "media_items", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.string   "url"
    t.string   "title"
    t.text     "caption"
    t.string   "media_file_name"
    t.string   "media_content_type"
    t.integer  "media_file_size"
    t.datetime "media_updated_at"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["user_id"], name: "index_media_items_on_user_id", using: :btree
  end

  create_table "sessions", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "session_token"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["session_token"], name: "index_sessions_on_session_token", unique: true, using: :btree
    t.index ["user_id"], name: "index_sessions_on_user_id", using: :btree
  end

  create_table "statuses", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "wall_id",    null: false
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_statuses_on_user_id", using: :btree
    t.index ["wall_id"], name: "index_statuses_on_wall_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",                               null: false
    t.string   "lname",                               null: false
    t.string   "username",                            null: false
    t.string   "email",                               null: false
    t.text     "hometown"
    t.text     "works_at"
    t.text     "lives_at"
    t.text     "intro"
    t.text     "tagline"
    t.string   "avatar_url"
    t.string   "cover_image_url"
    t.string   "password_digest",                     null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.datetime "birthday"
    t.boolean  "demo",                default: false
    t.string   "gender"
    t.string   "relationship_status"
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["fname"], name: "index_users_on_fname", using: :btree
    t.index ["lname"], name: "index_users_on_lname", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

  add_foreign_key "activities", "users"
  add_foreign_key "albums", "users"
  add_foreign_key "attachments", "media_items"
  add_foreign_key "comments", "users"
  add_foreign_key "sessions", "users"
  add_foreign_key "statuses", "users"
end
