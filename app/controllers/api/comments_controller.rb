class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_object, only: [:update, :destroy]

  def create
    @object = current_user.comments.new(input_params)

    if @object.save
      render :show
    else
      render 'api/shared/errors', status: 422
    end
  end

  private
  def input_params
    params.require(:comment).permit(:commentable_type, :commentable_id, :parent_id, :text, media_item_ids: [])
  end
end
