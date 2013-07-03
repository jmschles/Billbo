module SessionsHelper

	def current_user
		return nil unless session[:session_token]
		@current_user = User.find_by_session_token(session[:session_token])
	end

	def logged_in?
		!!current_user
	end

	def require_login
		unless logged_in?
			redirect_to new_session_url
		end
	end

	def login_user(user)
		user.reset_session_token
		session[:session_token] = user.session_token
	end

	def logout_user
		@user = current_user
		if @user
			@user.session_token = SecureRandom.urlsafe_base64(8)
			@user.save!
		end
		session[:session_token] = nil
	end

end
