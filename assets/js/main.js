"use strict";

//# Objects, Keys, Methods

//# Level_1_2

const person = {
  name: "Felix",
  age: 24,
  sayNameAge: () => {
    window.alert(`${person.name} ${person.age}`);
  },
};

console.log(person.name);
console.log(person["age"]);

// person.sayNameAge();

//# Level_1_5

let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Untere Schublade"]);

//# Level 1_6

let myMusic = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

myMusic.push({
  kunstler: "Broilers",
  title: "Tanzt du noch einmal mit mir",
  release_jahr: 2011,
  formate: ["LP", "CD", "MC", "Download"],
  gold: false,
});

console.log(myMusic[0].kunstler);
console.log(myMusic[1].formate[3]);
console.log(myMusic[1].gold);
console.log(`${myMusic[2].release_jahr} ${myMusic[3].release_jahr}`);
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.slice(myMusic[3].title.indexOf("Ride"), 21));
console.log(myMusic[2].title.slice(myMusic[2].title.length - 2, myMusic[2].title.length));
console.log(myMusic[1].kunstler.slice(myMusic[1].kunstler.indexOf(" ")));
console.log(myMusic);

//# Level_1_7

let myMusic2 = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];
myMusic2.forEach((song) => {
  console.log(song.artist);
  console.log(song.title);
  console.log(song.medium);
});

//# Level_1_8

let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

studentData.forEach((student) => {
  console.log(student.name);
  console.log(student.coop);
  console.log(student.address.city);
  console.log(student.emails);
});

//# Level_2_1

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

let nameArray = [];

edelMetallPreise.forEach((metall) => {
  nameArray.push(metall.name);
});

console.log(nameArray);

let preiseArray = edelMetallPreise.map((metall) => {
  return metall.preiseGramEuro;
});

console.log(preiseArray);

const veraenderungArray = edelMetallPreise.map((metall) => {
  return metall.veraenderung;
});

console.log(veraenderungArray);

const filteredPeise = preiseArray.filter((preis) => preis > 50);

console.log(filteredPeise);

const tableOutput = () => {
  let table = document.createElement("table");
  table.insertAdjacentHTML(
    "afterbegin",
    `<tr>
  <th>Name</th>
  <th>PreiseGramEuro</th>
  <th>Veränderung</th>
  </tr>`
  );
  let i = 0;
  edelMetallPreise.forEach((metall) => {
    // console.log(`${nameArray[i]} ${preiseArray[i]} ${veraenderungArray[i]}`);
    table.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
    <td>${nameArray[i]}</td>
    <td>${preiseArray[i]}</td>
    <td>${veraenderungArray[i]}</td>
    </tr>
    `
    );
    i++;
  });
  document.body.insertAdjacentElement("afterbegin", table);
};

tableOutput();

//# Level_2_2

const singers = [
  { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

singers.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
});
console.log(singers);

//# Level_2_3 und 2_4

const singers2 = [
  { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];
const tableContainer = document.querySelector("#table-container");

// const singersTable = document.createElement("table");
// const singersTableHead = `<thead>
// <tr>
// <th>Name</th>
// <th>Country</th>
// <th>Period Acive</th>
// <th>Genre</th>
// </thead>
// </tr>`;
// const tableBody = document.createElement("tbody");

// singersTable.insertAdjacentHTML("afterbegin", singersTableHead);

// const outputTable = () => {
//   singers2.forEach((singer) => {
//     const outputString = `<tr>
//     <td>${singer.name}</td>
//     <td>${singer.country}</td>
//     <td>${singer.period_active.start} ${singer.period_active.end}</td>
//     <td>${singer.genre}</td>
//     </tr>`;
//     tableBody.insertAdjacentHTML("beforeend", outputString);
//   });

//   singersTable.insertAdjacentElement("beforeend", tableBody);

//   console.log(singersTable);

//   tableContainer.insertAdjacentElement("beforeend", singersTable);
// };

//# Level 2_4

const nameBtn = document.querySelector(".name");
const countryBtn = document.querySelector(".country");
const genreBtn = document.querySelector(".genre");

nameBtn.addEventListener("click", () => {
  singers2.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  });
  outputTable();
});

countryBtn.addEventListener("click", () => {
  singers2.sort((a, b) => {
    if (a.country < b.country) {
      return -1;
    }
  });
  outputTable();
});

genreBtn.addEventListener("click", () => {
  singers2.sort((a, b) => {
    if (a.genre < b.genre) {
      return -1;
    }
  });
  outputTable();
});

const table = document.createElement("table");
table.insertAdjacentHTML(
  "afterbegin",
  `
<tr>
<th>Name</th>
<th>Country</th>
<th>Period Acive</th>
<th>Genre</th>
</tr>
`
);

singers2.forEach((singer) => {
  table.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
      <td>${singer.name}</td>
      <td>${singer.country}</td>
      <td>${singer.period_active.start} ${singer.period_active.end}</td>
      <td>${singer.genre}</td>
    </tr>
    `
  );
});

tableContainer.insertAdjacentElement("afterbegin", table);

const outputTable = () => {
  tableContainer.innerHTML = "";
  const table = document.createElement("table");
  table.insertAdjacentHTML(
    "afterbegin",
    `
  <tr>
  <th>Name</th>
  <th>Country</th>
  <th>Period Acive</th>
  <th>Genre</th>
  </tr>
  `
  );

  singers2.forEach((singer) => {
    table.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>${singer.name}</td>
        <td>${singer.country}</td>
        <td>${singer.period_active.start} ${singer.period_active.end}</td>
        <td>${singer.genre}</td>
      </tr>
      `
    );
  });
  tableContainer.insertAdjacentElement("afterbegin", table);
};

//# Level_2_5

const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".search_btn");
const searchOutput = document.querySelector(".search_output");

const searchArtist = () => {
  singers2.forEach((artist) => {
    if (artist.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      searchOutput.innerHTML = "";
      console.log("geht");
      const table = document.createElement("table");
      table.insertAdjacentHTML(
        "afterbegin",
        `
    <tr>
        <td>${artist.name}</td>
        <td>${artist.country}</td>
        <td>${artist.period_active.start} ${artist.period_active.end}</td>
        <td>${artist.genre}</td>
      </tr>
    `
      );
      searchOutput.insertAdjacentElement("afterbegin", table);
    }
  });
};

searchBtn.addEventListener("click", searchArtist);
