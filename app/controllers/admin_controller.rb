class AdminController < ApplicationController
	def index
		if session[:user_id] != nil
  			@current_user = Users.find(session[:user_id])
  			if @current_user[:role] != "Admin"
  				redirect_to :controller => :welcome
  			end
  		else
  			redirect_to :controller => :welcome
  		end

      	@users = Users.all
      	@posts = Post.all
	end
end
