let d = document;

console.group("Reference");
console.log(
  "Loader Circle ->",
  "https://uiverse.io/NlghtM4re/ordinary-mouse-17"
);
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

    let miContador = 0;
    this.parentNode.appendChild(a);

    for (i = 0; i < elArray.length && miContador < 6; i++) {
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
        miContador++;
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
  ["Al Bano e Romina Power", "https://20essentials.github.io/al-bano-and-romina-power/"],
  ["Ana Gabriel", "https://20essentials.github.io/ana-gabriel/"],
  ["Agnes Obel", "https://20essentials.github.io/agnes-obel/"],
  ["Alphex Twin", "https://20essentials.github.io/alphex-twin/"],
  ["Alex Bueno", "https://20essentials.github.io/alex-bueno/"],
  ["Axol", "https://20essentials.github.io/axol/"],
  ["Arcangel", "https://20essentials.github.io/arcangel/"],
  ["Autechre", "https://20essentials.github.io/autechre/"],

  /* ======================= B ======================= */
  ["Barren Gates", "https://20essentials.github.io/barren-gates/"],
  ["Bonobo", "https://20essentials.github.io/bonobo/"],
  ["Bruno Mars", "https://20essentials.github.io/bruno-mars/"],

  /* ======================= C ======================= */
  ["Cher", "https://20essentials.github.io/cher/ "],
  ["Camilo Sesto", "https://20essentials.github.io/camilo-sesto/"],
  ["Chino y Nacho", "https://20essentials.github.io/chino-y-nacho/"],
  ["Can", "https://20essentials.github.io/can/"],

  /* ======================= D ======================= */
  ["Deorro", "https://20essentials.github.io/deorro/"],
  ["Daddy Yankee", "https://20essentials.github.io/da-dddy-yan-kee/"],
  ["Defqwop", "https://20essentials.github.io/defqwop/"],
  ["Danny Ocean", "https://20essentials.github.io/danny-ocean/"],
  ["Don Omar", "https://20essentials.github.io/don-omar/"],
  ["Drake", "https://20essentials.github.io/dr4ke/"],
  

  /* ======================= E ======================= */
  ["Enrique Iglesias", "https://20essentials.github.io/enrique-iglesias/"],
  ["Elton John", "https://20essentials.github.io/elton-john/"],
  ["Edd Sheeran", "https://20essentials.github.io/edd-sheeran/"],

  /* ======================= F ======================= */
  ["French Montana", "https://20essentials.github.io/french-montana/"],

  /* ======================= G ======================= */
  ["Gaitán Castro", "https://20essentials.github.io/duo-hermanos-gaitan/"],

  /* ======================= H ======================= */
  ["Harry Styles", "https://20essentials.github.io/harry-styles/"],
  ["Ha-ash", "https://20essentials.github.io/ha-ash/"],
  ["Hiroyuki Sawano", "https://20essentials.github.io/sawano-hiroyuki/"],

  /* ======================= I ======================= */

  /* ======================= J ======================= */
  ["John Newman", "https://20essentials.github.io/john-newman/"],
  ["Juan Gabriel", "https://20essentials.github.io/juan-gabriel/"],
  ["Johnny Steele", "https://20essentials.github.io/terrence-mann/"],
  ["Jaymes Young", "https://20essentials.github.io/james-young/"],

  /* ======================= K ======================= */
  ["Kavinsky", "https://20essentials.github.io/kavinsky/"],
  ["Kanye West", "https://20essentials.github.io/kanye-west/"],

  /* ======================= L ======================= */
  ["Lenny Kravitz", "https://20essentials.github.io/lenny-kravitz/"],
  ["Lady Gaga", "https://20essentials.github.io/lady-gaga/"],
  ["Luther Vandross", "https://20essentials.github.io/luther-v/"],
  ["Luis Enrique", "https://20essentials.github.io/luis-enrique/"],
  ["Lucha Reyes", "https://20essentials.github.io/lucha-reyes/"],

  /* ======================= M ======================= */
  ["Marilyn Manson", "https://20essentials.github.io/marilyn-manson/"],
  ["Mike Menna", "https://20essentials.github.io/mike-menna/"],

  /* ======================= N ======================= */

  /* ======================= O ======================= */
  ["Ofdream", "https://20essentials.github.io/ofdream/"],

  /* ======================= P ======================= */
  ["Pat Benatar", "https://20essentials.github.io/pat-benatar/"],
  [
    "Pedro Suárez-Vértiz",
    "https://20essentials.github.io/pedro-suarez-vertiz/",
  ],
  ["Prince Royce", "https://20essentials.github.io/princ3-royce/"],
  ["Paul MacCartney", "https://20essentials.github.io/paul-maccartney/"],
  ["Pedro Capo", "https://20essentials.github.io/pedro-capo/"],
  ["Pepe Vásquez", "https://20essentials.github.io/pepe-vasquez/"],

  /* ======================= Q ======================= */

  /* ======================= R ======================= */
  ["Rocio Dúrcal", "https://20essentials.github.io/rocio-durcal/"],
  ["Rocio Jurado", "https://20essentials.github.io/rocio-jurado"],
  ["Romeo Santos", "https://20essentials.github.io/romeo-santos/"],

  /* ======================= S ======================= */
  ["Sandra", "https://20essentials.github.io/sandra/"],
  ["Selena Gomez", "https://20essentials.github.io/selena-gomez/"],
  ["Shakira", "https://20essentials.github.io/shakira/"],
  ["Sawano Hiroyuki", "https://20essentials.github.io/sawano-hiroyuki/"],
  ["Stevie Wonder", "https://20essentials.github.io/stevie-wonder/"],
  ["Sia", "https://20essentials.github.io/sia/"],
  

  /* ======================= T ======================= */
  ["Terrence Mann", "https://20essentials.github.io/terrence-mann/"],


  /* ======================= U ======================= */

  /* ======================= V ======================= */

  /* ======================= W ======================= */

  /* ======================= X ======================= */

  /* ======================= Y ======================= */

  /* ======================= Z ======================= */
  ["Zambo Cavero", "https://20essentials.github.io/zambo-cavero/"],
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
