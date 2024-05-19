let d = document;

console.group("Reference");
console.log("Loader Circle ->", "https://uiverse.io/NlghtM4re/ordinary-mouse-17");
console.log("Switch ->", "https://uiverse.io/csemszepp/soft-pug-40");
console.log("Rain ->", "https://youtu.be/YhXxBhInJMI?si=Ib56mu0h76sQz9WJ");
console.log("Svg ->", "https://svgsilh.com/es/4caf50/image/1227913.html");
console.groupEnd();

function autocomplete(inpt, elArray) {
  let currentFocus;

  inpt.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) return false;
    currentFocus = -1;

    a = document.createElement("div");
    a.setAttribute("class", "autocomplete-items");
    a.setAttribute("id", "autocomplete-list");

    this.parentNode.appendChild(a);

    for (i = 0; i < elArray.length; i++) {
      if (
        elArray[i][0].substr(0, val.length).toUpperCase() === val.toUpperCase()
      ) {
        b = document.createElement("a");
        b.setAttribute("href", elArray[i][1]);
        b.innerHTML = `<strong>${elArray[i][0].substr(0, val.length)}</strong>`;
        b.innerHTML += elArray[i][0].substr(val.length);
        b.innerHTML += `<input type='hidden' value="${elArray[i][0]}"></input>`;

        b.addEventListener("click", function (e) {
          inpt.value = this.querySelector("input").value;
          closeAllLists();
        });

        a.appendChild(b);
      }
    }
  }); /* fin */

  inpt.addEventListener("keydown", function (e) {
    let x = document.getElementById("autocomplete-list");
    if (x) x = x.querySelectorAll("a");
    if (e.key === "ArrowDown") {
      currentFocus++;
      addActive(x);
    } else if (e.key === "ArrowUp") {
      currentFocus--;
      addActive(x);
    } else if (e.key === "Enter") {
      e.preventDefault();

      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
        document.querySelector(".buscar").style.backgroundColor = "white";
        document.querySelector(".buscar").style.color = "blue";
      }
    }
  }); /* fin */

  function addActive(x) {
    if (!x) return false;

    removeActive(x);

    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;

    x[currentFocus].classList.add("autocomplete-active");
  } /* fin */

  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  } /* fin */

  function closeAllLists(elm) {
    let $autocompletes = document.querySelectorAll(".autocomplete-items");

    for (let i = 0; i < $autocompletes.length; i++) {
      if (elm !== $autocompletes[i] && elm !== inpt) {
        $autocompletes[i].parentNode.removeChild($autocompletes[i]);
      }
    }
  } /* fin */

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  }); /* fin */
} /* fin autocomplete function */

let bands = [
  /* ======================= A ======================= */
  ["Arcangel", "https://20essentials.github.io/arcangel/"],

  /* ======================= B ======================= */
  ["Barren Gates", "https://20essentials.github.io/barren-gates/"],

  /* ======================= C ======================= */
  ["Cher", "https://20essentials.github.io/cher/ "],


  /* ======================= D ======================= */
  ["Deorro", "https://20essentials.github.io/deorro/"],
  ["Daddy Yankee", "https://20essentials.github.io/da-dddy-yan-kee/"],

  /* ======================= E ======================= */


  /* ======================= F ======================= */


  /* ======================= G ======================= */


  /* ======================= H ======================= */


  /* ======================= I ======================= */


  /* ======================= J ======================= */
  ["John Newman", "https://john-newman-20-essentials.netlify.app/"],

  /* ======================= K ======================= */

  /* ======================= L ======================= */


  /* ======================= M ======================= */


  /* ======================= N ======================= */


  /* ======================= O ======================= */
  ["Ofdream", "https://20essentials.github.io/ofdream/"],


  /* ======================= P ======================= */
  ["Pat Benatar", "https://20essentials.github.io/pat-benatar/"],

  /* ======================= Q ======================= */


  /* ======================= R ======================= */


  /* ======================= S ======================= */
  ["Sandra", "https://20essentials.github.io/sandra/"],
  ["Selena Gomez", "https://20essentials.github.io/selena-gomez/"],

  /* ======================= T ======================= */

  /* ======================= U ======================= */

  /* ======================= V ======================= */

  /* ======================= W ======================= */

  /* ======================= X ======================= */

  /* ======================= Y ======================= */

  /* ======================= Z ======================= */
];

autocomplete(document.getElementById("myInput"), bands);
d.querySelector(".nBands").innerHTML = bands.length;
d.querySelector(".nSongs").innerHTML = bands.length * 20;
d.getElementById("myInput").focus();

/* ======================= LLUVIA ======================= */
let amount = 100;

function rain() {
  let body = document.body,
    i = 0;

  while (i < amount) {
    let drop = document.createElement("i");

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * document.documentElement.clientWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + "px";
    drop.style.left = posX + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = 1 + duration + "s";

    body.appendChild(drop);
    i++;
  }
}

rain();

/* ======================= SWITCH CHECK  ======================= */
d.addEventListener("input", (e) => {
  let $checkBoxSwitch = d.getElementById("switch1");

  if (e.target === $checkBoxSwitch) {
    if (e.target.checked) {
      amount += 1;
      rain();
    } else {
      amount += 1;
      rain();
    }
  }
});
