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

class Bill < ActiveRecord::Base
  attr_accessible :amount, :description, :user_id

  validates :description, :amount, :user, :presence => true

  belongs_to :user
  has_many :billings
  has_many :participants, :through => :billings
end
