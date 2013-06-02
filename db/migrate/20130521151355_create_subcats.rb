class CreateSubcats < ActiveRecord::Migration
  def change
    create_table :subcats do |t|
      t.string :title
      t.references :category

      t.timestamps
    end
    add_index :subcats, :category_id
  end
end
