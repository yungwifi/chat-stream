class AddChatRoomToUser < ActiveRecord::Migration[5.2]
  def change
    add_reference :users, :chat_room, foreign_key: true
  end
end
