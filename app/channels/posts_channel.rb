class PostsChannel < ApplicationCable::Channel
  before_subscribe :authenticate_user!, :except => [:show, :index]
  def subscribed
    @user = current_user
    @post = @user.posts.build(post_params)
    @chat_room = ChatRoom.find(params[:chat_room_id])
    @post.chat_room = @chat_room
    stream_for @chat_room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
