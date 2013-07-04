class ConnectionsController < ApplicationController

  def create
    receiver = User.find_by_email(params[:email])
    @connection = current_user.connections.build( :receiver_id => receiver.id)
    @connection.save!
    inverse_creator_id = @connection.receiver_id
    inverse_receiver_id = @connection.creator_id
    @inverse_connection = Connection.new( :creator_id => inverse_creator_id,
                                          :receiver_id => inverse_receiver_id )
    @inverse_connection.save!
    render :json => @connection
  end

  def index
    @connected_users = current_user.connected_users
    render :json => @connected_users
  end

end
