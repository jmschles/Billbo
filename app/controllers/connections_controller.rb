class ConnectionsController < ApplicationController

	def create
		@connection = current_user.connections.build(params[:receiver_id])
		@connection.save!
	end

	def index
		@connected_users = current_user.connected_users
		render :json => @connected_users
	end

end
