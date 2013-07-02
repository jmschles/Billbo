class CreateBillings < ActiveRecord::Migration
  def change
    create_table :billings do |t|
      t.integer :bill_id
      t.integer :participant_id

      t.timestamps
    end
  end
end
