```js
{
  session: {
    currentUser: {
      id: 1,
      username: "todd",
      fname: "Todd",
      lname: "Nestor",
      email: "todd.nestor@gmail.com"
    },
    errors: []
  },
  profile: {
    id: 2,
    username: "user",
    fname: "John",
    lname: "Smith",
    email: "user@gmail.com",
    hometown: "San Francisco, CA",
    work: "App Academy",
    intro: "I'm a cool guy",
    tagline: "Awesome",
  },
  feed: [
    {
      id: 1,
      target_type: 'status',
      target_id: 1,
      target: {
        text: "This is a cool status",
        photos: []
      }
    },
    {
      id: 2,
      target_type: 'photo',
      target_id: 1,
      target: {
        file: "/path/to/file",
        title: "some cool title",
        description: "this is the description"
      }
    }
  ],
  friendRequests: {
    "1": {
      status: "pending",
      friend_id: 2
    }
  },
  forms: {
    session: {
      user: {
        fname: "Todd",
        lname: "Nestor",
        email: "todd.nestor@gmail.com",
        email_confirmation: "todd.nestor@gmail.com",
        password: "123123",
        password_confirmation: "123123",
        gender: "male",
        birthday: "January 1, 2016"
      },
      errors: []
    },
    addPhoto: {
      photo: {
        file: "path/to/file",
        title: "Some Cool Title",
        description: "Some cool description"
      },
      errors: []
    },
    addStatus: {
      status: {
        text: "Today was awesome",
        photos: []
      },
      errors: []
    },
    editProfile: {
      profile: {
        id: 1,
        username: "todd",
        fname: "Todd",
        lname: "Nestor",
        email: "todd.nestor@gmail.com",
        new_password: "",
        new_password_confirmation: "",
        hometown: "Lincoln, CA",
        work: "App Academy",
        intro: "",
        tagline: ""
      },
      errors: []
    }
  },
  friendSearchTerm: "" //used to track current friend search
}
```
