class Api::AlbumsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_object, only: [:destroy, :show, :update]
  before_action :set_album, only: [:photos]

  def index
    @user = User.find(params[:user_id])
    @user = current_user unless @user
    @albums = @user.albums
  end

  def create
    @object = current_user.albums.new(input_params)

    if @object.save
      render :show
    else
      render '/api/shared/errors', status: 401
    end
  end

  def photos
    @media_items = Album.find(params[:album_id]).media_items
  end

  def input_params
    params.require(:album).permit(:title, :description, media_item_ids: [])
  end
end
