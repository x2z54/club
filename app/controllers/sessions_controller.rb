class SessionsController < ApplicationController
  
  def new
  end

  def create

	user = Users.find_by_email(params[:email])

  if user && user[:role] == "Admin" &&  user.authenticate(params[:password_digest]) 
    session[:user_id] = user.id
    redirect_to :controller => :welcome
  else
	if user && user.authenticate(params[:password_digest])
	session[:user_id] = user.id
	redirect_to :controller => :welcome
	else
    redirect_to :controller => :welcome
  	end
  end
end


  def destroy
  	session[:user_id] = nil
  	redirect_to :controller => :welcome
  end

end
