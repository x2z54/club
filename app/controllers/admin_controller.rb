class AdminController < ApplicationController

	def index
			@categories = Category.all
			@subcategorys = Subcategory.all
		if session[:user_id] != nil
  			@current_user = Users.find(session[:user_id])
      		@users = Users.all
      		@posts = Post.all
    	end
	end
end
