class HomeController < ApplicationController
  before_action :require_login
  
  def index
    unless user_signed_in?
      redirect_to "/users/sign_in"
    end
    @posts = Post.all.reverse
  end
  
  def lndex
    unless user_signed_in?
      redirect_to "/users/sign_in"
    end
    @posts = Post.all.reverse
  end
  
  def popular_stories
    unless user_signed_in?
      redirect_to "/users/sign_in"
    end
    @posts = Post.all.reverse
  end
  
  def popular_story
    unless user_signed_in?
      redirect_to "/users/sign_in"
    end
    @posts = Post.all.reverse
  end
  
  def recent_story
    unless user_signed_in?
      redirect_to "/users/sign_in"
    end
    @posts = Post.all.reverse
  end
  
  def recent_stories
    unless user_signed_in?
      redirect_to "/users/sign_in"
    end
    @posts = Post.all.reverse
  end
  
  def comment_write
    comment = Comment.new
    comment.content = params[:comment_content]
    comment.post_id = params[:id_comment]
    comment.save
    
    redirect_to :back
  end
  
  def write
    post = Post.new(title: params[:title],
                  content: params[:content],
                  user: current_user)
    
    file = params[:pic]
    uploader = MachineUploader.new
    uploader.store!(file)
    
    post.image_url = uploader.url
    
    if post.save
      redirect_to :back
    else
      render :text => post.errors.messages
    end
    
    def show
      @users = User.all
    end 
  end
  
end

