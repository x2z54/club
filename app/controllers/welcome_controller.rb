class WelcomeController < ApplicationController

	before_filter :init_user

	def index
		@posts = Post.all
		@categories = Category.all
		@subcategorys = Subcategory.all
	end
end
