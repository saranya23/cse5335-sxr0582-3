
$( document ).ready(function() {
    var id=1;
    var count=0;
  
    $("#btn1").one("click",function(){ 
      
      $("#btn1").hide(); //  hides the button after it has been clicked
      
      $("#title").css('visibility','visible').css('opacity','1');
      $("p").html("Data is loaded at 0.5 seconds interval and displays only 20 records at a time");
      var ajaxreq = setInterval(function()  // Function to make multiple Ajax calls for each record 
      {       
      $.ajax(
      { 
        type: "GET",                
        url: "/mongo/index",                     // Path to Ruby Controller action
        datatype: "json",
        async:false,
        data: $.param({ dataset: id}),     //The value of Id is passed as parameter to fetch that particular record   
        success: function (data) 
        { 
          // On success of the Ajax - call Data is appended on erb file
          
          $("#personTable").append(data)
          count=count+1
          // To display only 20 records at a time
          if(count>20)
          {
            console.log("count is"+count)
            var rem_id=id-20
            console.log("rem_id is"+rem_id)
            $("#"+rem_id).remove()
          }
        },
      });
      // Adds Animation to the displaying data records. In CSS opacity is set to be a lower value and we modify it in this animation.
      $("#"+id).animate({opacity:'1'},350); 
    id=id+1;
     if(id==101)         // Check if 100 calls are completed
      {
        clearInterval(ajaxreq);     // stop reptitive ajax calls
      }
    }, 500);        // 0.5 Seconds interval between each ajax call
     });
});



