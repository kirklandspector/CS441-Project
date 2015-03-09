google.load('visualization', '1', {
            packages: ['corechart']
        });
        function drawVisualization() {
            //var queryText = encodeURIComponent("SELECT Category, year5 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH");
            google.visualization.drawChart({
                "containerId": "visualization_div",
                "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
                "query": "SELECT IndependentVariable, year5, year10, year15, year20 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH WHERE Category = 'FirstBirth'",
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
                    "title": "Divorce rates compared to timing of first birth relative to marriage",
                    "titleFontSize": 12,
                    "bar": {
                        "stroke-color":"black",//This line doesn't work. I can't find the stroke parameter.
                        "groupWidth": "90%"
                    },
                    "vAxis": {
                        "title": "Percent Divorced",
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
                        "title": "Timing of first birth relative to wedding",
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