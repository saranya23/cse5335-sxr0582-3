class MongoController < ApplicationController
    
    def proj3
    end
    
    def index
         @_id = params[:dataset]
         @result = Employee.where(_id: "#{@_id}")
         render :partial => 'index'
    end
end
