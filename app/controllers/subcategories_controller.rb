class SubcategoriesController < ApplicationController

before_filter :init_user, :only => [:show,:index,:edit]

	 def index
    @categories = Category.all
    @subcategorys = Subcategory.all
    end


  # GET /brands/1
  # GET /brands/1.json
  def show
    @categories = Category.all
    @subcategorys = Subcategory.all
    @subcategory = Subcategory.find(params[:id])
  end

  # GET /brands/new
  # GET /brands/new.json
  def new
    @subcategory = Subcategory.new
  end

  # GET /brands/1/edit
  def edit
    @subcategory = Subcategory.find(params[:id])
  end

  # POST /brands
  # POST /brands.json
  def create
    @category = Category.find(params[:category_id])
    @subcategory = @category.subcategory.new(params[:subcategory])

      if @subcategory.save
        redirect_to subcategories_path
      end

  end

  # PUT /brands/1
  # PUT /brands/1.json
  def update
    @subcategory = Subcategory.find(params[:id])

    respond_to do |format|
      if @subcategory.update_attributes(params[:subcategory])
        format.html { redirect_to @subcategory, notice: 'Brand was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @subcategory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /brands/1
  # DELETE /brands/1.json
  def destroy
    @subcategory = Subcategory.find(params[:id])
    @subcategory.destroy

    respond_to do |format|
      format.html { redirect_to categories_url }
      format.json { head :no_content }
    end
  end
end
