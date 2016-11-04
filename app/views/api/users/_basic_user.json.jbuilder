json.extract! user, :id, :fname, :lname, :tagline, :avatar_url, :cover_image_url
json.friend_status current_user.friend_status(user)
