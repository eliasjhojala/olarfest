require_relative 'requirements'

class OlarFest < Sinatra::Base
	register Sinatra::AssetPipeline
	
	get '/' do
		erb :root
	end
end
