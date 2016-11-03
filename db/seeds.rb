# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.where(demo: true).destroy_all

User.create(
  fname: 'Luke',
  lname: 'Skywalker',
  username: 'luke',
  email: 'jedi@rebellion.org',
  hometown: 'Tatooine',
  password: '123123',
  works_at: 'Rebellion',
  lives_at: 'X-wing',
  birthday: 24.years.ago,
  gender: 'male',
  avatar_url: 'http://devbook.objects.cdn.dream.io/images/luke.jpg',
  cover_image_url: 'http://devbook.objects.cdn.dream.io/images/tatooine.jpg',
  tagline: 'May the force be with you.',
  demo: true
)

User.create(
  fname: 'Leia',
  lname: 'Organa',
  gender: 'female',
  username: 'leia',
  email: 'princess@rebellion.org',
  hometown: 'Alderaan',
  password: '123123',
  demo: true
)
