
/*
*This section of code was acquired online at [https://bl.ocks.org/LiangGou/30e9af0d54e1d5287199] and modified
*/


function Pie(){

	var g = svg.selectAll(".symbol");
	
		g.selectAll("rect").remove();

		g.selectAll("path")
			.transition()
			.duration(2000)//takes two seconds duration
			.tween("arc", animate);
			
		j=2;//set variables j = 2
		animate();//call animate function
   
}//Pie()

function Bar(){

	var g = svg.selectAll(".symbol");

		g.selectAll("rect").remove();
		
		g.selectAll("path")
			.transition()
			.duration(2000)//takes two seconds duration
			.tween("arc", animate);
			
		j=1;//set variable j = 1
		animate();//call animat function
   
}//Bar()  

function animate(d) {

	var path = d3.select(this),
		text = d3.select(this.parentNode).select("text"),
		x0 = x(d.data.Text),
		y0 = 400 - y(d.data.population); //initial height

	return function(t) {
	if(j == 1)//if true to bar else to pie
		t = 1-t;
		var r = 400 / 2 / Math.min(1, t + 1e-3),
			//a is stepping factor, starting from 1 to 0,
			//as the timer t goes.
			//A simper alternative: a = 1 - t;
			a = Math.cos(t * Math.PI / 2),
			xx = (-r + (a) * (x0 + x.rangeBand()) + (1 - a) * (920 + 400) / 2),
			yy = ((a) * 400 + (1 - a) * 400 / 2),
			f = {
				innerRadius: (r - x.rangeBand() / (2 - a)) * a,
				outerRadius: r,
				startAngle: a * (Math.PI / 2 - y0 / r) + (1 - a) * d.startAngle,
				endAngle: a * (Math.PI / 2) + (1 - a) * d.endAngle
			};//f


		path.attr("transform", "translate(" + xx + "," + yy + ")");
		path.attr("d", arc(f));
		text.attr("transform", "translate(" + arc.centroid(f) + ")translate(" + xx + "," + yy + ")rotate(" + ((f.startAngle + f.endAngle) / 2 + 3 * Math.PI / 2) * 180 / Math.PI + ")");
	};//return()
}//animate()


	//callback function
	function callback(data){
		
		arr = $.map(data, function(el) { return el });
		var a = arr[2][0]
		var b = arr[2][1]
		
		console.log(a);
		console.log(b);
		
		//D3 color scale 10,20,20b each one contains a unique set of colors 
		var color = d3.scale.category10();
		
		
		//Adding an SVG element to the canvas
		svg = d3.select("body")
			.append("svg")
			//set width of canvas
			.attr("width", "960")
			//set height of canvas
			.attr("height", "400")
			//group SVG shapes together
			.append("g")
			
		//JavaScript data Object
		var data = [{
			Text: "Male",
			population: a
		
			
		}, {
			Text: "Female",
			population: b
			
		}]
		  
		x = d3.scale.ordinal();

		y = d3.scale.linear();

		x.domain(data.map(function(d) {
				return d.Text;
			}))
			.rangeRoundBands([0, 920], .2);

		var pie = d3.layout.pie()
			.value(function(d) {
				return d.population;
			});
		//arc generat
		arc = d3.svg.arc();

		y.domain([0, d3.max(data.map(function(d) {
				return d.population;
			}))])
			//.range([1500 / 4 - 20, 0]);//?????
			//.range([550, 0]);
			.range([1500 / 4 - 20, 0]);

		var g = svg.selectAll(".symbol")
			.data(function() {
				return pie(data);
			})
			.enter()
			.append("g")
			.attr("class", "symbol");

		 g.append("rect")
			.style("fill", function(d) {
				return color(d.data.Text);
			})
			.attr("x", function(d){
				return x(d.data.Text);
			})
			.attr("y", function(d){
				return y(d.data.population);
				console.log(y);
			})
			.attr("width", x.rangeBand())
			.attr("height", function(d) {
					//return h - y(d.data.population);
					return 400 - y(d.data.population);
				});
				
			g.append("path")
				.style("fill", function(d) {
					return color(d.data.Text);
					
				});
				//draw text
				g.append("text")
				.attr("transform", function(d){
					return "translate(" + (x(d.data.Text)+x.rangeBand()/3) + "," + (400+20) + ")";
				})
				.text(function(d) {
					return d.data.Text;
				});
				
	}//callback		
