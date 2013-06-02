class Category < ActiveRecord::Base
  attr_accessible :title, :text
  has_many :subcategory_category
  has_many :subcategory, :through => :subcategory_category
  has_many :subcategory
  has_many :uploads
  has_many :pages
end
