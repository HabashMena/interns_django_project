let matrix = ["", "", "", "", "", "", "", "", ""];
let letter = "X";
let bool = 0;

function move(index) {
  if (matrix[index] == "" && !bool) {
    matrix[index] = letter;
    update();
    if (check()) {
      document.getElementById("message").textContent = "Player " + (letter == "X" ? "1" : "2") + " wins!!!!!";
      bool = true;
    } else {
        letter = letter == "X" ? "O" : "X";
    }
  }
}

function update() {
  let cells = document.getElementsByTagName("td");
  for (let i = 0; i < 9; i++) {
    cells[i].textContent = matrix[i];
  }
}

function check() {
  
  if (matrix[0] == matrix[1] && matrix[1] == matrix[2] && matrix[0] != "") return true;
  if (matrix[3] == matrix[4] && matrix[4] == matrix[5] && matrix[3] != "") return true;
  if (matrix[6] == matrix[7] && matrix[7] == matrix[8] && matrix[6] != "") return true;
  if (matrix[0] == matrix[3] && matrix[3] == matrix[6] && matrix[0] != "") return true;
  if (matrix[1] == matrix[4] && matrix[4] == matrix[7] && matrix[1] != "") return true;
  if (matrix[2] == matrix[5] && matrix[5] == matrix[8] && matrix[2] != "") return true;
  if (matrix[0] == matrix[4] && matrix[4] == matrix[8] && matrix[0] != "") return true;
  if (matrix[2] == matrix[4] && matrix[4] == matrix[6] && matrix[2] != "") return true;

  return false;
}
