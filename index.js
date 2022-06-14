// Your code goes here

// setup an event listner for DOMContentLoaded;

document.addEventListener('DOMContentLoaded', function(){
  console.log('The DOM has loaded')
  updatedDOM()
});

function updatedDOM(){
  const p = document.getElementById('text')
  p.innerHTML = 'This is really cool!';
}

// const p = document.querySelector('p')
// console.log(p);

// p.innerText = 'This is really cool!'
