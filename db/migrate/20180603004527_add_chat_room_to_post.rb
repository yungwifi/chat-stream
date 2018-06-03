class AddChatRoomToPost < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :chat_room, foreign_key: true
  end
end
