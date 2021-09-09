function doSomething(){
    console.log('I am coding Javascript');
}
console.log('First: ami shobar age');
console.log('Second: I am the second one');
//setTimeout(doSomething, 5000);
setTimeout(function(){
    console.log('I am using vs code');
} ,5000);

setTimeout(()=>{
    console.log('Exploring MDN articles');
},4000);
console.log('Third: I am the third one');
console.log('Four: I am the fourth one');

//