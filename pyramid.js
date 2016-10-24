

function drawPyramid(height) {

  // clears old content
  document.getElementById("pyramid").innerHTML = "";

  // for reach row..
  for (var row = 0; row < height; row++)
    {

      // figure out number of bricks and spaces
      var bricks = row + 2;
      var spaces = height - row - 1;

      // build up row string
      var rowStr = "";
      for (var j = 0; j < spaces; j++)
        {
          var spaceChar = "\u00A0";
          rowStr += spaceChar;
        }
      for (var k = 0; k < bricks; k++)
        {
          rowStr += "#";
        }

      // create text element from string
      textElem = document.createTextNode(rowStr);

      // create <p> element with text inside
      rowElem = document.createElement("p");
      rowElem.appendChild(textElem);

      // insert <p> as child of pyramid <div>
      document.getElementById("pyramid").appendChild(rowElem);
    }
}
