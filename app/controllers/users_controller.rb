class UsersController < ApplicationController
	def index
  		@user = Users.all
  		@categories = Category.all
		@subcategorys = Subcategory.all
  		  	if session[:user_id] != nil
  			@current_user = Users.find(session[:user_id])
  			if @current_user[:role] != "Admin"
  				redirect_to :controller => :welcome
  			end
  		end
	end

	def show
	end

	def edit
	end

	def update
		 @user = Users.find(params[:id])
		 @current_user = Users.find(session[:user_id])
 
  			if @user.update_attributes(params[:user])
    			if @current_user[:role] == "Admin"
    				redirect_to :controller => :users
    			else
    				redirect_to :action => :show
    			end
  			else
    			redirect_to :action => :show
  			end
	end

	def destroy

		@user = Users.all
		i = 0
		@user.each do |user|
			if user[:role] == "Admin"
				i = i+1
			end
		end

		@user = Users.find(params[:id])
		if @user[:role] == "User"  
	  	@user.destroy
	  	elsif @user[:role] == "Admin" && i>1
	  	@user.destroy 
    	end
    	
    	redirect_to :action => :index
	end

end
