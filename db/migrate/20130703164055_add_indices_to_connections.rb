class AddIndicesToConnections < ActiveRecord::Migration
  def change
    add_index :connections, [:creator_id, :receiver_id], :unique => true
  end
end
