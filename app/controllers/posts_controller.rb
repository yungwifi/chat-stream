class PostsController < ApplicationController
    before_action :authenticate_user!, :except => [:show, :index]
    load_and_authorize_resource  only: [:destroy]
  
    def index
      @posts = Post.all

      puts @posts
      
      render json: @posts
    end
  
    def show
      @post = Post.find(params[:id])
  
      render json: @post
    end

    def create
      @user = current_user
      @post = @user.posts.build(post_params)
      @chat_room = ChatRoom.find(post_params[:chat_room_id])
      if @user.save
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          PostSerializer.new(post)
        ).serializable_hash
        PostsChannel.broadcast_to @chat_room, serialized_data
        head :ok
      end
    end
  
    def update
      @post = Post.find(params[:id])
  
  
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @user = current_user
      @post = Post.find(params[:id]).delete
      
      render status: :ok
    end
  
    private
  
    def post_params
      params.require(:post).permit(:content)
    end
  end