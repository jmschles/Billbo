class ConnectionsController < ApplicationController

	def create
		@connection = current_user.connections.build(params[:receiver_id])
		@connection.save!
	end

end
