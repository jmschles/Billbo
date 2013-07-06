class PaymentsController < ApplicationController

  def create
    @payment = current_user.delivered_payments.build(params[:payment])
    @payment.save!

    render :json => @payment
  end

  def destroy
    @payment = current_user.delivered_payments.find(params[:id])
    @payment.destroy

    render :json => nil
  end

  def index
    @payments = current_user.delivered_payments.all
    @payments.concat current_user.received_payments
  end
end
