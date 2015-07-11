require 'sinatra/base'

class ThermoApp < Sinatra::Base

  enable :sessions
  enable :static

  set :views, proc { File.join(root, '.', 'views') }
  # set :public_folder, Proc.new { File.join(root, '..', 'public') }

  get '/' do
    # if session[:temp]
    #   @temp = session[:temp]
    # else
    #   @temp = 20
    # end
    redirect '/thermostat.html'
    # erb :thermostat
  end

  post '/' do
    temp = params[:temp]
    session[:temp] = temp
  end

  get '/temperature' do
    "#{session[:temp] || 20}"
  end



  run! if app_file == $0
end
