class Bookmark
  include Mongoid::Document
  field :url, type: String
  field :title, type: String
  field :note, type: String
  field :tags, type: Array
  
  validates_uniqueness_of :url
  
  before_save :parse_tags
  
  private
    def parse_tags
      puts self.tags
      self.tags = self.tags.split(', ')
      puts self.tags
    end
end
