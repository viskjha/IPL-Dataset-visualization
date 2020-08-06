function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  // console.log(seriesData);

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}



// 2nd
// Plot the number of matches won by each team over all the years of IPL.

function fetchAndVisualizeDataSecond() {
  fetch("./data_second.json")
    .then(r => r.json())
    .then(visualizeDataSecond);
}

fetchAndVisualizeDataSecond();

function visualizeDataSecond(datasecond) {
  visualizematcheswoneachperyear(datasecond.matcheswoneachperyear);
  return;
}

function visualizematcheswoneachperyear(matcheswoneachperyear) {
  const kkr = [];
  const rcb = [];
  const csk = [];
  const kxp = [];
  const rr =[];
  const dd = [];
  const mi = [];
  const dc = [];
  const ktk = [];
  const pw = [];
  const nr = [];
  const sh = [];
  const rps = [];
  const gl = [];
  const dcl = [];
  
  for (let won in matcheswoneachperyear) {
    kkr.push(matcheswoneachperyear[won]['Kolkata Knight Riders']);
    rcb.push(matcheswoneachperyear[won]['Royal Challengers Bangalore']);
    csk.push(matcheswoneachperyear[won]['Chennai Super Kings'] || "");
    kxp.push(matcheswoneachperyear[won]['Kings XI Punjab']);
    rr.push(matcheswoneachperyear[won]['Rajasthan Royals'] || "");
    dd.push(matcheswoneachperyear[won]['Delhi Daredevils'] || "");
    mi.push(matcheswoneachperyear[won]['Mumbai Indians'] || "");
    dc.push(matcheswoneachperyear[won]['Deccan Chargers'] || "");
    ktk.push(matcheswoneachperyear[won]['Kochi Tuskers Kerala'] || "");
    pw.push(matcheswoneachperyear[won]['Pune Warriors'] || "");
    nr.push(matcheswoneachperyear[won][''] || "");
    sh.push(matcheswoneachperyear[won]['Sunrisers Hyderabad'] || "");
    rps.push(matcheswoneachperyear[won]['Rising Pune Supergiants'] || "");
    gl.push(matcheswoneachperyear[won]['Gujarat Lions'] || "");
    dcl.push(matcheswoneachperyear[won]['Delhi Capitals'] || "");

    // console.log(matcheswoneachperyear[won]['Kings XI Punjab']);
  }

  // console.log(seriesDataSecond);
  // console.log(matcheWonPerY[0]['Kolkata Knight Riders']);

  Highcharts.chart('matches-won-each-per-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2. Number of matches won by each team over all the year of IPL'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Kolkata Knight Riders',
        data: kkr
  
    }, {
        name: 'Royal Challengers Bangalore',
        data: rcb
  
    }, {
        name: 'Chennai Super Kings',
        data: csk
  
    }, {
      name: 'Kings XI Punjab',
      data: kxp

     },
     {
      name: 'Rajasthan Royals',
      data: rr

     },
     {
      name: 'Delhi Daredevils',
      data: dd

    },
    {
      name: 'Mumbai Indians',
      data: mi

    },
    {
      name: 'Deccan Chargers',
      data: dc

    },
    {
      name: 'Kochi Tuskers Kerala',
      data: ktk

    },
    {
      name: 'Pune Warriors',
      data: pw

    },
    {
      name: 'noResult',
      data: nr

    },
    {
      name: 'Sunrisers Hyderabad',
      data: sh

    },
    {
      name: 'Rising Pune Supergiants',
      data: rps

    },
    {
      name: 'Gujarat Lions',
      data: gl

    },
    {
        name: 'Delhi Capitals',
        data: dcl
  
    }]
  });
  
}


// 3rd
// For the year 2016, plot the extra runs conceded by each team.
function fetchAndVisualizeDataThird() {
  fetch("./data_third.json")
    .then(r => r.json())
    .then(visualizeDataThird);
}

fetchAndVisualizeDataThird();

function visualizeDataThird(datathird) {
  visualizeextrarunsconcededbyeach(datathird.extrarunsconcededbyeach);
  return;
}

function visualizeextrarunsconcededbyeach(extrarunsconcededbyeach) {
  const seriesDataThird = [];
  for (let extra in extrarunsconcededbyeach) {
    seriesDataThird.push([extra, extrarunsconcededbyeach[extra]]);
  }

  // console.log(seriesDataThird);

  Highcharts.chart('extra-runs-conceded-by-each-2016', {
    chart: {
        type: 'column'
    },
    title: {
        text: '3. Extra Runs Conceded by Each Team in 2016'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Extra Runs'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Extra Run in 2016: <b>{point.y}</b>'
    },
    series: [{
        name: 'Extra Run',
        data: seriesDataThird,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  });

}




// 4th
// For the year 2015, plot the top 10 economical bowlers along with their economy rates.
Highcharts.chart('top-10-economical-bowlers-2015', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'World\'s largest cities per 2017'
  },
  subtitle: {
      text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
  },
  xAxis: {
      type: 'category',
      labels: {
          rotation: -45,
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)'
      }
  },
  legend: {
      enabled: false
  },
  tooltip: {
      pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
  },
  series: [{
      name: 'Population',
      data: [
          ['Shanghai', 24.2],
          ['Beijing', 20.8],
          ['Karachi', 14.9],
          ['Shenzhen', 13.7],
          ['Guangzhou', 13.1],
          ['Istanbul', 12.7],
          ['Mumbai', 12.4],
          ['Moscow', 12.2],
          ['São Paulo', 12.0],
          ['Delhi', 11.7],
          ['Kinshasa', 11.5],
          ['Tianjin', 11.2],
          ['Lahore', 11.1],
          ['Jakarta', 10.6],
          ['Dongguan', 10.6],
          ['Lagos', 10.6],
          ['Bengaluru', 10.3],
          ['Seoul', 9.8],
          ['Foshan', 9.3],
          ['Tokyo', 9.3]
      ],
      dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
          }
      }
  }]
});


// 5th
// Discuss a "Story" you want to tell with the given data.
function fetchAndVisualizeDataFifth() {
  fetch("./data_fifth.json")
    .then(r => r.json())
    .then(visualizeDataFifth);
}

fetchAndVisualizeDataFifth();

function visualizeDataFifth(datafifth) {
  visualizematchesStory(datafifth.matchesStory);
  return;
}

function visualizematchesStory(matchesStory) {
  const seriesDataFifth = [];
  for (let sto in matchesStory) {
    seriesDataFifth.push([sto, matchesStory[sto]]);
  }

  // console.log(seriesDataFifth);

  Highcharts.chart('matches-story', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Win by all the Teams'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: seriesDataFifth
    }]
  });
}

