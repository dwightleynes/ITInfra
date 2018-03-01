var script_url = "https://script.google.com/macros/s/AKfycbzweRB8Q3tuQ083Xp-19hVMF71VsT2RIEapfm5APWOewfcWrmQ/exec";

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
   
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    var header = table.createTHead();
		var row = header.insertRow(0);     
		var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
	
		cell1.innerHTML = "<b>Requestor</b>";
    cell2.innerHTML = "<b>Display Name</b>";
    cell3.innerHTML = "<b>DID</b>";
    cell4.innerHTML = "<b>Extn</b>";
    cell5.innerHTML = "<b>Mac Address</b>";
    cell6.innerHTML = "<b>Phone Model</b>";
    cell7.innerHTML = "<b>Serial Number</b>";
    cell8.innerHTML = "<b>Voicemail</b>";
    
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < json.records.length; i++) {
        
        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Requestor;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Display_Name;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].DID;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Extn;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].MAC_Address;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Phone_Model;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Serial_Number;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Voicemail;
        
    }
    //console.log(json)

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    //divContainer.innerHTML = "";
    divContainer.appendChild(table);
		// document.getElementById("loader").style.visibility = "hidden";
		//$("#re").css("visibility","visible");
    });


	}