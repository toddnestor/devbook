class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_object, only: [:update, :destroy]

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.commentable.can_comment?(current_user) && @comment.save
      @object = @comment
      render :show
    else
      render 'api/shared/errors', status: 422
    end
  end

  def update
    if @object.update(comment_params)
      render :show
    else
      render 'api/shared/errors', errors: @object.errors.full_messages
    end
  end

  def destroy
    @object.destroy
    render json: {}
  end

  private
  def comment_params
    params.require(:comment).permit(:commentable_type, :commentable_id, :parent_id, :text, media_item_ids: [])
  end
end
