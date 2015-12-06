
$( document ).ready(function() {
    var id=1;
  
    $("#btn1").one("click",function(){ 
    
      $("#btn1").hide(); //  hides the button after it has been clicked
      
     //$("#table").append("<table><tr><th>"+"Seq_No"+"</th>"+"<th>"+"Emp_ID"+"</th>"+"<th>"+"Emp_Name"+"</th>"+"<th>"+"Dept_Name"+"</th>"+"<th>"+"Job_Code"+"</th>"+"<th>"+"Job_Title"+"</th>"+"<th>"+"Grade"+"</th>"+"<th>"+"Annual_Salary"+"</th></tr>");
     //$("#table").append("<table><tr><th>Seq_No</th><th>Emp_ID</th><th>Emp_Name</th><th>Dept_Name</th><th>Job_Code</th><th>Job_Title</th><th>Grade</th><th>Annual_Salary</th></tr>");
    var ajaxreq = setInterval(function() 
    {        // on button click Ajax call is made
      $.ajax(
      { 
        type: "GET",                
        url: "/mongo/index",                     // Path to Ruby Controller action
        datatype: "json",
        async:false,
        data: $.param({ dataset: id}),        
        success: function (data) 
        { 
          // On success of the Ajax - call Data is appended on erb file
          if(id==1)
          {
            $("#table").append("<table><tr><th>Seq_No</th><th>Emp_ID</th><th>Emp_Name</th><th>Dept_Name</th><th>Job_Code</th><th>Job_Title</th><th>Grade</th><th>Annual_Salary</th></tr>");
          }
          $("#table").append(data)
          if(id%20==0)
          {
            $("#table").empty()
            $("#table").append("<table><tr><th>Seq_No</th><th>Emp_ID</th><th>Emp_Name</th><th>Dept_Name</th><th>Job_Code</th><th>Job_Title</th><th>Grade</th><th>Annual_Salary</th></tr>");
          }
        },
      });
      //$("table").animate({height :'0',opacity:'0',top: 1080
   // }//, 'slow'); // Adds Animation to the displaying data records ,opacity : '0'}, 3500
    //       //$("table").hide();
    id=id+1
     if(id==100)         // Check if 125 calls are completed
      {
        clearInterval(ajaxreq);     // stop reptitive ajax calls
      }
    }, 500);        // 0.5 Seconds interval between each ajax call
     });
});



