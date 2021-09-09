console.log(1111111111111);
console.log(2222);
//setTimeout(()=>console.log('aaaaaaaaaaaaaaaaa'),5000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log(33333);
console.log(44444);
for (let i = 0; i < 1000; i++) {
   console.log(i);
    
}
//setTimeOut asynchronous vabe kaaj kore
//fetch asynchronous vabe kaaj kore