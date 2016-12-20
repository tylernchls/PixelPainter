var currentlySelectedColor = 'blue';


// Clear Button
var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {
  var cells = document.getElementsByClassName('cells'); // grabs all cells and stores it in variable
  for(var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = '';  // changes all sells back to orange
  }
});

// Erase button
var eraseButton = document.getElementById('eraseButton');
eraseButton.addEventListener('click', function() {
  currentlySelectedColor = '';  // changes color of pixel back to orange
});



// Array of colors for swatch container
var colorsArr = ['#fefa43 ', '#fadb50 ', '#fef972 ', '#f1d781 ', '#39720e ',
 '#3d7b0f ', '#c2f543 ', '#7ff327 ', '#a5f52e ', '#6bc034 ', '#7df47b ', '#a7e58c ',
 '#60a868 ', '#7bf194 ', '#79741b ', '#487e4f ', '#e13233 ', '#e34e34 ', '#e88837 ',
 '#d03b44 ', '#6a1113 ', '#8b2d2e ', '#bb6433 ', '#e87c59 ', '#bf2f44 ', '#d6907a ',
 '#e03f90 ', '#962b2c ', '#e470af ', '#b55a5b ', '#da8080 ', '#efb4bd ', '#ec9c7b ',
 '#dd50fa ', '#a9337e ', '#c175d0 ', '#c36f8e ', '#c46f8f ', '#e28074 ', '#e39f66 ',
 '#061773 ', '#371b75 ', '#0c1e63 ', '#113cf6 ', '#682076 ', '#6e46d9 ', '#6393e5 ',
 '#77faf9 ', '#3b8180 ', '#3a3c7e ', '#51baf6 ', '#b0d3e0 ', '#55a9a0 ', '#91caf4 ',
 '#adbed8 ', '#685b7f ', '#686be5 ', '#3b6bd7 ', '#595bc2 ', '#697786 ', '#4c7ba9 ',
 '#367575 ', '#74d7c8 ', '#a2a2a2 ', '#cecfce ', '#000000 '];



// sets paint grid
function setGrid(n,m) {

  var grid = document.getElementById('grid');
  grid.setAttribute('style',`width: ${n*20}px; height: ${m*20}px;` );  // does math to build square grid

  for (var i = 0; i < n; i++) {
    for (var x = 0; x < m; x++) {
      var div = document.createElement('div');  //creates new divs inside of grid div
      div.classList.add('cells');
      div.id = 'div' + x; // remove! -ray
      grid.appendChild(div);
      div.style.backgroundColor = '';

      div.addEventListener('mouseover', function() {
        this.style.backgroundColor = currentlySelectedColor;  // sets bgc to whatever color variable is set to

        console.log(this);
      });

    }
  }
}

// sets colorGrid
function colorGrid(a,b) {
  var swatchGrid = document.getElementById('swatchGrid');
  swatchGrid.setAttribute('style',`width: ${a*20}px; height: ${b*20}px;`);
  var colorIndex = 0;
  for (var i = 0; i < a; i++) {
    for (var x = 0; x < b; x++) {
      var div = document.createElement('div');
      div.classList.add('colorCells');
      div.id = 'div' + x; // remove! -ray
      swatchGrid.appendChild(div);
      div.style.backgroundColor = colorsArr[colorIndex];  //adds colors to grid from array of colors
      colorIndex++;

      div.addEventListener('click', function() {
        currentlySelectedColor = this.style.backgroundColor; // sets currentlySelectedColor to what color is clicked on
      });
    }
  }

}


setGrid(30,30);
colorGrid(6,10);























