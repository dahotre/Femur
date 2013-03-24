class ApplicationController < ActionController::Base
  protect_from_forgery
  
  protected
  def authenticate
    if session[:user_id]
      # do nothing..
    else
      flash[:warning] = 'Not logged in..'
      redirect_to login_url
    end
  end
end
