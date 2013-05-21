class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.title :name
      t.text :text

      t.timestamps
    end
  end
end
