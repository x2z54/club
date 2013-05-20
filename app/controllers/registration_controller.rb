class RegistrationController < ApplicationController
	def index	
	end

	def create	
		@user = Users.new(params[:user])
		if @user.save
		redirect_to root_path
		end
	end
end
