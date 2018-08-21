var NodeWidget = function(cx, cy, vertexShape, vertexText, vertexClassNumber,nodeSvg) { 
	var defaultAnimationDuration = 250; // millisecond
	var node ;
	var r = 20;
	var line;
	var textYaxisOffset = graphVertexProperties["text"]["font-size"] / 3;
	var nodeVertex;
	var text;
var edgeGenerator = d3.svg.line()
    .x(function(d) {
        return d.x;
    })
    .y(function(d) {
        return d.y;
    })
    .interpolate("linear");
	
var lineCommand = edgeGenerator(getEdge());

this.getValue = function getValue(){
	return attributes["text"]["text"];
}

this.getCx = function getCx(){
	return attributes["vertex"]["cx"];
}
this.getCy = function getCy(){
	return attributes["vertex"]["cy"] ;
}
this.showNode = function showNode(){
	attributes["vertex"]["r"] = 20;
	attributes["text"]["font-size"] = 12;
	attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["default"]["fill"];
}
this.hideNode = function showNode(){
attributes["vertex"]["r"] = 0;
attributes["text"]["font-size"] = 0;
}
this.traverseNode = function traverseNode(){
	attributes["vertex"]["r"] = 20;
	attributes["text"]["font-size"] = 12;
	attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["blueFill"]["fill"];
}
this.foundNode = function foundNode(){
	attributes["vertex"]["r"] = 20;
	attributes["text"]["font-size"] = 12;
	attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["orangeFill"]["fill"];
}
this.newNode = function newNode(){
	attributes["vertex"]["r"] = 20;
	attributes["text"]["font-size"] = 12;
	attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["greenFill"]["fill"];
}
 
 function getEdge() {
     var x1 =cx;
     var x2 = cx;
     var y2 = cy+40;
     var y1 = cy+20;

     var beginPoint = {"x": x1, "y": y1};
     var endPoint = {"x": x2, "y": y2};

     return [beginPoint, endPoint];
 }
 
var attributes= 
   {
		
		"vertex":{ 
			 "class": null,
	         "cx": null,
	         "cy": null,
	         "x":null,
	         "y":null,
	         "fill": null,
	         "r": null,
	         "width": null,
	         "height": null,
	         "stroke": null,
	         "stroke-width": null
			},
			"text":{
				"class": null,
	            "x": null,
	            "y": null,
	            "fill": null,
	            "font-family": null,
	            "font-weight": null,
	            "font-size": null,
	            "text-anchor": null,
	            "text": null
			},
			"path": {
	            "id": null,
	            "class": null,
	            "d": null,
	            "stroke": null,
	            "stroke-width": null
	        },
      "visited":[],
      "tree":[],
      "level":[],
      "maxlevel":[],
      "labels":[],
      "movables":[],
      "queue":[],
      "message_index":"0",
      "title1":"DEPTH FIRST SEARCH",
      "title2":"  No Hamiltonian path if starting from vertex 2"
   };

function init() {
    var tmp_vertexShape = vertexShape;

    nodeVertex = nodeSvg.append(tmp_vertexShape);
    text = nodeSvg.append("text");

    attributes["vertex"]["class"] = "H" + vertexClassNumber;
    attributes["vertex"]["cx"] = cx;
    attributes["vertex"]["cy"] = cy+60;
    attributes["vertex"]["x"] = cx - graphVertexProperties["innerVertex"]["width"] / 2;
    attributes["vertex"]["y"] = cy+60 - graphVertexProperties["innerVertex"]["height"] / 2;
    attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["default"]["fill"];
    attributes["vertex"]["r"] = 0;
    attributes["vertex"]["width"] = 40;
    attributes["vertex"]["height"] = 40;
    attributes["vertex"]["stroke"] = graphVertexProperties["innerVertex"]["default"]["stroke"];
    attributes["vertex"]["stroke-width"] = 0;


    attributes["text"]["class"] = "H" + vertexClassNumber;
    attributes["text"]["x"] = cx;
    attributes["text"]["y"] = cy+60 + textYaxisOffset;
    attributes["text"]["fill"] = graphVertexProperties["text"]["default"]["fill"];
    attributes["text"]["font-family"] = graphVertexProperties["text"]["default"]["font-family"];
    attributes["text"]["font-size"] = 0;
    attributes["text"]["font-weight"] = graphVertexProperties["text"]["default"]["font-weight"];
    attributes["text"]["text-anchor"] = graphVertexProperties["text"]["default"]["text-anchor"];
    attributes["text"]["text"] = vertexText;
    
    attributes["path"]["d"] = lineCommand;
    attributes["path"]["stroke"] = graphEdgeProperties["path"]["default"]["stroke"];
    attributes["path"]["stroke-width"] =3;


    nodeVertex.attr("class", attributes["vertex"]["class"]);
    text.attr("class", attributes["text"]["class"]);
    
    nodeVertex.attr("cx", attributes["vertex"]["cx"])
            .attr("cy", attributes["vertex"]["cy"])
            .attr("x", attributes["vertex"]["x"])
            .attr("y", attributes["vertex"]["y"])
            .attr("fill", attributes["vertex"]["fill"])
            .attr("r", attributes["vertex"]["r"])
            .attr("width", attributes["vertex"]["width"])
            .attr("height", attributes["vertex"]["height"])
            .attr("stroke", attributes["vertex"]["stroke"])
            .attr("stroke-width", attributes["vertex"]["stroke-width"]);

    

    text.attr("x", attributes["text"]["x"])
            .attr("y", attributes["text"]["y"])
            .attr("fill", attributes["text"]["fill"])
            .attr("font-family", attributes["text"]["font-family"])
            .attr("font-size", attributes["text"]["font-size"])
            .attr("font-weight", attributes["text"]["font-weight"])
            .attr("text-anchor", attributes["text"]["text-anchor"])
            .text(function() {
                return attributes["text"]["text"];
            });
    line = nodeSvg.append("path");

		try {
			if (attributes["path"]["d"] != "MNaN,NaNLNaN,NaN")
				line.attr("d", attributes["path"]["d"]).attr("stroke",
						attributes["path"]["stroke"]).attr("stroke-width",
								attributes["path"]["stroke-width"]);
		} catch (err) {
		}
}

this.draw=function draw(vertexClassNumber,dur) {
    var durn=200;
	if (dur == null || isNaN(dur))
        dur = defaultAnimationDuration;
	if (dur == 1)
		durn = dur;
    if (dur <= 0)
        dur = 1;
    var nodeSvg1 ;
    if (bucketSvg.select("#node"+vertexClassNumber).empty()) {
    	nodeSvg1 = bucketSvg.append("g")
        .attr("id","node"+vertexClassNumber);
	}
    else
    	nodeSvg1=mainSvg.select("#node"+vertexClassNumber)
    if (nodeSvg1.select("#node"+attributes["text"]["text"]).empty()) {
    	nodeVertex = nodeSvg1.append("circle").attr("id", "node"+attributes["text"]["text"]);
		text = nodeSvg1.append("text");
		line = nodeSvg1.append("path");
	}
    nodeVertex.transition()
            .duration(durn)
            
            .attr("cx", attributes["vertex"]["cx"])
            .attr("cy", attributes["vertex"]["cy"])
            .attr("x", attributes["vertex"]["x"])
            .attr("y", attributes["vertex"]["y"])
            .attr("fill", attributes["vertex"]["fill"])
            .attr("r", attributes["vertex"]["r"])
            .attr("width", attributes["vertex"]["width"])
            .attr("height", attributes["vertex"]["height"])
            .attr("stroke", attributes["vertex"]["stroke"])
            .attr("stroke-width", attributes["vertex"]["stroke-width"])
            .delay(dur);
    
            
    
    text.transition()
            .duration(durn)
            
            .attr("x", attributes["text"]["x"])
            .attr("y", attributes["text"]["y"])
            .attr("fill", attributes["text"]["fill"])
            .attr("font-family", attributes["text"]["font-family"])
            .attr("font-size", attributes["text"]["font-size"])
            .attr("font-weight", attributes["text"]["font-weight"])
            .attr("text-anchor", attributes["text"]["text-anchor"])
            .text(function() {
                return attributes["text"]["text"];
            })
            .delay(dur);

    line.transition()
            .duration(durn)
            
            .attr("d", attributes["path"]["d"])
            .attr("stroke", attributes["path"]["stroke"])
            .attr("stroke-width", attributes["path"]["stroke-width"])
            .style("marker-end", function() {
            	return "url(#arrow)";
            })
            .delay(dur);
}
init();
}
