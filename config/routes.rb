Turclub::Application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  match "/create_category_page" => "pages#create_category_page"
  match "/create_category_link" => "uploads#create_category_link"

  root :to => "welcome#index"
  mount Ckeditor::Engine => '/posts/new'

  resources :posts do
    resources :comments
  end

  resources :categories
  resources :subcategories
  resources :pages
  resources :uploads
  resources :categories do
    resources :subcategories
    resources :uploads
    resources :pages
  end
  resources :subcategories do
    resources :pages
    resources :uploads
  end



  resources :ckeditor
  resources :users
  resources :sessions
  resources :admin
  get "log_out" => "sessions#destroy", :as => "log_out"
end
