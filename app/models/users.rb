class Users < ActiveRecord::Base
  attr_accessible :email, :name, :password, :surname, :role
  has_secure_password
end
