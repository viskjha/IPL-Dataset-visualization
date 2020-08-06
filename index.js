const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const extrarunsconcededbyeach = require("./ipl/extrarunsconcededbyeach");
const matcheswoneachperyear = require("./ipl/matcheswoneachperyear");
const topEconomicalBowlers = require("./ipl/topEconomicalBowlers");
const matchesStory = require("./ipl/matchesStory");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_SECOND = "./public/data_second.json";
const JSON_OUTPUT_FILE_PATH_THIRD = "./public/data_third.json";
const JSON_OUTPUT_FILE_PATH_FIFTH = "./public/data_fifth.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {

      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        // 1st
        let result = matchesPlayedPerYear(matches);
        saveMatchesPlayedPerYear(result);

        // 2nd
        let matcheWonPerY = matcheswoneachperyear(matches);
        savematcheswoneachperyear(matcheWonPerY);
        // console.log(matcheWonPerY[0]['Kolkata Knight Riders']);

        // 3rs
        let resultExRun = extrarunsconcededbyeach(deliveries);
        saveextrarunsconcededbyeach(resultExRun);
        // console.log(resultExRun, 'ex');

        // 4th
        let resultEcoBowl= topEconomicalBowlers(deliveries);
        // console.log(resultEcoBowl);

        // 5th
        let resultmatSt = matchesStory(matches);
        savematchesStory(resultmatSt);
        // console.log(resultmatSt);

        // console.log(deliveries.slice(0,2), 'deliveries');
      });

      // console.log(matches.slice(0,1), 'deliveries');
    });
}

// 1st
function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

// 2nd
function savematcheswoneachperyear(matcheWonPerY) {
  const jsonData = {
    matcheswoneachperyear: matcheWonPerY
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_SECOND, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

// 3nd
function saveextrarunsconcededbyeach(resultExRun) {
  const jsonData = {
    extrarunsconcededbyeach: resultExRun
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_THIRD, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

// 5nd
function savematchesStory(resultmatSt) {
  const jsonData = {
    matchesStory: resultmatSt
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_FIFTH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
