class Post
  include Mongoid::Document
  field :url_title, type: String
  field :title, type: String
  field :article, type: String
  field :draft, type: Boolean
end
