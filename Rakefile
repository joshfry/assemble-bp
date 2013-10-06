require 'rake/clean'

CLEAN = FileList['node_modules', 'vendor', '.sass-cache', '.bundle']

task :default do

  puts '### Installing Ruby Gems'
  sh "bundle install --path=vendor"

  puts '### Installing npm modules'
  sh "npm install"

  puts '### Installing Bower packages'
  sh "bower install"

end
