class Post < ActiveRecord::Base
  attr_accessible :title, :text, :theme, :photo
  has_attached_file :photo
  has_many :comments
end
