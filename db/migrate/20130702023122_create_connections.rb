class CreateConnections < ActiveRecord::Migration
  def change
    create_table :connections do |t|
      t.integer :creator_id
      t.integer :receiver_id

      t.timestamps
    end
  end
end
