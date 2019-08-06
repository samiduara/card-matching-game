// Card data
const cardsArray = [
    {
      'name': 'banana',
      'img': 'img/banana.png',
    },
    {
      'name': 'rock',
      'img': 'img/rock.png',
    },
    {
      'name': 'burger',
      'img': 'img/burger.png',
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
      'name': 'nike',
      'img': 'img/nike.png',
    },
];
const gameGrid = cardsArray
 .concat(cardsArray)
 .sort(() => 0.5 - Math.random());

