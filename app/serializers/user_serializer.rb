class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :chat_room_id
  has_many :posts
end
