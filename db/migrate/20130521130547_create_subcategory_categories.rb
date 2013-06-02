class CreateSubcategoryCategories < ActiveRecord::Migration
  def change
    create_table :subcategory_categories do |t|
      t.integer :subcategory_id
      t.integer :category_id

      t.timestamps
    end
  end
end
