/**
* data.js
*
* This file will contains all of the variables for charts.js
* to use to create graphs and to deal with polymer
*/

//namespace
var marriage = marriage || {};

//variables for chart queries
marriage.currentQuery = "";
marriage.ageQuery = "MUST WRITE QUERY";
marriage.eduQuery = "MUST WRITE QUERY";
marriage.birthQuery = "SELECT IndependentVariable, year5, year10, year15, year20 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH WHERE Category = 'FirstBirth'";

//variables for main chart titles
//TODO: Decide whether this title is neccessary
marriage.currentTitle = "";
marriage.ageTitle = "Divorce Rates Related to Age When Married";
marriage.eduTitle = "Divorce Rates Related to Level of Education";
marriage.birthTitle = "Divorce Rates Related to Timing of First Birth Relative to Marriage";

//variables for horizontal titles
marriage.currentHorTitle = "";
marriage.ageHor = "Age When Married";
marriage.eduHor = "Level of Education When Married";
marriage.birthHor = "Timing of First Birth Relative to Wedding";

/**
* init
*
* For the time being this function will init all the variables
* to a default to build the graph. This might be changed when
* polymer is introduced
*/
marriage.init = function () {
    marriage.currentQuery = marriage.birthQuery;
    marriage.currentTitle = marriage.birthTitle;
    marriage.currentHorTitle = marriage.birthHor;
}();