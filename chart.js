/**
* chart.js
*
* This file is simply resonsible for drawing the chart by contacting
* google charts with information set in data.js
*/

//namespace
var marriage = marriage || {};

google.load('visualization', '1', {
            packages: ['corechart']
        });
        function drawVisualization() {
            //var queryText = encodeURIComponent("SELECT Category, year5 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH");
            google.visualization.drawChart({
                "containerId": "visualization_div",
                "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
                "query": marriage.currentQuery,
                "refreshInterval": 5,
                "chartType": "ColumnChart",
                "options": {
                    "colors":["#94FF94", "#66FF66", "#47B247", "#296629"],
                    "titleTextStyle": {
                        color: "black",
                        fontName: "Open Sans",
                        fontSize: 16,
                        bold: false,
                        italic: false
                    },
                    "title": marriage.currentTitle,
                    "titleFontSize": 12,
                    "bar": {
                        "stroke-color":"black",//This line doesn't work. I can't find the stroke parameter.
                        "groupWidth": "90%"
                    },
                    "vAxis": {
                        "title": "Percent Divorced After XX Years",
                        "textStyle": {
                            color: "black",
                            fontName: "Open Sans",
                            fontSize: 12,
                            bold: false,
                            italic: false
                        },
                        "titleTextStyle": {
                            color: "black",
                            fontName: "Open Sans",
                            fontSize: 16,
                            bold: false,
                            italic: false
                        }
                    },
                    "hAxis": {
                        "title": marriage.currentHorTitle,
                        "textStyle": {
                            color: "black",
                            fontName: "Open Sans",
                            fontSize: 12,
                            bold: false,
                            italic: false
                        },
                        "titleTextStyle": {
                            color: "black",
                            fontName: "Open Sans",
                            fontSize: 16,
                            bold: false,
                            italic: false
                        }
                    },
                    "isStacked": true
                }
            })
        };
        google.setOnLoadCallback(drawVisualization);