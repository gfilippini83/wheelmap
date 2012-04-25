class UsersController < ApplicationController

  skip_before_filter :verify_authenticity_token, :only => :authenticate

  before_filter :authenticate_user!,        :except => :authenticate
  before_filter :authenticate_mobile_user,  :only => :authenticate
  before_filter :authenticate_mobile_app,   :only => :authenticate

  before_filter :remove_password_from_params_if_blank, :only => :update

  before_filter :authenticate_admin!, :only => :newsletter

  rescue_from OAuth::Unauthorized, :with => :unauthorized

  def index
    @user = current_user
  end

  def newsletter
    newsletter = FasterCSV.generate(:encoding => 'u', :col_sep => ',') do |csv|
      csv << ["Email","Newsletter"]
      User.order('wants_newsletter ASC, email ASC').each do |user|
        csv << [user.email, user.wants_newsletter? ? 'Ja' : 'Nein' ]
      end
    end
    send_data(newsletter, :filename => "newsletter_#{Date.today.strftime('%Y_%m_%d')}.csv", :type => :csv, :encoding => 'utf8')
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.attributes = params[:user]
    email_changed = @user.email_changed?
    if @user.save
      flash[:notice] = t('flash.actions.update.notice', :resource_name => User.model_name.human)
      flash[:notice] = t('devise.confirmations.send_instructions') if email_changed
    end
    redirect_to edit_profile_path(@user.id)
  end


  def after_signup_edit
    @user ||= current_user
  end

  def after_signup_update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      flash[:notice] = t('devise.confirmations.send_instructions') if @user.email.present?
      redirect_to after_sign_in_path_for(:user)
    else
      render :template => 'users/after_signup_edit'
    end
  end

  def authenticate
    render :json => {:id => @user.id}.to_json, :status => 200
  end

  protected

  def authenticate_mobile_user
    unless @user = User.authenticate(params[:email], params[:password])
      render :text => 'Authorization failed', :status => 400
    end
  end

  def authenticate_mobile_app
    unless @user.app_authorized?
      render :json => {:id => @user.id, :message => 'Application needs to be authorized', :url => edit_user_url(@user)}.to_json, :status => 403
    end
  end

  def remove_password_from_params_if_blank
    if params[:user][:password].blank?
      params[:user].delete(:password)
    end

    if params[:user][:password_confirmation].blank?
      params[:user].delete(:password_confirmation)
    end
  end
end