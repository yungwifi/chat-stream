class ChatRoomSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :posts
end
