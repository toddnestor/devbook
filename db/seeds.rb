# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
p 'creating new demo users'
# Star wars characters
def get_luke
  User.find_by_email('jedi@rebellion.org')
end

demo_users = User.where(demo: true)
p 'deleting previous demo users'
demo_users.destroy_all

luke = User.create(
  fname: 'Luke',
  lname: 'Skywalker',
  gender: 'male',
  username: 'luke',
  email: 'jedi@rebellion.org',
  hometown: 'Tatooine',
  password: '123123',
  works_at: 'Rebellion',
  lives_at: 'X-wing',
  birthday: 24.years.ago,
  avatar_url: 'http://devbook.objects.cdn.dream.io/images/luke.jpg',
  cover_image_url: 'http://devbook.objects.cdn.dream.io/images/tatooine.jpg',
  tagline: 'May the force be with you.',
  relationship_status: 'Single',
  intro: 'I am a jedi knight, like my father before me.',
  demo: true
)

def get_leia
  User.find_by_email('princess@rebellion.org')
end

leia = User.create(
  fname: 'Leia',
  lname: 'Organa',
  gender: 'female',
  username: 'leia',
  email: 'princess@rebellion.org',
  hometown: 'Alderaan',
  password: '123123',
  works_at: 'Rebellion',
  birthday: 24.years.ago,
  avatar_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/025/avatar/Leia_endorpromo02.jpg?1478476937',
  cover_image_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/026/large/Alderaan_mountains.png?1478476957',
  tagline: 'I\'d just as soon kiss a Wookiee. ',
  relationship_status: 'It\'s complicated',
  demo: true
)

def get_han
  User.find_by_email('smuggler@rebellion.org')
end

han = User.create(
  fname: 'Han',
  lname: 'Solo',
  gender: 'male',
  username: 'han',
  email: 'smuggler@rebellion.org',
  hometown: 'Corelia',
  password: '123123',
  works_at: 'Rebellion',
  birthday: 34.years.ago,
  avatar_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/029/avatar/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg?1478633683',
  cover_image_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/031/large/millennium_falcon_over_tatooine_by_christoumanian-d7q1yvn.jpg?1478633855',
  tagline: 'Never tell me the odds.',
  relationship_status: 'It\'s complicated',
  demo: true
)

def get_chewie
  User.find_by_email('wookie@rebellion.org')
end

chewie = User.create(
  fname: 'Chewbacca',
  lname: '',
  gender: 'male',
  username: 'chewie',
  email: 'wookie@rebellion.org',
  hometown: 'Kashyyyk',
  password: '123123',
  works_at: 'Rebellion',
  birthday: 200.years.ago,
  avatar_url: 'http://devbook.objects.cdn.dream.io/images/Chewbacca-2-.jpg',
  cover_image_url: '',
  tagline: 'RRWWWGG',
  relationship_status: 'Single',
  demo: true
)

darth = User.create(
  fname: 'Anakin',
  lname: 'Skywalker',
  gender: 'male',
  username: 'darth',
  email: 'vader@empire.gov',
  hometown: 'Tatooine',
  password: '123123',
  works_at: 'Empire',
  birthday: 47.years.ago,
  avatar_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/035/avatar/darth-vader.jpg?1478635214',
  cover_image_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/036/large/darth-vader-10-most-dangerous-star-wars-villains.jpeg?1478635268',
  tagline: 'Luke, I am your father!',
  relationship_status: 'Widowed',
  demo: true
)

emperor = User.create(
  fname: 'Sheev',
  lname: 'Palpatine',
  gender: 'male',
  username: 'emperor',
  email: 'emperor@empire.gov',
  hometown: 'Naboo',
  password: '123123',
  works_at: 'Empire',
  birthday: 67.years.ago,
  avatar_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/033/avatar/Emperor_RotJ.png?1478635009',
  cover_image_url: 'https://devbook.objects.cdn.dream.io/media_items/media/000/000/034/large/Death-Star-and-Star-Destroyer-in-Return-of-the-Jedi.jpg?1478635097',
  tagline: 'So be it... Jedi!',
  relationship_status: 'Single',
  demo: true
)

