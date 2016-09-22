#!/bin/bash

bundle install
export RACK_ENV=production
bundle exec pumactl -F config/puma.rb status > /dev/null
if [ $? -eq 0 ] # If puma is already running
then
  bundle exec pumactl -F config/puma.rb restart
else
  bundle exec pumactl -F config/puma.rb start
fi
