# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  description :string(255)
#  amount      :decimal(, )
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
