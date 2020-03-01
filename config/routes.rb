Rails.application.routes.draw do
<<<<<<< HEAD
  get 'hello_world', to: 'hello_world#index'
=======
  root 'appointments#index'

  resources :appointments

>>>>>>> 5400948c01b3069b8c8005164c94cbaf7d3071be
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
