class DropMenuTable < ActiveRecord::Migration
  def up
	drop_table :submenus
	drop_table :menus
	drop_table :subcats
  end

  def down
  end
end
