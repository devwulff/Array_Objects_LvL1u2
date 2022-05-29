// LvL1_2
let nameObj = {
  firstName: "Karl",
  alter: 19,
  sagNameAlter: () => {
    // alert(nameObj.firstName + " " + nameObj.alter);
  },
};

console.log(nameObj.firstName + " " + nameObj.alter);

nameObj.sagNameAlter();

// LvL1_4
let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

unsereHaustiere[1].names.forEach((Hundenamen) => {
  console.log(Hundenamen);
});

// LvL1_5
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
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// LvL1_6
let myMusic = [
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

myMusic.push({
  artist: "Clueso",
  title: "Tanzen",
  release_year: 2021,
  medium: ["CD", "Download"],
  gold: true,
});

console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_year, myMusic[3].release_year);
console.log(myMusic[3].medium[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(-2));
console.log(myMusic[1].artist.slice(-5));

// LvL1_7
myMusic.forEach((x) => (document.body.innerHTML += `<p>${x.artist}</p>`));
myMusic.forEach((x) => (document.body.innerHTML += `<p>${x.title}</p>`));
myMusic.forEach((x) => (document.body.innerHTML += `<p>${x.medium}</p>`));
myMusic.forEach((x) => {
  if (x.release_year > 1975) {
    document.body.innerHTML += `<p>${x.release_year}</p>`;
  }
});

// LvL1_8
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

studentData.forEach((y) =>
  console.log(y.name, y.age, y.address.street, y.address.city)
);

const map1 = studentData.map((x) =>
  console.log(x.name, x.coop, x.address.city, x.emails)
);

// LvL2_1
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
let newArr = [];
edelMetallPreise.forEach((x) => {
  newArr.push(x.name);
});
console.log(newArr);

console.log(edelMetallPreise.map((x) => x.name));

let newArr2 = [];
edelMetallPreise.forEach((y) => {
  newArr2.push(y.preiseGramEuro);
});
console.log(newArr2);

console.log(edelMetallPreise.map((y) => y.preiseGramEuro));

let newArr3 = [];
edelMetallPreise.forEach((z) => {
  newArr3.push(z.veraenderung);
});
console.log(newArr3);

console.log(edelMetallPreise.map((z) => z.veraenderung));

console.log(
  edelMetallPreise.map((x) => x.preiseGramEuro).filter((x) => x > 50)
);

console.log(edelMetallPreise.filter((x) => x.preiseGramEuro > 50));

// LvL2_2

const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
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

singers.sort((x, y) => {
  if (x.name > y.name) {
    return 1;
  } else {
    return -1;
  }
});
console.log(singers);