# Star wars relationships
accepted_friendships = [
  [luke, leia],
  [luke, han],
  [chewie, han],
  [chewie, luke],
  [darth, emperor]
]

accepted_friendships.each do |pair|
  friendship = Friendship.request(pair[0], pair[1])
  friendship.accept!
end

blocked_friendships = [
  [luke, darth]
]

blocked_friendships.each do |pair|
  friendship = Friendship.request(pair[0], pair[1])
  friendship.block!
end

# media
p 'start uploading media'
p 'uploading han_chewie'

old_han_chewie = MediaItem.find_by(media_file_name: "han-chewie.jpg")
if old_han_chewie
  old_han_chewie.user = luke
  old_han_chewie.save
  han_chewie = old_han_chewie
else
  han_chewie = MediaItem.create(media: File.new("#{__dir__}/seed-images/han-chewie.jpg"))
end

p 'uploading millenium_falcon'
old_millenium_falcon = MediaItem.find_by(media_file_name: "millenium-falcon.jpg")
if old_millenium_falcon
  old_millenium_falcon.user = luke
  old_millenium_falcon.save
  millenium_falcon = old_millenium_falcon
else
  millenium_falcon = MediaItem.create(media: File.new("#{__dir__}/seed-images/millenium-falcon.jpg"), user_id: luke.id)
end

p 'uploading stormtrooper'
old_stormtrooper = MediaItem.find_by(media_file_name: "stormtrooper.jpg")
if old_stormtrooper
  old_stormtrooper.user = luke
  old_stormtrooper.save
  stormtrooper = old_stormtrooper
else
  stormtrooper = MediaItem.create(media: File.new("#{__dir__}/seed-images/stormtrooper.jpg"), user_id: luke.id)
end

p 'uploading walkers'
old_walkers = MediaItem.find_by(media_file_name: "walker-things.jpeg")
if old_walkers
  old_walkers.user = luke
  old_walkers.save
  walkers = old_walkers
else
  walkers = MediaItem.create(media: File.new("#{__dir__}/seed-images/walker-things.jpeg"))
end

p 'uploading obi_yoda'
old_obi_yoda = MediaItem.find_by(media_file_name: "obi-yoda.jpg")
if old_obi_yoda
  old_obi_yoda.user = luke
  old_obi_yoda.save
  obi_yoda = old_obi_yoda
else
  obi_yoda = MediaItem.create(media: File.new("#{__dir__}/seed-images/obi-yoda.jpg"), user_id: luke.id)
end

p 'uploading han_i_know_solo'
old_han_i_know_solo = MediaItem.find_by(media_file_name: "han-i-know-solo.png")
if old_han_i_know_solo
  old_han_i_know_solo.user = luke
  old_han_i_know_solo.save
  han_i_know_solo = old_han_i_know_solo
else
  han_i_know_solo = MediaItem.create(media: File.new("#{__dir__}/seed-images/han-i-know-solo.png"), user_id: han.id)
end

def users
  [
    get_luke,
    get_leia,
    get_han
  ]
end

def random_user
  users.sample
end

possible_extensions = ['jpg','png','jpeg']

random_images = []

(1..33).each do |n|
  possible_extensions.each do |extension|
    filename = "#{__dir__}/seed-images/random/#{n}.#{extension}"
    if File.exists?(filename)
      p "uploading random image #{n}"

      random_image = MediaItem.where(media_file_name: "#{n}.#{extension}").first
      if random_image
        random_image.user = random_user
        random_images << random_image
      else
        random_images << MediaItem.create(media: File.new(filename), user_id: users.sample.id)
      end
    end
  end
end

droid_images = []

