require_relative 'requirements'

class OlarFest < Sinatra::Base
	helpers Sinatra::ContentFor
	
	get '/' do
		@rekryType = nil
		erb :root
	end
	get '/rekryDescriptions/markkinointi' do
		erb :'rekryDescriptions/markkinointi'
	end
	
	get '/rekry/:type' do |type|
	 @rekryType = type
	 erb :root
	end
end
