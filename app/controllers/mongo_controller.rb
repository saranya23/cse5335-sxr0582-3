#!/usr/bin/env ruby
require 'json'
require 'open-uri'

class MongoController < ApplicationController
  def proj3 
    url = 'https://datacatalog.cookcountyil.gov/api/views/hdna-35se/rows.json?accessType=DOWNLOAD'
    result = open(url).read
    data = JSON.parse(result)
    puts "check1"
    i=0
    id=1
    data.each do |row|
        row.each do |lines|
            if lines == "data"
                row[1].each do |values|
                    if i<100
                        i+=1
                        values[12]=values[12].split("\'").join("''")
                        Employee.create!(_id: "#{id}" , emp_id: "#{values[11]}", emp_name: "#{values[12]}", dept_name: "#{values[10]}",  job_code: "#{values[13]}", job_title: "#{values[14]}",  grade: "#{values[15]}", annual_salary: "#{values[20]}")
                        id=id+1
                    else 
                        break
                    end
                end
                
            end
        end 
    end

  end
  #This Method will fetch the JSON data from the .json file ,following the path name and parse it.
  def index 
  @id = params[:dataset]
  @result = Employee.where(_id: "#{@id}")
 
  render :partial => 'index'          
  end 
end


