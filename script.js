const pi = Math.PI;
const dUnits = 1; // 1 means keep in mm, 0.1 means convert to cm
const sUnits = 1; // 1 means keep in cm, 10 means convert to mm
const asUnits = 1; // 1 means cm2/m

var sFormat = Intl.NumberFormat("gr", {
    style: "decimal",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
});
/* var dFormat = Intl.NumberFormat("gr", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}); */
var asFormat = Intl.NumberFormat("gr", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

let As = (d) => pi * d ** 2 / 4; // default units is mm2
let as = (d, s) => As(d) / s; // default units is mm2/cm = 0.01cm2/0.01m = cm2/m
// report the resulting units for as

table = document.querySelector("table.reinforcement");
let DistancesList = [100, 5, 7.5, 10, 12.5, 15, 20, 25, 30];  // using default units of cm
let DiametersList = [6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 32, 40]; // using default units of mm

// construct header row
row = document.createElement("tr");
row.classList.add("header");
column = document.createElement("th");
column.classList.add("distance", "left");
column.appendChild(document.createTextNode("Distance (units)"));
console.log(column);
row.appendChild(column);
for (j = 0; j < DiametersList.length; j++) {
    d = DiametersList[j];
    column = document.createElement("th");
    column.appendChild(document.createTextNode("\u2300" + d * dUnits));
    row.appendChild(column);
}
column = document.createElement("th");
column.classList.add("distance", "right");
column.appendChild(document.createTextNode("Distance (units)"));
console.log(column);
row.appendChild(column);
table.appendChild(row);

// construct data rows
for (i = 0; i < DistancesList.length; i++) {
    s = DistancesList[i];
    row = document.createElement("tr");
    column = document.createElement("td");
    column.classList.add("distance", "left");
    column.appendChild(document.createTextNode(sFormat.format(s * sUnits)));
    row.appendChild(column);
    for (j = 0; j < DiametersList.length; j++) {
        d = DiametersList[j];
        column = document.createElement("td");
        column.appendChild(document.createTextNode(asFormat.format(as(d, s) * asUnits)));
        row.appendChild(column);
    }
    column = document.createElement("td");
    column.classList.add("distance", "right");
    column.appendChild(document.createTextNode(sFormat.format(s * sUnits)));
    row.appendChild(column);
    table.appendChild(row);
}