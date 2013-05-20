class CommentsController < ApplicationController
	def create
		@post = Post.find(params[:post_id])
    	@comment = @post.comments.new(params[:comment])
    	if session[:user_id] != nil
  			@current_user = Users.find(session[:user_id])
  			@comment[:commenter] = @current_user[:name]
  			@comment.save
    		redirect_to post_path(@post)
  		else
  			redirect_to :controller => :registration
  		end
	end

	def destroy
    	@comment = Comment.find(params[:id])
    	@comment.destroy
    	redirect_to :back
    end
end
