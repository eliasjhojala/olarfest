require_relative 'requirements'

class OlarFest < Sinatra::Base
	helpers Sinatra::ContentFor
	
	get '/' do
		erb :root
	end
	get '/rekryDescriptions/markkinointi' do
		erb :'rekryDescriptions/markkinointi'
	end
end
