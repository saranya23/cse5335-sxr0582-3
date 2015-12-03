class MongoController < ApplicationController
    
    def proj3
    end
    
    def index
         @iden = params[:dataset]
         @result = Employee.where(_id: "#{@_id}")
         render :partial => 'index'
    end
end
