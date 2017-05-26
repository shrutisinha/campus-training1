var list = [
			
			];
function printMousePos(event) {

  /*document.body.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY;*/
    var x1 = event.clientX;
    var y1 = event.clientY;
    console.log(x1+" and "+y1);
    if(!chkdel(list, x1, y1)){
	    
	    var point = {x:x1,y:y1};
	    list.push(point);
	}
	console.log(list);
	console.log(list.length);
    var canvas = document.getElementById("w");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	ctx = canvas.getContext("2d");
	//console.log(list);
	
	for (var i = 0; i < list.length; i++) {
		ctx.fillStyle = "#FF0000";

		ctx.fillRect(list[i].x-5,list[i].y-5,10,10);
	};
	
	
	//cir(list);
	var c = makeCircle(list);
	cic(c.x,c.y,c.r);
}
function chkdel(list, x, y){
	for (var i = 0; i < list.length; i++) {
		if (list[i].x+5 >= x && list[i].x-5 <= x){
			if (list[i].y+5 >= y && list[i].y-5 <= y){
				list.splice(i,1);
				return true;
			}	
		}
	}
	return false;
}
// function init(){
// 	canvas = document.getElementById("w");
//     canvas.width = document.body.clientWidth; //document.width is obsolete
//     canvas.height = document.body.clientHeight; //document.height is obsolete
//     canvasW = canvas.width;
//     canvasH = canvas.height;
// }
function cic(x, y , r){
	var c=document.getElementById("w");
	var ctx=c.getContext("2d");
	
	
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
}


// function cir(list){
// 	var c=document.getElementById("w");
// 	var ctx=c.getContext("2d");
// 	if(list.length <= 1){

// 	}
// 	else if(list.length==2){
// 		centerX = (list[0][0]+list[1][0])/2;
// 		centerY = (list[0][1]+list[1][1])/2;
// 		diameter = Math.sqrt(Math.pow(list[0][0]-list[1][0],2)+Math.pow(list[0][1]-list[1][1],2));
// 		radius = diameter/2;
// 		ctx.beginPath();
// 		ctx.arc(centerX,centerY,radius,0,2*Math.PI);
// 		ctx.stroke();
// 	}
// 	else{
// 		//line1
// 		x11 = list[0][0];
// 		y11 = list[0][1];
// 		x12 = list[1][0];
// 		y12 = list[1][1];
// 		//line2
// 		x21 = list[1][0];
// 		y21 = list[1][1];
// 		x22 = list[2][0];
// 		y22 = list[2][1];
// 		ctx.beginPath();
// 		ctx.arc(100,75,50,0,2*Math.PI);
// 		ctx.stroke();								
// 	}
	
	
// }



document.addEventListener("click", printMousePos);