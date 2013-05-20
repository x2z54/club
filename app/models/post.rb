class Post < ActiveRecord::Base
  attr_accessible :title, :text, :theme
  has_many :comments
end
