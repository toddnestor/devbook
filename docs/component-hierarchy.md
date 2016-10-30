## Component Hierarchy

**SessionFormContainer**
  - SessionForm

**HomeContainer**
  - Nav
    - SearchContainer
      -Search
        - FriendItem
    - ProfileMenu
  - Home
    - ProfileCard
    - AboutCard
    - PhotosCard
      - PhotoItem
    - PostCreation
    - Feed
      - ActivityItem
        - Comments
          - Comment
    - AdCard
    - Notification
    - FriendsCard
      - FriendItem

**ProfileContainer**
  - Nav
    - SearchContainer
      -Search
        - FriendItem
    - ProfileMenu
  - Profile
    - ProfileHeader
    - ProfilePosts
      - AboutCard
      - PhotosCard
        - PhotoItem
      - PostCreation
      - Feed
        - ActivityItem
          - Comments
            - Comment
      - AdCard
      - Notification
      - FriendsCard
        - FriendItem
    - ProfilePhotos
      - PhotoIndex
        - PhotoItem
    - ProfileFriends
      - FriendIndex
        - FriendItem

**EditProfile**
  - Nav
  - EditProfileContainer
    - EditProfileForm

**AddPhoto**
  - Nav
  - AddPhotoContainer
    - AddPhotoForm

    ## Routes

    |Path   | Component   |
    |-------|-------------|
    | "/login" | "SessionFormContainer" |
    | "/" | "HomeContainer" |
    | "/:username" | "ProfileContainer => ProfilePosts" |
    | "/:username/photos" | "ProfileContainer => ProfilePhotos" |
    | "/:username/friends" | "ProfileContainer => ProfileFriends" |
    | "/edit-profile" | "EditProfile" |
    | "/add-photo" | "AddPhoto" |
