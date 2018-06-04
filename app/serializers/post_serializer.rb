class PostSerializer < ActiveModel::Serializer
  attributes :id, :chat_room_id, :user_id, :content, :created_at
end
