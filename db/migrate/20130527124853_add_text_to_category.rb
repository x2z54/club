class AddTextToCategory < ActiveRecord::Migration
  def change
    add_column :categories, :text, :text
  end
end
