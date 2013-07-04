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
  attr_accessible :amount, :description, :user_id, :billings_attributes

  validates :description, :amount, :user, :presence => true
  validates :amount, :numericality => { :greater_than => 0 }

  belongs_to :user
  has_many :billings, :dependent => :destroy
  has_many :participants, :through => :billings

  accepts_nested_attributes_for :billings,
  	:reject_if => (lambda do |attributes|
  		return attributes['participant_id'].blank?
  	end)

end
