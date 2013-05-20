Turclub::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  root :to => "welcome#index"
  mount Ckeditor::Engine => '/posts/new'

  resources :posts do
    resources :comments
  end
  resources :ckeditor
  resources :registration
  resources :users
  resources :sessions
  resources :admin
  get "log_out" => "sessions#destroy", :as => "log_out"
end
