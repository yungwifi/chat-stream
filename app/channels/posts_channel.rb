class PostsChannel < ApplicationCable::Channel
  def subscribed
    @user = current_user
    @chat_room = ChatRoom.find(params[:chat_room_id])
    stream_for @chat_room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
