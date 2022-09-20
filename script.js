let joy = ["cute animal videos", "a good book", "vacations", "fresh sheets", "figuring out a coding mistake"];

// for (let i=0, ii=joy.length; i<ii; i++) {
//     console.log(i, joy[i])
// }

const ul = document.getElementById("happy");

function listItem(j) {
    let li = document.createElement('li');
    li.innerHTML = j;
    ul.appendChild(li);
};

for (let j of joy) {
    listItem(j);
  };

let smiles = [
    {name: "cute animal videos", smilescale: 9, findit: "TikTok"},
    {name: "a good book", smilescale: 8, findit: "library"},
    {name: "vacations", smilescale: 10, findit: "Trip Advisor"},
    {name: "fresh sheets", smilescale: 8, findit: "linen closet"},
    {name: "figuring out a coding mistake", smilescale: 10, findit: "with a lot of patience"}
];

for (s in smiles) {
    console.log(s, smiles[s]);
}