require 'sinatra'

class OlarFest < Sinatra::Base
	get '/' do
		"Palvelin toimii!"
	end
end
