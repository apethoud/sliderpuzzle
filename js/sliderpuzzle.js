var victoryText = document.querySelector('#victory-text');
var newGameBtn = document.querySelector('#new-game-btn');
var tileGrid = document.querySelector('.tile-grid');
var numberList = ['1','2','3','4','5','6','7','8'];
var vict = false;

var squareOne = document.querySelector('#s1');
var squareTwo = document.querySelector('#s2');
var squareThree = document.querySelector('#s3');
var squareFour = document.querySelector('#s4');
var squareFive = document.querySelector('#s5');
var squareSix = document.querySelector('#s6');
var squareSeven = document.querySelector('#s7');
var squareEight = document.querySelector('#s8');
var squareNine = document.querySelector('#s9');

function switchTiles(a,b){
  var numberInA = a.firstElementChild.textContent;
  var numberInB = b.firstElementChild.textContent;
  b.firstElementChild.textContent = numberInA;
  a.firstElementChild.textContent = "";
  a.classList.toggle('invisible');
  b.classList.toggle('invisible');
}

function randomizeOrder(){
  var len = numberList.length;

  for(i = len - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = numberList[i];
    numberList[i] = numberList[j];
    numberList[j] = temp;
  }

  squareOne.firstElementChild.textContent = numberList[0];
  squareTwo.firstElementChild.textContent = numberList[1];
  squareThree.firstElementChild.textContent = numberList[2];
  squareFour.firstElementChild.textContent = numberList[3];
  squareFive.firstElementChild.textContent = numberList[4];
  squareSix.firstElementChild.textContent = numberList[5];
  squareSeven.firstElementChild.textContent = numberList[6];
  squareEight.firstElementChild.textContent = numberList[7];
}

randomizeOrder();

tileGrid.addEventListener('click', function(e){
  // when you click a square:

    // check if one of that square's horizontal and vertical neighbors is empty. If not, do nothing. If so:
  var clickedTile = e.target;

  if(!vict){
    if(clickedTile === squareOne){
      if(squareTwo.classList.contains('invisible')){
        switchTiles(squareOne,squareTwo);
      }
      if(squareFour.classList.contains('invisible')){
        switchTiles(squareOne,squareFour);
      }
    }

    if(clickedTile === squareTwo){
      if(squareOne.classList.contains('invisible')){
        switchTiles(squareTwo,squareOne);
      }
      if(squareThree.classList.contains('invisible')){
        switchTiles(squareTwo,squareThree);
      }
      if(squareFive.classList.contains('invisible')){
        switchTiles(squareTwo,squareFive);
      }
    }

    if(clickedTile === squareThree){
      if(squareTwo.classList.contains('invisible')){
        switchTiles(squareThree,squareTwo);
      }
      if(squareSix.classList.contains('invisible')){
        switchTiles(squareThree,squareSix);
      }
    }

    if(clickedTile === squareFour){
      if(squareOne.classList.contains('invisible')){
        switchTiles(squareFour,squareOne);
      }
      if(squareFive.classList.contains('invisible')){
        switchTiles(squareFour,squareFive);
      }
      if(squareSeven.classList.contains('invisible')){
        switchTiles(squareFour,squareSeven);
      }
    }

    if(clickedTile === squareFive){
      if(squareTwo.classList.contains('invisible')){
        switchTiles(squareFive,squareTwo);
      }
      if(squareFour.classList.contains('invisible')){
        switchTiles(squareFive,squareFour);
      }
      if(squareSix.classList.contains('invisible')){
        switchTiles(squareFive,squareSix);
      }
      if(squareEight.classList.contains('invisible')){
        switchTiles(squareFive,squareEight);
      }
    }

    if(clickedTile === squareSix){
      if(squareThree.classList.contains('invisible')){
        switchTiles(squareSix,squareThree);
      }
      if(squareFive.classList.contains('invisible')){
        switchTiles(squareSix,squareFive);
      }
      if(squareNine.classList.contains('invisible')){
        switchTiles(squareSix,squareNine);
      }
    }

    if(clickedTile === squareSeven){
      if(squareFour.classList.contains('invisible')){
        switchTiles(squareSeven,squareFour);
      }
      if(squareEight.classList.contains('invisible')){
        switchTiles(squareSeven,squareEight);
      }
    }

    if(clickedTile === squareEight){
      if(squareFive.classList.contains('invisible')){
        switchTiles(squareEight,squareFive);
      }
      if(squareSeven.classList.contains('invisible')){
        switchTiles(squareEight,squareSeven);
      }
      if(squareNine.classList.contains('invisible')){
        switchTiles(squareEight,squareNine);
      }
    }

    if(clickedTile === squareNine){
      if(squareSix.classList.contains('invisible')){
        switchTiles(squareNine,squareSix);
      }
      if(squareEight.classList.contains('invisible')){
        switchTiles(squareNine,squareEight);
      }
    }

  // Checks if the puzzle is solved
    if(squareOne.firstElementChild.textContent == 1 &&
       squareTwo.firstElementChild.textContent == 2 &&
       squareThree.firstElementChild.textContent == 3 &&
       squareFour.firstElementChild.textContent == 4 &&
       squareFive.firstElementChild.textContent == 5 &&
       squareSix.firstElementChild.textContent == 6 &&
       squareSeven.firstElementChild.textContent == 7 &&
       squareEight.firstElementChild.textContent == 8){
      victoryText.classList.toggle('hidden');
      newGameBtn.classList.add('glow');
      vict = true;
    }
  }
});

newGameBtn.addEventListener('click', function(){
  randomizeOrder();
  squareNine.firstElementChild.textContent = "";

  squareOne.classList.remove('invisible');
  squareTwo.classList.remove('invisible');
  squareThree.classList.remove('invisible');
  squareFour.classList.remove('invisible');
  squareFive.classList.remove('invisible');
  squareSix.classList.remove('invisible');
  squareSeven.classList.remove('invisible');
  squareEight.classList.remove('invisible');
  squareNine.classList.add('invisible');

  victoryText.classList.add('hidden');
  newGameBtn.classList.remove('glow');
  vict = false;
});
