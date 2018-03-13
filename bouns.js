var pic = document.getElementById("vimage");
var beep = document.getElementById("beep");
let ballz = [];
var ind = 0;
var velocity = 7;


var construct_dot = function(x, y, r, c, i){
    console.log(c);
    var dot = { xcor:x , ycor : y, radius : r, col: c, index : i, direction: 1, directionx:1, directiony: -1};
    dot.displayer = create_dot(dot),
    dot.display = function(){
    	console.log("DOTS COLOR IS: ");
    	console.log(dot.col);
    	dot.displayer = create_dot(dot);
        console.log(dot.displayer);
    	pic.appendChild(dot.displayer);
    }
    dot.getX = function() { return dot.xcor;};
    dot.remove = function() { pic.removeChild(dot.displayer); };
    dot.changex = function(new_x) { xcor = dot.new_x;};
    dot.changex = function(new_y) { ycor = dot.new_y;};
    dot.change_color = function(new_col) { console.log("changing color..."); dot.col = new_col;};
    dot.getx = function() {return dot.xcor;};
    dot.gety = function() {return dot.ycor;};
    dot.get_radius = function() {return dot.radius;};
    dot.get_color = function() {return dot.col;};
    dot.bouns = function() {
    	if (dot.xcor >= 590 || dot.ycor <= -10){
    	    console.log("changing dir...");
    	    dot.directionx *= -1;
    	}
    	if (dot.ycor >= 590 || dot.ycor <= -10){
    	    console.log("changing dir...");
    	    dot.directiony *= -1;
    	}
    }
    console.log("======created dot: xcor yxcor is: =======");
    console.log(dot.xcor);
    console.log(dot.ycor);
    console.log(dot.index);
    return dot;
}


    var move = function(dot) { dot.xcor = dot.xcor + (dot.velocity * dot.directionx); dot.ycor = dot.ycor + ( dot.velocity * dot.directiony); dot.bouns()};


var create_dot = function(dot){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("fill", dot.col);
    console.log(dot.ycor);
    console.log(dot.xcor);
    c1.setAttribute("cx", dot.xcor);
    c1.setAttribute("cy", dot.ycor);
    c1.setAttribute("r", dot.radius);
    return c1;
}

var spawn_dot = function(e){
    console.log(e);
    var spawx = Math.random() * 500;
    console.log("spawnx");
    console.log(spawx);

    var spawy = Math.random() * 500;
    console.log("spawny");
    console.log(spawy);
    ballz[ind]  = construct_dot(spawx, spawy, 20, "red", ind);
    ballz[ind].display();
    ind++;

}

var dotnimate = function(){
  clear();
  move_all();
  nimation = window.requestAnimationFrame(dotnimate);
}

var clear = function(){
  while(pic.children.length){
    pic.firstChild.remove();
  }
}


pic.addEventListener("click", spawn_dot, true);


var move_all = function(){
    if (ballz.length != 0){
	for ( p = 0; p < ballz.length; p++){
	    move(ballz[p]);
	    ballz[p].display();
	}
    }
}




dotnimate();


