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
	
	
	get '/rekry/markkinointi' 	do erb :'rekryDescriptions/markkinointi', 			:layout => false end
	get '/rekry/rekrytointi' 		do erb :'rekryDescriptions/rekrytointi', 				:layout => false end
	get '/rekry/rahoitus' 			do erb :'rekryDescriptions/rahoitus', 					:layout => false end
	get '/rekry/turvallisuus' 	do erb :'rekryDescriptions/turvallisuus', 			:layout => false end
	get '/rekry/catering' 			do erb :'rekryDescriptions/catering', 					:layout => false end
	get '/rekry/luvat' 					do erb :'rekryDescriptions/luvat', 							:layout => false end
	get '/rekry/tekniikka'	 		do erb :'rekryDescriptions/tekniikka', 					:layout => false end
	get '/rekry/kuvaus' 				do erb :'rekryDescriptions/kuvaus', 						:layout => false end
	
			
end
