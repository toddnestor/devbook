json.extract! user, :id, :fname, :lname, :username, :intro, :tagline,
                    :avatar_url, :cover_image_url, :friend_count

json.set! :friends do
  json.array! user.first_two_friends.each do |friend|
    json.partial! 'api/users/basic_user.json.jbuilder', user: friend
  end
end

status = current_user.friend_status(user)

json.friend_status status

if status == 'accepted' || user.id == current_user.id
  json.extract! user, :email, :hometown, :works_at, :lives_at, :birthday,
                      :gender, :relationship_status
end
