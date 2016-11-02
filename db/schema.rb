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

ActiveRecord::Schema.define(version: 20161102153757) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "media", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.text     "caption"
    t.string   "media_file_name"
    t.string   "media_content_type"
    t.integer  "media_file_size"
    t.datetime "media_updated_at"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "title"
    t.index ["user_id"], name: "index_media_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",                           null: false
    t.string   "lname",                           null: false
    t.string   "username",                        null: false
    t.string   "email",                           null: false
    t.text     "hometown"
    t.text     "works_at"
    t.text     "lives_at"
    t.text     "intro"
    t.text     "tagline"
    t.string   "avatar_url"
    t.string   "cover_image_url"
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.datetime "birthday"
    t.boolean  "demo",            default: false
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["fname"], name: "index_users_on_fname", using: :btree
    t.index ["lname"], name: "index_users_on_lname", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
