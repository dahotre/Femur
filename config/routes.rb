Femur::Application.routes.draw do
  
  get "login" => "sessions#new", :as => "login"
  get "logout" => "sessions#destroy", :as => "logout"
  
  resources :sessions
  resources :users

  get "me/new"

  resources :bookmarks


  get "home/index"

  resources :posts

  root to: "home#index"
end
