class Api::AlbumsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_object, only: [:destroy, :show, :update]

  def index
    @albums = User.find(params[:user_id]).albums
  end

  def create
    @album = current_user.albums.new(input_params)

    if @album.save
      render :show
    else
      render '/api/shared/errors', status: 401
    end
  end

  private
  def input_params
    params.require(:album).permit(:title, :description, media_item_ids: [])
  end
end
