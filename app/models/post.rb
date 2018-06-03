class Post < ApplicationRecord
  belongs_to :user
  belongs_to :chat_room
  has_many :comments, dependent: :destroy
end
