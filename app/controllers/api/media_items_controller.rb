class Api::MediaItemsController < ApplicationController
  #domain: http://devbook.objects.cdn.dream.io/
  def create
    uploaded_files = []

    errors = false

    params.each do |key, value|
      unless ["format", "controller", "action"].include?(key)
        media_item = MediaItem.new(media: value)
        media_item.user_id = current_user.id
        errors = true unless media_item.save
      end
    end

    if !errors
      render json: uploaded_files
    else
      debugger
      render json: ["Something went wrong"], status: 422
    end
  end

  private
  def media_params
    params.require(:media).permit(:url, :title, :caption, :media)
  end
end
