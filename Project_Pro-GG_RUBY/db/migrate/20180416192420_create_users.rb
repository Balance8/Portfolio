class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :fname
      t.string :lname
      t.string :rank
      t.string :password_digest

      t.timestamps
    end
  end
end
