class Api::MediaItemsController < ApplicationController
  #domain: http://devbook.objects.cdn.dream.io/
  # devbook.objects-us-west-1.dream.io
  def create
    @media_items = []
    if current_user
      errors = false

      params.each do |key, value|
        unless ["format", "controller", "action"].include?(key)
          media_item = MediaItem.new(media: value)
          media_item.user_id = current_user.id
          if media_item.save
            @media_items << media_item
          else
            errors = true unless media_item.save
          end
        end
      end
    else
      errors = true
    end

    if !errors
      render :index
    else
      render json: ["Something went wrong"], status: 422
    end
  end

  private
  def media_params
    params.require(:media).permit(:url, :title, :caption, :media)
  end
end
