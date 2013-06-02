class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.string :title
      t.string :link
      t.references :category
      t.references :subcategory

      t.timestamps
    end
    add_index :uploads, :category_id
    add_index :uploads, :subcategory_id
  end
end
