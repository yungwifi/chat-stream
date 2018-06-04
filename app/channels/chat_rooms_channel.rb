class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_rooms_channel#{params[:id]}" 
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
