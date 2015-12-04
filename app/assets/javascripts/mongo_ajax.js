$(document).ready(function(){
	
	$("#btn1").one("click",function(){
	    $.ajax({
			type: 'GET',
			url: "mongo/proj3",
			dataType: 'json',
			//: $.param({dataset: 373292}),
			//contentType: 'application/json',
			
			success: function(data){
			    console.log('success',data);
			     $("#table").append(data);
			    //$('#personTable').append("<tr><th>"+"Emp_ID"+"</th>"+"<th>"+"Emp_Name"+"</th>"+"<th>"+"Dept_Name"+"</th>"+"<th>"+"Job_Code"+"</th>"+"<th>"+"Job_Title"+"</th>"+"<th>"+"Grade"+"</th>"+"<th>"+"Annual_Salary"+"</th></tr>");
			   // $.each(data,function(value){
			      //  $('#personTable').append("<tr><td>"+value["_id"]+"</td>" + "<td>"+value["emp_name"]+"</td>"+"<td>"+value["dept_name"]+"</td>" +"<td>"+value["job_code"]+"</td>"+"<td>"+value["job_title"]+"</td>"+"<td>"+value["grade"]+"</td>"+"<td>"+value["annual_salary"]+"</td></tr>");
			   
			}
	    });
	});
});