var pic = document.getElementById("vimage");
var beep = document.getElementById("beep");
let ballz = [];
var ind = 0;
var velocity = 7;


var construct_dot = function(x, y, r, c, i){
    console.log(c);
    var dot = { XCOR: x , ycor : y, radius : r, col: c, index : i, direction: 1, directionx:1, directiony: -1, getX: function() {return XCOR; }};
    dot.displayer = create_dot(dot),
    dot.display = function(){
    	console.log("DOTS COLOR IS: ");
    	console.log(dot.col);
    	dot.displayer = create_dot(dot);
        console.log(dot.displayer);
    	pic.appendChild(dot.displayer);
    }
    dot.setX = function(new_X) { dot.XCOR = new_X;};
    dot.setY = function(new_Y) { dot.XCOR = new_Y;};
    //    dot.getX = function() { return dot.ycor;};
    dot.getX = function() { return dot.XCOR;};
    dot.remove = function() { pic.removeChild(dot.displayer); };
    dot.change_color = function(new_col) { console.log("changing color..."); dot.col = new_col;};
    dot.get_radius = function() {return dot.radius;};
    dot.get_color = function() {return dot.col;};
    dot.bouns = function() {
    	if (dot.XCOR >= 590 || dot.ycor <= -10){
    	    console.log("changing dir...");
    	    dot.directionx *= -1;
    	}
    	if (dot.ycor >= 590 || dot.ycor <= -10){
    	    console.log("changing dir...");
    	    dot.directiony *= -1;
    	}
    }
    dot.move = function() { dot.setX(dot.getX() + (velocity * dot.directionx)); dot.setY(dot.getY() + ( velocity * dot.directiony)); dot.bouns();};
    console.log("======created dot: XCOR yXCOR is: =======");
    console.log(dot.XCOR);
    console.log(dot.ycor);
    console.log(dot.index);
    return dot;
}



var create_dot = function(dot){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("fill", dot.get_color);
    var X = dot.getX();
    c1.setAttribute("cx", X);
    c1.setAttribute("cy", dot.getY());
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
    var boop = construct_dot(spawx, spawy, 20, "red", ind);
    ballz[ind] = boop;
    console.log("JUST CREATED OBJECT XCOR IS:");
    // WHY IS XCOR NOT DEFINED WHYYYYYY WHAT HAPPENED TO SPAWX :------( 
    console.log(ballz[ind].getX());
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
	    ballz[p].move();
	    ballz[p].display();
	}
    }
}




dotnimate();


