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

require 'test_helper'

class PaymentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
