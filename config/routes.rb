Femur::Application.routes.draw do
  resources :bookmarks


  get "home/index"

  resources :posts

  root to: "home#index"
end
