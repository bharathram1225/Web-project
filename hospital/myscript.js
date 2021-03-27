var doctors=[
	{year:'2000',patients:'9760'},
	{year:'2001',patients:'12400'},
	{year:'2002',patients:'6090'},
	{year:'2003',patients:'9876'},
	{year:'2004',patients:'3880'},
	{year:'2005',patients:'1200'},
	{year:'2006',patients:'4205'}
];

var svg = d3.select("#svg");


var padding={top:20,right:30,bottom:30,left:50};

//var colors=d3.schemeCategory20c;
var colors=['red','green','yellow','blue','orange','violet'];

var chartarea={
	"width":parseInt(svg.style("width"))-padding.left-padding.right,
	"height":parseInt(svg.style("height"))-padding.top-padding.bottom
};

var yscale=d3.scaleLinear()
.domain([0,d3.max(doctors,function(d,i){return d.patients})])
.range([chartarea.height,0]).nice();

var xscale=d3.scaleBand()
.domain(doctors.map(function(d){return d.year}))
.range([0,chartarea.width])
.padding(.2);


var xaxis=svg.append("g")
.classed("xaxis",true)
.attr('transform','translate('+padding.left+','+(chartarea.height+ padding.top)+')'
)

.call(d3.axisBottom(xscale));


var yaxis=svg.append("g")
.classed("yaxis",true)
.attr('transform','translate('+padding.left+','+(padding.top)+')'
)

.call(d3.axisLeft(yscale));

var rectgrp = svg.append("g").attr(
	'transform','translate('+padding.left+','+(padding.top)+')'
	);

rectgrp.selectAll("rect").data(doctors).enter()
.append("rect")
.attr("width",xscale.bandwidth())
.attr("height",function (d,i){
	return chartarea.height-yscale(d.patients);
})

.attr("x",function (d,i){
	return xscale(d.year);
})
.attr("y",function (d,i){
	return yscale(d.patients);
})
.attr("fill",function (d,i){
	return colors[i];
});