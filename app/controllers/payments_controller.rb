class PaymentsController < ApplicationController

	def create
		@payment = current_user.payments.build(params[:payment])
		@payment.save!

		render :json => @payment
	end

end
