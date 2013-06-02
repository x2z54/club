class SubcategoryCategory < ActiveRecord::Base
  attr_accessible :category_id, :subcategory_id
  belongs_to :subcategory
  belongs_to :category
end
