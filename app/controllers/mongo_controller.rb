class MongoController < ApplicationController
    
    def proj3
    end
    
    def index
         #@_id = params[:dataset]
         @result = Employee.find()
         puts @result
         #console.log("Check1")
         #console.log(@result)
         #render :partial => 'index'
    end
end
