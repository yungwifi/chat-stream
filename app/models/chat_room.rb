class ChatRoom < ApplicationRecord
    has_many :users
    has_many :posts
end
