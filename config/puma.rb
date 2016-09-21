if ENV['RACK_ENV'] == 'production'

  # pumactl (DON'T allow external access!)
  activate_control_app "tcp://127.0.0.1:#{File.read('tmp/control_port').strip}"

  bind "unix://tmp/puma.sock"
  pidfile "tmp/puma.pid"
  rackup "config.ru"
  state_path "tmp/puma.state"
  stdout_redirect "tmp/out.log", "tmp/err.log"
  daemonize true
end
