# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
hometown        | text      | null
works_at        | text      | null
lives_at        | text      | null
intro           | text      | null
tagline         | text      | null
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
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary_key
url                | string    | not null, full url to media item
user_id            | integer   | not null, foreign key user who uploaded media
title              | string    | null
description        | text      | null
media_file_name    | string    | null, paperclip gem adds this column
media_content_type | string    | null, paperclip gem adds this column
media_file_size    | integer   | null, paperclip gem adds this column
media_updated_at   | datetime  | null, paperclip gem adds this column

## attachments
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary_key
attachable_type    | string    | not null, polymorphic relationship type
attachable_id      | integer   | not null, polymorphic relationship id

## albums
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary_key
user_id            | integer   | not null, foreign key user who created album
title              | string    | null
description        | text      | null

## activity
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary_key
user_id            | integer   | not null, foreign key user who created activity
wall_id            | integer   | not null, foreign key user who's wall activity should show up on
targetable_type    | string    | not null, polymorphic relationship type
targetable_id      | integer   | not null, polymorphic relationship id

## comments
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary_key
text               | text      | not null
user_id            | integer   | not null, foreign key user who created comment
commentable_type   | string    | not null, polymorphic relationship type
commentable_id     | integer   | not null, polymorphic relationship id
