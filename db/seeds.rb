# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Post.create(title: '안녕하세요', content: '첫 글 입니다.')
#Comment.create(content: '첫리플입니다.', post_id: 1)

new_post = Post.new
new_post.title = "안녕하세요"
new_post.content = "이렇게 해도 동작하나?!"
new_post. save

comment = Comment.new
comment.content = "첫번째 리플"
comment.post = new_post
comment.save