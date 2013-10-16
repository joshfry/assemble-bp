def consoleHeading(taskName)

  puts
  puts '---------------------------------------'
  puts taskName + '...'
  puts '---------------------------------------'

end

task :setup do

  puts  consoleHeading('Installing Bundler')
  sh    'gem install bundler'

  puts  consoleHeading('Installing Grunt')
  sh    'npm install -g grunt-cli'

  puts  consoleHeading('Installing Bower')
  sh    'npm install -g bower'

end

task :install do

  puts  consoleHeading('Installing Ruby Gems')
  sh    'bundle install --path=vendor'

  puts  consoleHeading('Installing npm modules')
  sh    'npm install'

  puts  consoleHeading('Installing Bower packages')
  sh    'bower install'

end

task :clean do

  puts  consoleHeading('Cleaning out dev dependencies')
  sh    'rm -rf dist'
  sh    'rm -rf build'
  sh    'rm -rf vendor'
  sh    'rm -rf .bundle'
  sh    'rm -rf .sass-cache'
  sh    'rm -rf node_modules'

end
