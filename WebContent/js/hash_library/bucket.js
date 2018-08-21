var BucketWidget = function(cx, cy, vertexShape, vertexText, vertexClassNumber) {
	var defaultAnimationDuration = 250; // millisecond
	var bucketVertex = null;
	var text = null;
	var extraText;
	var nodes =[];
	var nodeSvg;
	var textYaxisOffset = graphVertexProperties["text"]["font-size"] / 3;
	 this.getNodes = function getNodes(){
		 return nodes;
	 }
	
	this.showVertex = function showVertex(){
		attributes["vertex"]["r"] = 20;
		attributes["text"]["font-size"] = 12;
		attributes["extratext"]["font-size"] = 14;
		attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["default"]["fill"];
	}
	this.changeVertex = function changeVertex(val){
		attributes["vertex"]["r"] = 20;
		attributes["text"]["text"] = val;
		attributes["extratext"]["font-size"] = 14;
		attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["greenFill"]["fill"];
	}
	this.traverseVertex = function traverseVertex(){
		attributes["vertex"]["r"] = 20;
		attributes["extratext"]["font-size"] = 14;
		attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["blueFill"]["fill"];
	}
	this.foundVertex = function foundVertex(){
		attributes["vertex"]["r"] = 20;
		attributes["extratext"]["font-size"] = 14;
		attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["orangeFill"]["fill"];
	}
	this.getValue = function getValue(){
		var val = attributes["text"]["text"];
		return val;
	}
this.hideVertex = function showVertex(){
	attributes["vertex"]["r"] = 0;
	attributes["text"]["font-size"] = 0;
	
	attributes["extratext"]["font-size"] = 0;
	}
this.addNodes = function addNodes(key){
	nodeSvg = mainSvg.select("#node"+vertexClassNumber);
	var cx= attributes["vertex"]["cx"] ;
	var cy= attributes["vertex"]["cy"];
	var i = nodes.length;
	if (nodes.length>0)
	{
		var node =nodes[nodes.length-1];
		cx=node.getCx();
		cy=node.getCy();
	}
	node = new NodeWidget(cx, cy, "circle", key, key,nodeSvg);
	node.newNode();
	node.draw(vertexClassNumber,200);
	nodes[nodes.length]=node;	
}
nodeSvg = bucketSvg.append("g")
.attr("id","node"+vertexClassNumber);
bucketVertex = bucketSvg.append("circle");
text = bucketTextSvg.append("text");
extraText = bucketExtraTextSvg.append("text");
 this.init = function init() {
        var tmp_vertexShape = vertexShape;
        attributes["vertex"]["class"] = "H" + vertexClassNumber;
        attributes["vertex"]["cx"] = cx;
        attributes["vertex"]["cy"] = cy;
        attributes["vertex"]["x"] = cx - graphVertexProperties["innerVertex"]["width"] / 2;
        attributes["vertex"]["y"] = cy - graphVertexProperties["innerVertex"]["height"] / 2;
        attributes["vertex"]["fill"] = graphVertexProperties["innerVertex"]["default"]["fill"];
        attributes["vertex"]["r"] = 0;
        attributes["vertex"]["width"] = 40;
        attributes["vertex"]["height"] = 40;
        attributes["vertex"]["stroke"] = graphVertexProperties["innerVertex"]["default"]["stroke"];
        attributes["vertex"]["stroke-width"] = 0;


        attributes["text"]["class"] = "H" + vertexClassNumber;
        attributes["text"]["x"] = cx;
        attributes["text"]["y"] = cy + 5;
        attributes["text"]["fill"] = graphVertexProperties["text"]["default"]["fill"];
        attributes["text"]["font-family"] = graphVertexProperties["text"]["default"]["font-family"];
        attributes["text"]["font-size"] = 0;
        attributes["text"]["font-weight"] = graphVertexProperties["text"]["default"]["font-weight"];
        attributes["text"]["text-anchor"] = graphVertexProperties["text"]["default"]["text-anchor"];
        attributes["text"]["text"] = "";
        
        attributes["extratext"]["class"] = "v" + vertexClassNumber;
        attributes["extratext"]["x"] = cx;
        attributes["extratext"]["y"] = cy - 26;
        attributes["extratext"]["fill"] = "red"; // graphVertexProperties["text"]["default"]["fill"];
        attributes["extratext"]["font-family"] = graphVertexProperties["text"]["default"]["font-family"];
        attributes["extratext"]["font-size"] = 0;
        attributes["extratext"]["font-weight"] = graphVertexProperties["text"]["default"]["font-weight"];
        attributes["extratext"]["text-anchor"] = graphVertexProperties["text"]["default"]["text-anchor"];
        
        attributes["extratext"]["text"] = "H:"+vertexClassNumber; 


        bucketVertex.attr("class", attributes["vertex"]["class"]);
        text.attr("class", attributes["text"]["class"]);
        extraText.attr("class", attributes["extratext"]["class"]);
        
        bucketVertex.attr("cx", attributes["vertex"]["cx"])
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
        extraText.attr("x", attributes["extratext"]["x"])
        .attr("y", attributes["extratext"]["y"])
        .attr("fill", attributes["extratext"]["fill"])
        .attr("font-family", attributes["extratext"]["font-family"])
        .attr("font-size", attributes["extratext"]["font-size"])
        .attr("font-weight", attributes["extratext"]["font-weight"])
        .attr("text-anchor", attributes["extratext"]["text-anchor"])
        .text(function() {
            return attributes["extratext"]["text"];
        });

    }


var attributes = 
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
        "extratext": {
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
      "visited":[],
      "tree":[],
      "level":[],
      "maxlevel":[],
      "labels":[],
      "movables":[],
      "queue":[],
      "message_index":"0"
   };

var node = function(key,cx,cy,mainSvg) {
	
	
	this.traverse = function traverse(){
		
	}
}
	/*var circle = mainSvg.append("circle");
	var text = mainSvg.append("g");
	var x= cx;
	var y = cy;
	var circle2 = mainSvg.append("circle");

	this.draw1 =function draw() {
		circle.transition().duration(250).attr("r", 0).attr("cx", 0).attr(
				"cy", 0);
		text.append("text").attr("x", 0).attr("y", 0).attr(
				"font-size", 0);
		
		circle.transition().duration(250).attr("r", 20).attr("cx", x).attr(
				"cy", y).attr("fill", "#eee");
		text.append("text").attr("x", x).attr("y", y + 5).attr(
				"font-size", 16).attr("fill", "#333").attr("font-family",
				"'PT Sans', sans-serif").attr("font-weight", "bold").attr(
				"text-anchor", "middle").text(function() {
			return key;
		});
	}*/
	
	
	

	/*var text2 = text.append("text").attr("x", 100).attr("y", 200 + 5).attr(
			"font-size", 16).attr("fill", "#333").attr("font-family",
			"'PT Sans', sans-serif").attr("font-weight", "bold").attr(
			"text-anchor", "middle").text(function() {
		return "v2";
	});*/

	/*var line = d3.svg.line().x(function(d) {
		return d.x;
	}).y(function(d) {
		return d.y;
	}).interpolate("linear");
	var text3 = mainSvg.append("g");
	var text4 = text3.append("path").attr("d", line([ {
		"x" : 100,
		"y" : 120
	}, {
		"x" : 100,
		"y" : 180
	} ])).attr("stroke", "#2ebbd1").attr("stroke-width", 3);*/



this.draw = function draw(dur) {
    
    var durn=200;
	if (dur == null || isNaN(dur))
        dur = 1;
	if (dur == 1)
		durn = dur;
    if (dur <= 0)
        dur = 1;
 
   // var circle = mainSvg.append("circle");
	//var text = mainSvg.append("g");
    
    if (bucketSvg.select("#node"+vertexClassNumber).empty()) {
    	nodeSvg = bucketSvg.append("g")
        .attr("id","node"+vertexClassNumber);
    	bucketVertex = bucketSvg.append("circle");
        text = bucketTextSvg.append("text");
        extraText = bucketExtraTextSvg.append("text");
	}
	bucketVertex.transition()
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
          }).delay(dur);
  extraText.transition()
  .duration(durn).attr("x", attributes["extratext"]["x"]).attr("y", attributes["extratext"]["y"]).attr("fill", attributes["extratext"]["fill"])
  .attr("font-family", attributes["extratext"]["font-family"]).attr("font-size", attributes["extratext"]["font-size"])
  .attr("font-weight", attributes["extratext"]["font-weight"]).attr("text-anchor", attributes["extratext"]["text-anchor"])
  .text(function() {
      return attributes["extratext"]["text"];
  }).delay(dur);
  var i = 0;
	while (i<nodes.length)
	{
		var node =nodes[i];
		node.showNode();
		node.draw(vertexClassNumber,dur);
		i++;
	}
}
this.init();

};