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
marriage.ageFQuery = "SELECT IndependentVariable, year5, year10, year15, year20 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH WHERE Category = 'Age-F'";
marriage.ageMQuery = "SELECT IndependentVariable, year5, year10, year15, year20 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH WHERE Category = 'Age-M'";
marriage.eduFQuery = "SELECT IndependentVariable, year5, year10, year15, year20 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH WHERE Category = 'Education-F'";
marriage.eduMQuery = "SELECT IndependentVariable, year5, year10, year15, year20 FROM 1UF9oix8kvZpNtFL32lrMDa_j9pJtCi9SlPJL1YYH WHERE Category = 'Education-M'";
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
* update
*
* This function will init and update all the variables
* to polymer's current settings.
*/
marriage.update = function () {
    var tabs = document.querySelector('paper-tabs');
    tabs.addEventListener('core-select', function() {
        if (tabs.selected == 0) {
            marriage.currentQuery = marriage.birthQuery;
            marriage.currentTitle = marriage.birthTitle;
            marriage.currentHorTitle = marriage.birthHor;
        }
        else if (tabs.selected == 1) {
            marriage.currentQuery = marriage.ageMQuery;
            marriage.currentTitle = marriage.ageTitle;
            marriage.currentHorTitle = marriage.ageHor;
        }
        else if (tabs.selected == 2) {
            marriage.currentQuery = marriage.eduMQuery;
            marriage.currentTitle = marriage.eduTitle;
            marriage.currentHorTitle = marriage.eduHor;
        }
        console.log("Selected: " + tabs.selected);
    }());
}