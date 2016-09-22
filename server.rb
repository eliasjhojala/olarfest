require_relative 'requirements'

class OlarFest < Sinatra::Base
	helpers Sinatra::ContentFor
	register Sinatra::Cache
	set :cache_enabled, true
	
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
	
	get '/rekry/:type' do |type|
		erb "rekryDescriptions/#{type}".to_sym, layout: false
	end
end
