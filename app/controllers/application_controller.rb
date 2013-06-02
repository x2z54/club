class ApplicationController < ActionController::Base
  protect_from_forgery

  def init_user
  	if session[:user_id] != nil
      @current_user = Users.find(session[:user_id])
      return @current_user
    end
  end
  
end
