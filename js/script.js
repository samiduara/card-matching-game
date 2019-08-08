/*
  red: #FF5733  
*/

const cards = [ 
  {
    'name': 'orange',
    'color':'orange',
  },
  
  {
    'name': 'orange',
    'color': 'orange',
  },
  {
    'name': 'blue',
    'color': 'blue',
  },
  {
    'name': 'blue',
    'color': 'blue',
  },
  {
    'name': 'purple',
    'color': 'purple',
  },
  {
    'name': 'purple',
    'color': 'purple',
  },
  {
    'name': 'black',
    'color': 'black',
  },
  {
    'name': 'black',
    'color': 'black',
  },
  {
    'name': 'gray',
    'color': 'gray',
  },
  {
    'name': 'gray',
    'color': 'gray',
  },
  {
    'name': 'yellow',
    'color': 'yellow',
  },
  {
    'name': 'yellow',
    'color': 'yellow',
  },
  {
    'name': 'brown',
    'color':'brown',
  },
  {
    'name': 'brown',
    'color':'brown',
  },
  {
    'name': 'pink',
    'color':'pink',
  },
  {
    'name': 'pink',
    'color':'pink',
  },
  {
    'name': 'aqua',
    'color':'aqua',
  },
  {
    'name': 'aqua',
    'color':'aqua',
  },
];

let firstGuess = '1';
let secondGuess = '2';
let count = 0;
let previousTarget = null;
let delay = 1000;
let shuffledArr = [];


const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);


// make function to shuffle array, that will return a new array

function shuffleDeck(array) {
  shuffledArr = array.sort(() => Math.random() - .5);
  return shuffledArr
}

shuffleDeck(cards)

shuffledArr.forEach(item => {
 const { name, color } = item;

 const card = document.createElement('div');
 card.setAttribute('id', `${name}`)
 card.classList.add('card');
 card.dataset.name = name;

 const front = document.createElement('div');
 front.classList.add('front');

 const back = document.createElement('div');
 back.classList.add('back');
 back.style.background = color;
 grid.appendChild(card);
 card.appendChild(front);
 card.appendChild(back);
});
const match = () => {
 const selected = document.querySelectorAll('.selected');
 selected.forEach(card => {
   card.classList.add('match');
 });
};
const resetGuesses = () => {
 firstGuess = '';
 secondGuess = '';
 count = 0;
 previousTarget = null;
 var selected = document.querySelectorAll('.selected');
 selected.forEach(card => {
   card.classList.remove('selected');
 });
};

// Event listeners

// Reset button
document.querySelector('button').addEventListener('click', handleReset);

function handleReset() {
  window.location.reload(); // Not the best way to rest the game, but this will work for the time being
}




grid.addEventListener('click', event => {
 const clicked = event.target;
 if (
   clicked.nodeName === 'section' ||
   clicked === previousTarget ||
   clicked.parentNode.classList.contains('selected') ||
   clicked.parentNode.classList.contains('match')
 ) {
   return;
 }
 if (count < 2) {
   count++;
   if (count === 1) {
     firstGuess = clicked.parentNode.dataset.name;
     console.log(firstGuess);
     clicked.parentNode.classList.add('selected');
   } else {
     secondGuess = clicked.parentNode.dataset.name;
     console.log(secondGuess);
     clicked.parentNode.classList.add('selected');
   }
   if (firstGuess && secondGuess) {
     if (firstGuess === secondGuess) {
       setTimeout(match, delay);
     }
     setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
 });