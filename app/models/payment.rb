class Payment < ActiveRecord::Base
  attr_accessible :amount, :payer_id, :recipient_id

  validates :payer, :recipient, :presence => true
  validates :amount, :presence => true,
  									 :numericality => { :greater_than => 0 }
end
