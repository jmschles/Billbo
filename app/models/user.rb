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

  validates :password_digest, :presence => { :message => "must be at least 6 characters"}

  has_many :bills

  has_many :billings, :foreign_key => :participant_id
  has_many :bill_responsibilities, :through => :billings, :source => :bill

  has_many :connections, :foreign_key => :creator_id
  has_many :connected_users, :through => :connections, :source => :receiver

  has_many :received_payments,
             :class_name => "Payment",
             :foreign_key => :recipient_id

  has_many :delivered_payments,
             :class_name => "Payment",
             :foreign_key => "payer_id"

  def password=(password)
    if password.length < 6
      self.password_digest = nil
    else
      self.password_digest = BCrypt::Password.create(password)
    end
  end

  def verify_password(password_attempt)
    BCrypt::Password.new(self.password_digest) == password_attempt
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
  end
end
