class Upload < ActiveRecord::Base
  belongs_to :category
  belongs_to :subcategory
  attr_accessible :link, :title
end
