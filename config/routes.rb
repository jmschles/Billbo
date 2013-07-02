Billbo::Application.routes.draw do
	root :to => "root#root"

	resources :connections, :only => [:create]

  resource :session, :only => [:create, :destroy, :new]
  resources :users, :only => [:create, :new]
  
end