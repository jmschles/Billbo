class BillingsController < ApplicationController

	def create
		@billing = Billing.new(params[:billing])
		@billing.save!
	end
	
end
