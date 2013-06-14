class CategoriesController < ApplicationController
  before_filter :init_user, :only => [:show,:index,:edit]
  respond_to :html, :json

	def index
    @categories = Category.all
    @subcategorys = Subcategory.all
    respond_with(@categories)
  end


  def show
    @category = get_category(params[:id])
    @categories = Category.all
    @subcategorys = Subcategory.all
    respond_with(@category)
  end


  def new
    @category = Category.new
    respond_with(@category)
  end


  def edit
    @category = get_category(params[:id])
  end


  def create
    @category = Category.new(params[:category])

      if @category.save
        respond_with(@category, status: :created, location: categories_path)
      else
        respond_with(@category) do |format|
          format.html { render action: "New" }
        end
      end
  end


  def update
    @category = get_category(params[:id])

      if @category.update_attributes(params[:category])
        respond_with(@category, status: :created, location: @category)
      else
        respond_with(@category) do |format|
          format.html { render action: "Edit" }
        end
      end
  end


  def destroy
    @category = get_category(params[:id])
    @category.destroy

    respond_with(@category, location: categories_url)
  end

  private
  def get_category(category_id)
    Category.find(category_id)
  end
end
