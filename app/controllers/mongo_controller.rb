class MongoController < ApplicationController
    
    def proj3
        @result = Employee.find()
         puts @result
    end
    
    def index
         #@_id = params[:dataset]
         
         #console.log("Check1")
         #console.log(@result)
         #render :partial => 'index'
    end
end
