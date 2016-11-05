json.extract! user, :id, :fname, :lname, :username, :tagline, :avatar_url,
                    :cover_image_url, :friend_count
json.friend_status current_user.friend_status(user)
