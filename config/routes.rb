Billbo::Application.routes.draw do
  root :to => "root#root"

  resources :bills, :only => [:create, :index, :show, :destroy]
  resources :billings, :only => [:create]
  resources :connections, :only => [:create, :index]
  resources :payments, :only => [:create, :index]

  resource :session, :only => [:create, :destroy, :new]
  resources :users, :only => [:create, :new]

end