const cardArrays = [ 
  {
    'name': 'banana',
    'img':'img/banana.png',
  },
  {
    'name': 'orange',
    'img': 'img/orange.png',
  },{
    'name': 'kiwi',
    'img': 'img/kiwi.png',
  },{
    'name': 'watermelon',
    'img': 'img/watermelon.png',
  },
  {
    'name': 'eggplant',
    'img': 'img/eggplant.png',
  },
  {
    'name': 'rock',
    'img': 'img/rock.png',
  },
  {
    'name': 'burger',
    'img': 'img/hamburger.png',
  },
  {
    'name': 'pizza',
    'img': 'img/pizza.png',
  },
  {
    'name': 'peach',
    'img': 'img/peach.png',
  },
  {
    'name': 'lettuce',
    'img': 'img/lettuce.png',
  },
  {
    'name': 'beer',
    'img': 'img/beer.png',
  },
  {
    'name': 'img/nike',
    'img': 'img/nike.png',
  },
];

const gameGrid = cardArrays;

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
 const { name, img } = item;

 const card = document.createElement('div');
 card.classList.add('card');
 card.dataset.name = name;

 const front = document.createElement('div');
 front.classList.add('front');

 const back = document.createElement('div');
 back.classList.add('back');
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
 grid.addEventListener('click', event => {
  const clicked = event.target;
  if (
    clicked.nodeName === 'SECTION' ||
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

