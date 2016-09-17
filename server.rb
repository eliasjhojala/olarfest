require_relative 'requirements'

class OlarFest < Sinatra::Base
	helpers Sinatra::ContentFor
	
	get '/' do
		@rekryType = nil
		@novideo = nil
		erb :root
	end
	
	get '/novideo' do
		@novideo = true
		@rekryType = nil
		erb :root
	end
	get '/rekryDescriptions/markkinointi' do
		erb :'rekryDescriptions/markkinointi'
	end
	
	get '/rekry/:type' do |type|
		@novideo = true
	  @rekryType = type
	  erb :root
	end
end
