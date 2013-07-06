class SessionsController < ApplicationController

  def create
    @user = User.find_by_email(params[:user][:email])
    if @user && @user.verify_password(params[:user][:password])
      login_user(@user)
      redirect_to root_url
    else
      flash.now[:errors] ||= []
      if !@user
        flash.now[:errors] << "Email not found."
      elsif !@user.verify_password(params[:user][:password])
        flash.now[:errors] << "Invalid password."
      end
      @user = User.new(params[:user])

      render :new
    end
  end

  def destroy
    logout_user
    redirect_to new_session_url
  end

  def new
    @user = User.new
  end
end
