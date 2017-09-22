var createDiamond = function()
{
  var diamond = document.getElementById("diamond");
  diamond.innerHTML = "";

  var numRows, numHalfRows, displayChar, currentRow;
  numRows = Number(document.getElementById("rows").value);
  // If needed, add one to make total rows odd
  if ((numRows % 2) === 0){numRows++}

  displayChar = document.getElementById("character").value;

  numHalfRows = (numRows - 1) / 2;

  var currentRow, numSpaces, numChars, bintCount;
  currentRow = 1;
  numSpaces = numHalfRows;
  numChars = 1

  var rowOutput = "";

  for (currentRow = 1; currentRow <= numHalfRows; currentRow++)
  {
    for (spaceCount = 0; spaceCount < numSpaces; spaceCount++)
    {
      rowOutput += "&nbsp;";
    }

    for (charCount = 0; charCount < numChars; charCount++)
    {
      rowOutput += displayChar;
    }

    numSpaces--;
    numChars += 2;
    diamond.innerHTML += rowOutput + "<br />";
    rowOutput = "";
  }

  for (charCount = 0; charCount < numChars; charCount++)
  {
    rowOutput += displayChar;
  }
  rowOutput = "";

  for (currentRow = numHalfRows + 1; currentRow <= numRows; currentRow++)
  {
    for (spaceCount = 0; spaceCount < numSpaces; spaceCount++)
    {
      rowOutput += "&nbsp;";
    }

    for (charCount = 0; charCount < numChars; charCount++)
    {
      rowOutput += displayChar;
    }

    numSpaces++;
    numChars -= 2;
    diamond.innerHTML += rowOutput + "<br />";
    rowOutput = "";
  }
}

document.addEventListener("DOMContentLoaded", function()
{
	var createDiamondButton = document.getElementById("createDiamond");
  createDiamondButton.addEventListener("click", createDiamond);
});
