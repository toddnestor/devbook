# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users`
  - accepts search query
- `GET /api/users/:id`
- `POST /api/users/:id/friend-request`
  - creates pending friend request for current user to friend with :id
- `POST /api/users/:id/block`
  - blocks user

### Friendships

- `POST /api/friendships/:id/accept`
- `POST /api/friendships/:id/deny`
- `DELETE /api/friendships/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Activity

- `GET /api/activity`
  - filters activity to current user and all their friends activity

### Status

- `POST /api/status`
- `PATCH /api/status/:id`
- `DELETE /api/status/:id`

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Comments
- `POST /api/comments`
- `DELETE /api/comments/:id`
