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

class Connection < ActiveRecord::Base
  attr_accessible :creator_id, :receiver_id

  validates :creator, :receiver, :presence => true

  belongs_to :creator, :class_name => "User"
  belongs_to :receiver, :class_name => "User"
end
