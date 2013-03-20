class Post
  include Mongoid::Document
  field :url_title, type: String
  field :title, type: String
  field :body, type: String
  field :draft, type: Boolean
end
