class MongoController < ApplicationController
    
    def proj3
    end
    
    def index
         #@_id = params[:dataset]
         @result = Employee.find()
         render :partial => 'index'
    end
end
