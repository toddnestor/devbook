Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :index] do
      post '/request_friendship', to: 'friendships#request_friendship'
      post '/cancel_request', to: 'friendships#cancel_request'
      post '/block', to: 'friendships#block'
      post '/unblock', to: 'friendships#unblock'
      post '/unfriend', to: 'friendships#unfriend'
      post '/accept', to: 'friendships#accept'
      post '/deny', to: 'friendships#deny'

      resources :statuses, only: [:create]
      resources :activities, only: [:index]
    end

    resources :statuses, only: [:update, :destroy, :show]

    get '/users/:username', to: 'users#show'
    get '/users/:username/friends', to: 'users#friends'
    post '/session/demo', to: 'sessions#demo'
    resource :session, only: [:create, :destroy]
    resources :media_items, only: [:create, :update, :destroy, :show]
  end

  root to: 'static_pages#root'
  get '*all', to: 'static_pages#root', format: false
end
