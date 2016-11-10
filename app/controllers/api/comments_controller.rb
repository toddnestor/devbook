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

  def index
    page = params[:page] ? params[:page] : 1
    @comments = Comment.where(
      commentable_type: params[:type],
      commentable_id: params[:id])
      .order(created_at: :desc)
      .page(page)
      .per(10)
      .to_a
      .reverse
  end

  private
  def input_params
    params.require(:comment).permit(:commentable_type, :commentable_id, :parent_id, :text, media_item_ids: [])
  end
end
