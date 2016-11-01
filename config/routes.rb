Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
  get '*all', to: 'static_pages#root', format: false
end
