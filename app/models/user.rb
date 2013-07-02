# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)
#  password_digest :string(255)
#  session_token   :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :password, :email

  validates :email, :presence => true,
  									:uniqueness => true,
  									:email => true

  has_many :bills

  has_many :billings, :foreign_key => :participant_id
  has_many :bill_responsibilities, :through => :billings, :source => :bill

  has_many :connections, :foreign_key => :creator_id
  has_many :connected_users, :through => :connections, :source => :receiver

  def password=(password)
  	self.password_digest = BCrypt::Password.create(password)
  end

  def verify_password(password_attempt)
  	BCrypt::Password.new(self.password_digest) == password_attempt
  end

  def reset_session_token
  	self.session_token = SecureRandom.urlsafe_base64(16)
  	self.save!
  end
end
