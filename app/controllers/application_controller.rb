class ApplicationController < ActionController::Base
  protect_from_forgery
  
  protected
  def authenticate
    if session[:user_id] == User.find_by(:email => 'dahotre.aniket@gmail.com').id
      # do nothing..
      true
    else
      #flash[:warning] = 'Not logged in..'
      #redirect_to login_url
      false
    end
  end
end
