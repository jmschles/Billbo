class BillsController < ApplicationController

  respond_to :json

  def create
    @bill = current_user.bills.build(params[:bill])
    @bill.save!

    render :json => @bill
  end

  def index
    @bills = current_user.bills.all
    @bills.concat current_user.bill_responsibilities
  end

  def show
    @bill = Bill.find(params[:id])
  end

end