(1..9).each do |n|
  possible_extensions.each do |extension|
    filename = "#{__dir__}/seed-images/droids/droid-#{n}.#{extension}"
    if File.exists?(filename)
      p "uploading droid image #{n}"
      droid_image = MediaItem.where(media_file_name: "droid-#{n}.#{extension}").first
      if droid_image
        droid_image.user = random_user
        droid_images << droid_image
      else
        droid_images << MediaItem.create(media: File.new(filename), user_id: users.sample.id)
      end
    end
  end
end

def random_gender
  ["male", "female", "other"].sample
end

def random_relationship_status
  ["Single", "Married", "It's Complicated"].sample
end

p "making droid users"
droid_images.each do |image|
  fname = Faker::StarWars.droid
  User.create(
    fname: fname,
    lname: 'DROID',
    gender: random_gender,
    username: fname.downcase.gsub(/[^a-z0-9\_\-]/,''),
    email: "#{fname.downcase.gsub(/[^a-z0-9\_\-]/,'')}@#{["rebellion.org","empire.gov"].sample}",
    hometown: Faker::StarWars.planet,
    password: '123123',
    works_at: Faker::StarWars.vehicle,
    birthday: rand(1..15).years.ago,
    avatar_url: droid_images.sample.media.url(:avatar).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io'),
    cover_image_url: random_images.sample.media.url(:large).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io'),
    tagline: Faker::StarWars.quote,
    relationship_status: random_relationship_status,
    demo: true
  )
end

def get_droids
  User.where(demo: true, lname: 'DROID').all.to_a
end

droids = get_droids

requested_friendships = [
  [emperor, luke],
  [droids[0], luke],
  [droids[1], luke],
  [droids[2], luke]
]

requested_friendships.each do |pair|
  friendship = Friendship.request(pair[0], pair[1])
end

def random_droid
  get_droids.sample
end

# statuses
p "making statuses"

def random_wookie_sentence
  wookie_words = [
    'wyaaaaaa',
    'ruh',
    'huewaa',
    'muaa',
    'mumwa',
    'wua',
    'ga',
    'ma',
    'ahuma',
    'ooma',
    'youw',
    'kabukk',
    'wyogg',
    'gwyaaaag',
    'roooarrgh',
    'ur',
    'ru',
    'roo',
    'hnn-rowr',
    'yrroonn',
    'nng',
    'rarr'
  ]

  sentence = wookie_words.sample.capitalize

  rand(0..10).times { sentence += " " + wookie_words.sample}

  sentence + ['.','?','!'].sample
end

def random_chewie_status(media_items = [])
  media_item_ids = media_items.map {|item| item.id}
  status = get_chewie.statuses.create(
    content: random_wookie_sentence,
    wall_id: get_chewie.id,
    media_item_ids: media_item_ids
  )

  status
end

def random_faker_sentence(media_items = [])
  media_item_ids = media_items.map {|item| item.id}
  user = users.sample
  status = user.statuses.create(
    content: Faker::StarWars.quote,
    wall_id: user.id,
    media_item_ids: media_item_ids
  )

  status
end

def random_chewie_comment(status, media_items = [])
  media_item_ids = media_items.map {|item| item.id}
  get_chewie.comments.create(
    text: random_wookie_sentence,
    commentable_type: 'Status',
    commentable_id: status.id,
    media_item_ids: media_item_ids
  )
end

def random_faker_place(media_items = [])
  media_item_ids = media_items.map {|item| item.id}
  user = users.sample
  status = user.statuses.create(
    content: "I love #{Faker::StarWars.planet}, before I went there I'd never seen a #{Faker::StarWars.specie}.",
    wall_id: user.id,
    media_item_ids: media_item_ids
  )

  other_user = users.reject {|u| u == user}.sample
  other_user.comments.create(
    text: "You should check out #{Faker::StarWars.planet}, if you do make sure to ride a #{Faker::StarWars.vehicle}.",
    commentable_type: 'Status',
    commentable_id: status.id
  )

  status
end

def random_faker_vehicle(media_items = [])
  media_item_ids = media_items.map {|item| item.id}
  user = users.sample
  status = user.statuses.create(
    content: "Just working on my #{Faker::StarWars.vehicle}, what's everyone else up to?",
    wall_id: user.id
  )

  status
