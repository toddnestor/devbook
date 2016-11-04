Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :index]
    get '/users/:username', to: 'users#show'
    post '/session/demo', to: 'sessions#demo'
    resource :session, only: [:create, :destroy]
    resources :media_items, only: [:create, :update, :destroy, :show]
  end

  root to: 'static_pages#root'
  get '*all', to: 'static_pages#root', format: false
end
