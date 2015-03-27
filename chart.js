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
            //only spin off update call on the first tab switch
            if (marriage.firstClick) {
                marriage.update();
            }
            google.visualization.drawChart({
                "containerId": "visualization_div",
                "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
                "query": marriage.currentQuery,
                "refreshInterval": 5,
                "chartType": "ColumnChart",
                "options": {
                    "colors":["#4CAF50", "#66BB6A", "#81C784", "#A5D6A7"],
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
                    "animation": {
                        duration: 425,
                        easing: 'out',
                        startup: true
                    },
                    "isStacked": true
                }
            })
        };
google.setOnLoadCallback(drawVisualization);