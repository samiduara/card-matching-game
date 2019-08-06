const cardArrays =[ {
    'name': 'banana',
    'img': 'img/banana.png',
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
 
 back.style.backgroundImage = HTMLOptGroupElement;
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