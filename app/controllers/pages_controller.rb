class PagesController < ApplicationController

before_filter :init_user, :only => [:show,:index,:edit]

	def create
		@subcategory = Subcategory.find(params[:subcategory_id])
    @page = @subcategory.pages.new(params[:page])

      if @page.save
        redirect_to :back
      end

	end

  def create_category_page
    @category = Category.find(params[:id])
    @page = @category.pages.new(params[:page])
      if @page.save
        redirect_to :back
      end
  end

	def new
    	@page = Page.new
    end

  def show
    @categories = Category.all
    @subcategorys = Subcategory.all
    @page = get_page(params[:id])
    @subcategory = Page.find(params[:id]).subcategory
    @category = Page.find(params[:id]).category
  end

  def destroy
    @page = get_page(params[:id])
    @page.destroy
  end

  def edit
    @page = get_page(params[:id])
  end

  def update
    @page = get_page(params[:id])
    @page.update_attributes(params[:page])
    redirect_to @page
  end
  
  private
  def get_page(page_id)
    Page.find(page_id)
  end
end
