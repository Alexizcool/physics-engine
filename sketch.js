const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
//in our code we have a comand which is rect as this is not an object it doesnt follow the rules of physics

//in order to give it the rules of physics we have to use the physics engine in matter.js for that

//if we want to create a ground we need the physics engine to use the physics engine we will use 3 objects created in matter.js library

//since these objects are apart of matter library we can  not directly refrense the world engine and bodies

//in order to refer to them we use Matter.World

//this will make the code readable and not lendy
var engine,world;
var object;
function setup() {
 var canvas = createCanvas(400,400);
 //creating physics engine on 10th line because we want to add it in our world if we dont create phiysics engine we wont be able to add to the world
 engine =Engine.create();
 world = engine.world;
  
object = Bodies.rectangle(200,100,50,50);

console.log(object.type);

console.log(object);

console.log(object.position.x);

console.log(object.position.y);

World.add(world,object);


}

function draw() {
  background(0); 
    
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    

}