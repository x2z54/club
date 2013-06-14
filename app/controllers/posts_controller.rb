class PostsController < ApplicationController
before_filter :init_user, :only => [:show,:index,:edit]
respond_to :html, :json

  def index
    @posts = Post.all
    @categories = Category.all
    @subcategorys = Subcategory.all
    respond_with(@posts)
  end


  def show
    @categories = Category.all
    @subcategorys = Subcategory.all
    @post = get_post(params[:id])
    respond_with(@post)
  end

  def new
    @post = Post.new
    respond_with(@post)
  end


  def edit
    @post = get_post(params[:id])
  end

  def create
    @post = Post.new(params[:post])

      if @post.save
        respond_with(@post, status: :created, location: @post)
      else
        respond_with(@post) do |format|
          format.html { render action: "New" }
        end
      end
  end


  def update
    @post = get_post(params[:id])

      if @post.update_attributes(params[:post])
        respond_with(@post, status: :created, location: @post)
      else
        respond_with(@post) do |format|
          format.html { render action: "Edit" }
        end
      end
  end


  def destroy
    @post = get_post(params[:id])
    @post.destroy
    respond_with(@room, location: posts_url)
  end

  private
  def get_post(post_id)
    Post.find(post_id)
  end

end
