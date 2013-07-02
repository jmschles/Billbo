# == Schema Information
#
# Table name: billings
#
#  id             :integer          not null, primary key
#  bill_id        :integer
#  participant_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Billing < ActiveRecord::Base
  attr_accessible :bill_id, :participant_id

  belongs_to :bill
  belongs_to :participant, :class_name => "User"
end
