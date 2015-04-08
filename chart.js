/**
 * chart.js
 *
 * This file is simply resonsible for drawing the chart by contacting
 * google charts with information set in data.js
 */

//namespace
var marriage = marriage || {};
google.load('visualization', '1', {'packages': ['corechart']});


function initialize() {
    var opts = {sendMethod: 'auto'};
    var query = new google.visualization.Query('http://spreadsheets.google.com/ccc?key=1KB2xTrI0uF1glbcOt2TetEVjMKkkDjez2PV941hnwLE', opts);

    query.setQuery(marriage.currentQuery);

    // Send the query with a callback function.
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {

    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    console.log("Got here");
    var data = response.getDataTable();
    var options = {
        colors: ["#4CAF50", "#66BB6A", "#81C784", "#A5D6A7"],
        titleTextStyle: {
            color: "black",
            fontName: "Open Sans",
            fontSize: 16,
            bold: false,
            italic: false
        },
        title: marriage.currentTitle,
        titleFontSize: 12,
        bar: {
            strokeColor: "black", //This line doesn't work. I can't find the stroke parameter.
            groupWidth: "90%"
        },
        
        vAxis: {
            title: "Percent Divorced After XX Years",
            maxValue: 1,
            textStyle: {
                color: "black",
                fontName: "Open Sans",
                fontSize: 12,
                bold: false,
                italic: false
            },
            titleTextStyle: {
                color: "black",
                fontName: "Open Sans",
                fontSize: 16,
                bold: false,
                italic: false
            }
        },
        hAxis: {
            title: marriage.currentHorTitle,
            textStyle: {
                color: "black",
                fontName: "Open Sans",
                fontSize: 12,
                bold: false,
                italic: false
            },
            titleTextStyle: {
                color: "black",
                fontName: "Open Sans",
                fontSize: 16,
                bold: false,
                italic: false
            }
        },
        isStacked: true
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('visualization_div'));
    chart.draw(data, options);
}

google.setOnLoadCallback(initialize);

/*google.load('visualization', '1', {
            packages: ['corechart']
        });
        function drawVisualization() {
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
                    "isStacked": true
                }
            })
        };*/