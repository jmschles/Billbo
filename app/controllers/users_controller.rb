class UsersController < ApplicationController

  def create
    @user = User.new(params[:user])
    if @user.save
      login_user(@user)
      redirect_to root_url
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << "Invalid email/password combination"
      render :new
    end
  end

  def new
    @user = User.new
  end

end
