## Component Hierarchy

**SessionFormContainer**
  - SessionForm
    - LoginForm
    - SignUpForm

**App**
  - Nav
    - SearchContainer
      - Search
        - FriendItem
    - ProfileMenu
  - HomeContainer
  - ProfileContainer
  - EditProfileContainer
  - AddPhoto


**HomeContainer**
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
      - FriendsCard
        - FriendItem
    - ProfilePhotos
      - PhotoItem
    - ProfileFriends
      - FriendItem

**EditProfileContainer**
  - EditProfile

**AddPhoto**
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
