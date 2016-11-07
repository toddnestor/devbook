json.set! :requestedFriends do
  json.array! @requested_friends do |request|
    json.extract! request, :id, :created_at
    json.set! :user do
      json.partial! 'api/users/basic_user', user: request.friend
    end
  end
end
