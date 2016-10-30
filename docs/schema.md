# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
avatar_url      | string    | null
cover_image_url | string    | null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## statuses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary_key
user_id         | integer   | not null, foreign key user who created the status
wall_id         | integer   | not null, foreign key user who's wall the status goes on
text            | text      | not null

## friendships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary_key
user_id         | integer   | not null, foreign key user who created the request, index
friend_id       | integer   | not null, foreign key user who's receiving the request, index
status          | string    | not null, (pending when created, accepted after accepted), index

## media
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary_key
