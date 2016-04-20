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
	
	
	if (male === "Carlow") {
		
		d3.select("svg").remove();
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Carlow Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	} else if (male === "Cavan") {
	
		d3.select("svg").remove();
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cavan Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Clare") {
	
		d3.select("svg").remove();
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Clare Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Cork") {
	
		d3.select("svg").remove();
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Cork Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Dublin") {
	
		d3.select("svg").remove();
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Dublin Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
							
	}else if (male === "Donegal") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Donegal Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Galway") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Galway Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Kerry") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kerry Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Kildare") {
		
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kildare Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Kilkenny") {
		
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Kilkenny Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Laois") {
		
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Laois Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Leitrim") {
		
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Leitrim Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Limerick") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Limerick Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
								
	}else if (male === "Longford") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Longford Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Louth") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Louth Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Mayo") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Mayo Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Meath") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Meath Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Monaghan") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Monaghan Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "North Tipperary") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'North Tipperary Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Offaly") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Offaly Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Roscommon") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Roscommon Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Sligo") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Sligo Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "South Tipperary") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'South Tipperary Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Waterford") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Waterford Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Westmeath") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Westmeath Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Wexford") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wexford Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}else if (male === "Wicklow") {
	
		if(female === "Carlow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Carlow Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cavan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Cavan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Clare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Clare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Dublin"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Dublin Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Donegal"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Donegal Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Galway"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Galway Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kerry"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Kerry Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kildare"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Kildare Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Kilkenny"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Kilkenny Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Laois"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Laois Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Leitrim"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Leitrim Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Limerick"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Limerick Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Longford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Longford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Louth"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Louth Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Mayo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Mayo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Meath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Meath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Monaghan"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Monaghan Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "North Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'North Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Offaly"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Offaly Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Roscommon"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Roscommon Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Sligo"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Sligo Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Cork"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Cork Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "South Tipperary"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'South Tipperary Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Waterford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Waterford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Westmeath"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Westmeath Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wexford"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Wexford Female'})  RETURN (n.Population), (m.Population)"};				
		}else if(female === "Wicklow"){
			d3.select("svg").remove();
			query = {"query" : "MATCH (n:County {County:'Wicklow Male'}), (m:County {County:'Wicklow Female'})  RETURN (n.Population), (m.Population)"};				
		}
		
	}
		
	//Asynchronous JavaScript and XML  - Request data qithout refreshing entire page
	$.ajax({
		//POST Request
		type: "POST",
		//async: false,
		//Server url
		url: "http://gmitsoftware.cloudapp.net:7474/db/data/cypher",
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