function setGrid(n, m) {


  var grid = document.getElementById("grid");
  grid.setAttribute('style',`width: ${n*20}px; height: ${m*20}px;` );

  for (var i = 0; i < n; i++) {
    for (var x = 0; x < m; x++) {
      var div = document.createElement("div");
      div.classList.add('cells');
      div.id = 'div' + x; // remove! -ray
      grid.appendChild(div);
      div.style.float = "left";
      div.style.backgroundColor = "orange";


      div.addEventListener("mouseover", function() {
        this.style.backgroundColor = " green";
        console.log(this);
      });

    }
  }
}



setGrid(20,20);











