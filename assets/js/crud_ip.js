var script_url = "https://script.google.com/macros/s/AKfycbwBpqDcxp7WbDfjCs3umX2w6CRdQvAGB0OAIAUPhDpLxKLOeO5M/exec";

// Make an AJAX call to Google Script
function insert_value() {
    
	$("#re").css("visibility","hidden");
	//document.getElementById("loader").visibility = "visible";
	$('#mySpinner').addClass('spinner');

    var ip1= $("#ip").val();
    var subnet= $("#subnet").val();
    var gateway= $("#gateway").val();
    var dns1= $("#dns1").val();
    var dns2= $("#dns2").val();
	
    alert(ip1 +' '+ subnet +' '+ gateway +' '+ dns1 +' '+ dns2)
    //var url = script_url+"?callback=ctrlq&dns2="+dns2+"&dns1="+dns1+"&gateway="+gateway+"&subnet="+subnet+"&ip="+ip1+"&action=insert";
    
    var url = script_url+"?callback=ctrlq&ip="+ ip1 + "&subnet=" + subnet + "&gateway=" + gateway + "&dns1=" + dns1 + "&dns2=" + dns2 + "&action=insert";
    //var url = script_url+"?action=insert";

    console.log(url);

    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      //data: {ip: ip1, subnet: subnet, gateway: gateway, dns1: dns1, dns2: dns2},
      method: "GET",
      dataType: "json",
      
      
    });
    console.log(request);
    //console.log(jsonp)

  }

  
  function update_value(){
	$("#re").css("visibility","hidden");
    //  document.getElementById("loader").style.visibility = "visible";
	
	
    var ip1= $("#ip").val();
    var subnet= $("#subnet").val();
    var gateway= $("#gateway").val();
    var dns1= $("#dns1").val();
    var dns2= $("#dns2").val();
	
    var url = script_url+"?callback=ctrlq&ip="+ip1+"&action=update";

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

	
  }

  
 
  
  
  function delete_value(){
	$("#re").css("visibility","hidden");
    //  document.getElementById("loader").style.visibility = "visible";
	$('#mySpinner').addClass('spinner');
    var ip1= $("#ip").val();
    var subnet= $("#subnet").val();
    var gateway= $("#gateway").val();
    var dns1= $("#dns1").val();
    var dns2= $("#dns2").val();

    var url = script_url+"?callback=ctrlq&ip="+ip1+"&action=delete";

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });

  }


  
  
  // print the returned data
  function ctrlq(e) {
  
	
	$("#re").html(e.result);
	$("#re").css("visibility","visible");
	read_value();
	
  }
  
  

  
function read_value() {

//$("#re").css("visibility","hidden");
   
  //  document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=read";

$.getJSON(url, function (json) {
    console.log(json)
    // Set the variables from the results array
   
    var table = document.getElementById("dataTable")
    
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < json.records.length; i++) {
        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].IP;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Subnet;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Gateway;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].DNS1;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].DNS2;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Switch;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Custodian;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Purpose;
        
    }
    
    });


	}