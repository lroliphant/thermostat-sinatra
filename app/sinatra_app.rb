require 'sinatra/base'

class ThermoApp < Sinatra::Base

  enable :sessions
  enable :static

  set :views, proc { File.join(root, '.', 'views') }
  # set :public_folder, Proc.new { File.join(root, '..', 'public') }

  get '/' do
    # erb :thermostat
    temp = session[:temp]
    redirect '/thermostat.html'
  end

  post '/' do
    session[:temp] = params[:temp]

  end

  run! if app_file == $0
end