end

def random_status(media_items = [])
  status_type = ["chewie", "faker_sentence", "faker_place", "faker_vehicle"].sample

  case status_type
    when "chewie"
      status = random_chewie_status(media_items)
    when "faker_sentence"
      status = random_faker_sentence(media_items)
    when "faker_place"
      status = random_faker_place(media_items)
    when "faker_vehicle"
      status = random_faker_vehicle(media_items)
  end

  status
end

200.times do
  media_items = []
  rand(0..7).times do
    media_items << random_images.sample
  end

  status = random_status(media_items)

  rand(0..5).times do
    media_items = []
    rand(0..1).times do
      media_items << random_images.sample
    end

    random_chewie_comment(status, media_items)
  end
end

where_you_been = leia.statuses.create(
  content: "Luke, bro, where have you been?",
  wall_id: luke.id
)

luke_comment = luke.comments.new(
  text: "I've been around, how about yourself? Where are you at?"
)

luke_comment.commentable = where_you_been
luke_comment.save

rip = luke.statuses.create(
  content: "Here's a shout out to the two who trained me as a Jedi, I wouldn't be where I am without them. So here's to Obi Wan and Yoda! R.I.P.",
  media_item_ids: [obi_yoda.id],
  wall_id: luke.id
)

i_know = leia.statuses.create(
  content: "I love you",
  wall_id: han.id
)

han_i_know_comment = han.comments.new(
  text: "I know.",
  media_item_ids: [han_i_know_solo.id]
)

han_i_know_comment.commentable = i_know
han_i_know_comment.save

han_chewie_conv = han.statuses.create(
  content: "Laugh it up, fuzzball.",
  wall_id: chewie.id
)

chewie.comments.create(
  text: random_wookie_sentence,
  commentable_type: 'Status',
  commentable_id: han_chewie_conv.id
)

han.comments.create(
  text: "Don't be so sensitive.",
  commentable_type: 'Status',
  commentable_id: han_chewie_conv.id
)

chewie.comments.create(
  text: random_wookie_sentence,
  commentable_type: 'Status',
  commentable_id: han_chewie_conv.id
)

han.comments.create(
  text: "I did not!",
  commentable_type: 'Status',
  commentable_id: han_chewie_conv.id
)

chewie.comments.create(
  text: random_wookie_sentence,
  commentable_type: 'Status',
  commentable_id: han_chewie_conv.id
)

han.comments.create(
  text: "Seriously, when are you going to let that go?",
  commentable_type: 'Status',
  commentable_id: han_chewie_conv.id
)

chewie.comments.create(
  text: random_wookie_sentence,
  commentable_type: 'Status',
  commentable_id: han_chewie_conv.id
)

chewie.update_attribute(:cover_image_url, "https://devbook.objects.cdn.dream.io/media_items/media/000/000/032/large/kashyyyk_by_wutangclanshirt-d6237t0.jpg?1478634184")

media_ids = [walkers.id, stormtrooper.id, han_chewie.id, millenium_falcon.id]
crazy_battles = luke.statuses.create(
  content: "Man, we've had some crazy times in this galaxy far away. Just wanted to share some pics from some of the battles over the years...",
  media_item_ids: media_ids,
  wall_id: luke.id
)

all_images = random_images + droid_images + [walkers, stormtrooper, han_chewie, millenium_falcon, han_i_know_solo, obi_yoda]

demo_users = User.where(demo: true)

def random_media_items(media_items)
  media_item_ids = []
  rand(6..15).times do
    media_item_ids << media_items.reject {|item| media_item_ids.include?(item.id)}.sample.id
  end
  media_item_ids
end

def create_random_album(user, media_items)
  user.albums.create(
    title: Faker::StarWars.specie,
    description: Faker::StarWars.quote,
    media_item_ids: random_media_items(media_items)
  )
end

p "making random albums"

demo_users.each do |user|
  rand(3..7).times do
    create_random_album(user, all_images)
  end
end
