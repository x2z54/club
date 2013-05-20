class WelcomeController < ApplicationController
	def index
		@posts = Post.all
		 if session[:user_id] != nil
		 @current_user = Users.find(session[:user_id])
		end
	end
end
