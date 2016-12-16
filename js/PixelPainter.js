function setGrid(num) {


  var column = document.getElementById("grid");

  for (var i = 0; i < num; i++) {
    for (var x = 0; x < num; x++) {
      var div = document.createElement("div");
      div.id = 'div' + x;
      column.appendChild(div);
      // div.style.outLine = "1px";
      div.style.backgroundColor = "orange";
      div.style.height = "20px";
      div.style.width = "20px";

      div.addEventListener("mouseover", function() {
        this.style.backgroundColor = " green";
        console.log(this);
      });

    }
  }
}



setGrid(10);











