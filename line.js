function postLine(){
	
	var data = [{
    "sale": "202",
    "year": "Galway"
}, {
    "sale": "",
    "year": "Sligo"
}, {
    "sale": "179",
    "year": "Roscommon"
}, {
    "sale": "199",
    "year": "Mayo"
}, {
    "sale": "134",
    "year": "Meath"
}, {
    "sale": "176",
    "year": "2010"
}];


	  margin = {
				top: 20,
				right: 20,
				bottom: 20,
				left: 50
			},
  
	
	//Adding an SVG element to the canvas
	svg = d3.select("body")
		.append("svg")
		//set width of canvas
		.attr("width", "960")
		//set height of canvas
		.attr("height", "400")
		//group SVG shapes together
		.append("g")
	
	xScale = d3.scale.linear().range([margin.left, 1000 - margin.right]).domain([10,2010]),
	
	yScale = d3.scale.linear().range([500 - margin.top, margin.bottom]).domain([0,600000]),
	
	xAxis = d3.svg.axis()
    .scale(xScale),
  
	yAxis = d3.svg.axis()
    .scale(yScale);
	
	svg.append("svg:g")
    .call(xAxis);
}