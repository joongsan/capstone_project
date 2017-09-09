class Post < ActiveRecord::Base
    belongs_to :user
    has_many :comments
    validates :title, presence: { message: "제목이 비었습니다." }
end
