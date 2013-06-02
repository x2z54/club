class UploadsController < ApplicationController


	def new
    	@upload = Upload.new

    end

	def create
		@subcategory = Subcategory.find(params[:subcategory_id])
    @upload = @subcategory.uploads.new(params[:upload])
    	if @upload.save
        	redirect_to :back
      	end
	end

  def create_category_link
    @category = Category.find(params[:id])
    @upload = @category.uploads.new(params[:upload])
        if @upload.save
          redirect_to :back
        end
  end


	def destroy
    	@upload= Upload.find(params[:id])
    	@upload.destroy

      	respond_to do |format|
        		format.html { redirect_to :back }
        		format.json { head :no_content }
    	end
  end
end
