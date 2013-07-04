class AddScaleToAmountInBills < ActiveRecord::Migration
  def change
    remove_column :bills, :amount
    add_column :bills, :amount, :decimal, :precision => 8, :scale => 2
  end
end
