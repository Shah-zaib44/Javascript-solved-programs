// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// // set session storage item
// sessionStorage.setItem('name', 'Beth');

// // remove from storage
// //localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(localStorage.getItem('key'));

// document.querySelector('form').addEventListener('submit', function(e){
//   const taskValue = document.getElementById('task').value;

//   let taskArray;
// console.log(localStorage.getItem('tasks'));
//   if(localStorage.getItem('tasks') === null) {
//     taskArray = [];
//   } else {
//     taskArray=JSON.parse(localStorage.getItem('tasks'));
//   }

//   taskArray.push(taskValue);
// console.log(taskArray)
//   localStorage.setItem('tasks', JSON.stringify(taskArray));

//   alert('Task saved');

//   e.preventDefault();
// });

// const taskArray = JSON.parse(localStorage.getItem('tasks'));

// taskArray.forEach(function(tasks){
//   console.log(tasks);
// });


let a=2,b=4,c=9,d=8;
let product_ids;
if(localStorage.getItem('product_id')===null)
{
  product_ids=[];
}
else{
  
  product_ids=JSON.parse(localStorage.getItem('product_id'))
  

}
product_ids.push(a)
product_ids.push(c)
product_ids.push(d)
localStorage.setItem('product_id',JSON.stringify(product_ids))
let get_product_ids=JSON.parse(localStorage.getItem('product_id'));
get_product_ids.forEach(function(product_id)
{
  console.log(product_id);
})