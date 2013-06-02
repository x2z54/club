class Subcategory < ActiveRecord::Base
  attr_accessible :category_id, :title, :text
  has_many :subcategory_category
  has_many :category , :through => :subcategory_category
  has_many :pages
  has_many :uploads
  belongs_to :category
end
