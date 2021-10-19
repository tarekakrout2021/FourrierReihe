function setup() {
  createCanvas(800, 800);
}
let  t=0,v=300,arr=[];
function draw() {
  background(255);
  stroke (0);
  noFill(); 
  let r=0, x=0, y=0; 
  translate (200,200);
  let n = 10;
  for(let i=0; i<n; i++){
    let k=2*i+1; 
    let x1=x, y1=y; 
    r= 4/(k*PI)*100,x+=r/2*cos(k*PI*t),y+=r/2*sin(k*PI*t); 
    noFill(); 
    ellipse(x1,y1,r);  
    fill(0);
    line(x1,y1,x,y);

    //ellipse(x,y,5,5);
    //line(x,y,r/2,y);
    t+=0.01/(2*n);
    //v+=2;
    if(arr.length>1000){
      arr.pop(); 
    }
  }
  for(let j=0; j<arr.length; j++ )
    point(0.4*j+r/2+100,arr[j]);
  
  arr.unshift(y);
  
  line(x,y,r/2+100,y);
}