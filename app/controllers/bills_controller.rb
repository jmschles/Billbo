class BillsController < ApplicationController

	respond_to :json

	def create
		@bill = current_user.bills.build(params[:bill]);
		@bill.save!

		render :json => @bill
	end

	def index
		@bills = current_user.bills

		render :json => @bills
	end
end
