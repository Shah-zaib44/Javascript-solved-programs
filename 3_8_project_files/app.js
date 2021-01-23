// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  
  val = e.target.id;
  val = e.target.className;
  console.log(val);
  val = e.target.classList;
  console.log(val);
  // Event type
  val = e.type;
  console.log(val);
  // Timestamp
  val = e.timeStamp;
  console.log(val);
  // Coords event relative to the window
  val = e.clientY;
  console.log(val);
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  console.log(val);
  val = e.offsetX;
  console.log(val);

  
}