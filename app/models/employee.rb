class Employee
  include Mongoid::Document
  field :_id
  field :emp_id
  field :emp_name
  field :dept_name
  field :job_code
  field :job_title
  field :grade
  field :annual_salary
end
