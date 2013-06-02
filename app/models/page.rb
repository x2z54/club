class Page < ActiveRecord::Base
  belongs_to :subcategory
  belongs_to :category
  attr_accessible :body, :title, :text
end
