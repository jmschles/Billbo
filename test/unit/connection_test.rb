# == Schema Information
#
# Table name: connections
#
#  id          :integer          not null, primary key
#  creator_id  :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ConnectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
