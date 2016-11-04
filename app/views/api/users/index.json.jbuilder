@users.each do |user|
  json.set! user.id do
    json.partial! 'basic_user', user: user
  end
end
