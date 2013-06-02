class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.text :body
      t.references :subcategory

      t.timestamps
    end
    add_index :pages, :subcategory_id
  end
end
