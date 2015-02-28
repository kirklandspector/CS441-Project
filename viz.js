/*
* viz.js
*
*Goes out to the fusion table and retrieves data
*
* @author: Kirkland Spector
*/
    google.load('visualization', '1', {packages: ['corechart']});
    function drawVisualization() 
	{
      google.visualization.drawChart(
	  {
        "containerId": "visualization_div",
        "dataSourceUrl": 'https://www.google.com/fusiontables/gvizdata?tq=',
        "query":"SELECT * FROM 1AXFY1Sb2nyhMCqJtgEsRAkSx021gYECfP7JYFOyB",
        "refreshInterval": 5,
        "chartType": "ColumnChart",
        "options": 
		{
		"isStacked": "true",
        }
	});
   }

	google.setOnLoadCallback(drawVisualization);