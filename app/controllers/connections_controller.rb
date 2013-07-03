class ConnectionsController < ApplicationController

	def create
		receiver = User.find_by_email(params[:email])
		@connection = current_user.connections.build( :receiver_id => receiver.id)
		@connection.save!
		render :json => @connection
	end

	def index
		@connected_users = current_user.connected_users
		render :json => @connected_users
	end

end
