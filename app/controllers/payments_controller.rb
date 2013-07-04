class PaymentsController < ApplicationController

  def create
    @payment = current_user.delivered_payments.build(params[:payment])
    @payment.save!

    render :json => @payment
  end

  def index
    # TODO: shouldn't send all payments...
    @payments = Payment.all

    render :json => @payments
  end
end
