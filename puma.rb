root = "#{Dir.getwd}"

# pumactl (DON'T allow external access!)
activate_control_app "tcp://127.0.0.1:#{File.read('tmp/control_port').strip}"

bind "unix://#{root}/tmp/puma.sock"
pidfile "#{root}/tmp/puma.pid"
rackup "#{root}/config.ru"
state_path "#{root}/tmp/puma.state"
daemonize true
