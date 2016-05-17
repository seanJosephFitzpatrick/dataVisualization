function postRequest() {
  
	var	a,
		b,
		d,
		g,
		x,
		y,
		arc,
		svg,
		//Store cypher query in variable query
		query,
		//Store drop down list value in variable val
		male = countyListm.value;
		female = countyListf.value;
	
	
	qstring = "MATCH (n:County_population {County:\'" + male + " Male\'}), (m:County_population {County:\'"+ female + " Female\'})  RETURN (n.Population), (m.Population)";
	d3.select("svg").remove();
	query = {"query" : qstring};				
		
	//Asynchronous JavaScript and XML  - Request data qithout refreshing entire page
	$.ajax({
		//POST Request
		type: "POST",
		//async: false,
		//Server url
		url: "http://g00294191.cloudapp.net:7474/db/data/cypher",
		//Request JSON
		dataType: "json",
		//Cypher query
		//data: {"query" : "MATCH (n:County) RETURN DISTINCT (n.Population) LIMIT 3;"},
		//data: {"query" : "MATCH (n:County {County:'Galway'}) RETURN (n.Population)"},
		data: query,
		
		//On success call callback function
		success: callback,
		
		//Error function
		error: function (jqXHR, exception) {
			var msg = '';
			if (jqXHR.status == 400) {
				msg = 'Status: 400 Bad Request';
			} else if (exception === 404) {
				msg = 'Status: 404 Not Found';
			} else if (exception === 408) {
				msg = 'Status: 408 Request Timeout';
			} else if (exception === 418) {
				//type: "BREW",
				//url: https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol,
				//accepts: "Lyons Tea",
				//datatype: "Tealeaves",
				msg = 'Im a Teapot RFC2324';
			} else {
				msg = 'Uncaught Error.\n' + jqXHR.responseText;
			}
			//Display error in console
			console.log(msg);
		}
	});//end of ajax
	
} //end of postRequest()