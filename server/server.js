const path = require("path");
const fs = require("fs");

let chirps = [
  { "April 17": "Christos Annesti!" },
  { "April 31": "We had a great time at my 30th high school reunion.", },
  { "May 1": "I'm so grateful for this wonderful wife today on her birthday ", },
  { "May 19": "Perfect way to celebrate my best friend's birthday watching Dr. Strange 2.", },
  { "June 31": "It was wonderful weather for our parish day at the Lake, part-1." },
];

// create a path
let filePath = path.join(__dirname, "../chirps.json");

// option1: write contents of chirps array to empty chirps json file or nonexistant json file
fs.writeFileSync(filePath, JSON.stringify(chirps, null, 2), "utf-8", (err) =>
  console.log(err)
);

// read file, output chirps to console
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
