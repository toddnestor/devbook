json.array! @users do |user|
  json.partial! 'basic_user', user: user
end
