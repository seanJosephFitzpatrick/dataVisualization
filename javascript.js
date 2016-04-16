function postRequest() {

	$.ajax({
		type:"POST",
		url: "http://gmitsoftware.cloudapp.net:7474/db/data/cypher",
		accepts: "application/json",
		dataType: "json",
		data: {"query" : "MATCH (n:County) RETURN DISTINCT (n.Population) LIMIT 3;"},
		//On success call handleData(callback function)
		success: handleData,
		error: function(jqXHR, textStatus, errorThrown){
			alert(textStatus);
		}
	});//end of ajax
	
} //end of postRequest()

//handleData(callback function)
function handleData(data){
	//alert(data);
	//console.log(data);
}