# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ChatRoom.destroy_all

chatroom = ChatRoom.create!(title: 'main')

gimli = User.create!( email: 'gimli@myaxe.com', password: 'tennis_balls', password_confirmation: 'tennis_balls', chat_room_id: chatroom.id)

lego = User.create!(email: 'lego@mybow.com', password: 'ieattrash', password_confirmation: 'ieattrash', chat_room_id: chatroom.id)

Post.create!(content: 'I love Tennis balls and my mom and when dad gives me bacon greese.', user_id: gimli.id, chat_room_id: chatroom.id)
Post.create!(content: 'I am also named after a famous movie character from Lord of the Rings, Gimli the Dwarf.', user_id: gimli.id, chat_room_id: chatroom.id)
Post.create!(content: 'I love playing chase with my brother and sometimes when dad leaves I get into the trash', user_id: lego.id, chat_room_id: chatroom.id)
Post.create!(content: 'I am also named after a famous movie character from Lord of the Rings, Legolas the Elf.', user_id: lego.id, chat_room_id: chatroom.id)


puts "Seeded Database Successfuly"