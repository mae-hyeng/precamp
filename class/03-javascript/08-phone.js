const changeFocus1 = () => {
  let p1 = document.getElementById("phone01").value;
  let p2 = document.getElementById("phone02");
  if (p1.length === 3) {
    p2.focus();
  }
};

const changeFocus2 = () => {
  let p2 = document.getElementById("phone02").value;
  let p3 = document.getElementById("phone03");
  if (p2.length === 4) {
    p3.focus();
  }
};
