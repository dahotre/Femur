# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) are set in the file config/application.yml.
# See http://railsapps.github.com/rails-environment-variables.html
Post.create!(url_title: '1_Title', title: '1 Title', article: 'hello title 1')
Post.create!(url_title: '2_Title', title: '2 Title', article: 'hello title 2')
Post.create!(url_title: '3_Title', title: '3 Title', article: 'hello title 3')
Post.create!(url_title: '4_Title', title: '4 Title', article: 'hello title 4')
