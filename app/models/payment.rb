# == Schema Information
#
# Table name: payments
#
#  id           :integer          not null, primary key
#  payer_id     :integer
#  recipient_id :integer
#  amount       :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Payment < ActiveRecord::Base
  attr_accessible :amount, :payer_id, :recipient_id

  validates :payer, :recipient, :presence => true
  validates :amount, :presence => true,
                     :numericality => { :greater_than => 0 }
  validate :cannot_pay_yourself

  belongs_to :payer, :class_name => "User"
  belongs_to :recipient, :class_name => "User"

  def cannot_pay_yourself
    if payer_id == recipient_id
      errors[:payment] << "cannot be made to yourself"
    end
  end
end
