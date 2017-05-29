// https://github.com/Pelirrojo/DataViz-DojoKata

var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/data/chart5', function (req, res) {
  res.send([
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ])
});



app.get('/data/chart4', function (req, res) {
  res.send([
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ])
});


app.get('/data/chart3', function (req, res) {
  res.send([
          {
            "key": "Series1",
            "color": "#d62728",
            "values": [
              {
                "label" : "Group A" ,
                "value" : -1.8746444827653
              } ,
              {
                "label" : "Group B" ,
                "value" : -8.0961543492239
              } ,
              {
                "label" : "Group C" ,
                "value" : -0.57072943117674
              } ,
              {
                "label" : "Group D" ,
                "value" : -2.4174010336624
              } ,
              {
                "label" : "Group E" ,
                "value" : -0.72009071426284
              } ,
              {
                "label" : "Group F" ,
                "value" : -0.77154485523777
              } ,
              {
                "label" : "Group G" ,
                "value" : -0.90152097798131
              } ,
              {
                "label" : "Group H" ,
                "value" : -0.91445417330854
              } ,
              {
                "label" : "Group I" ,
                "value" : -0.055746319141851
              }
            ]
          },
          {
            "key": "Series2",
            "color": "#1f77b4",
            "values": [
              {
                "label" : "Group A" ,
                "value" : 25.307646510375
              } ,
              {
                "label" : "Group B" ,
                "value" : 16.756779544553
              } ,
              {
                "label" : "Group C" ,
                "value" : 18.451534877007
              } ,
              {
                "label" : "Group D" ,
                "value" : 8.6142352811805
              } ,
              {
                "label" : "Group E" ,
                "value" : 7.8082472075876
              } ,
              {
                "label" : "Group F" ,
                "value" : 5.259101026956
              } ,
              {
                "label" : "Group G" ,
                "value" : 0.30947953487127
              } ,
              {
                "label" : "Group H" ,
                "value" : 0
              } ,
              {
                "label" : "Group I" ,
                "value" : 0
              }
            ]
          }
        ]

  );

});

app.listen(7001, function () {
  console.log('Example app listening on port 7001!');
});
