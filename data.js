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

//polymer vars
marriage.firstClick = true;
marriage.toggleStatus = false;//disabled or not
marriage.toggleValue = false;//male is false / female is true
marriage.currentTab = 0;//currently selected tab

/**
 * init
 * 
 * sets all current's to init tab selected
 **/
marriage.initEvent = function() {
    marriage.currentQuery = marriage.birthQuery;
    marriage.currentTitle = marriage.birthTitle;
    marriage.currentHorTitle = marriage.birthHor;
}();

/**
 * update
 *
 * This function will init and update all the variables
 * to polymer's current settings.
 **/
marriage.update = function () {
    //find boths polyer elements in use
    var tabs = document.querySelector('paper-tabs');
    var toggle = document.querySelector('paper-toggle-button');
    
    //update changes from tabs change
    tabs.addEventListener('core-select', function() {
        marriage.currentTab = tabs.selected;
        
        //adjust toggleStatus based on tab
        if (marriage.currentTab == 0) {
            toggle.disabled = true;
        }
        else {
            toggle.disabled = false;
        }
        marriage.adjustVars();//uses newly set fields to update namespace
        marriage.firstClick = false;//avoids loop to query calling
        drawVisualization();
    });
    
    //update changes from toggle switch
    toggle.addEventListener('core-change', function() {
        if (toggle.disabled == false) {
            marriage.toggleStatus = true;
        }
        else {
            marriage.toggleStatus = false;
        }
        if (toggle.checked) {
            marriage.toggleValue = true;
        }
        else {
            marriage.toggleValue = false;
        }
        
        marriage.adjustVars();//uses newly set fields to update namespace
        marriage.firstClick = false;//avoids loop to query calling
        drawVisualization();
    });
}

/**
 *adjustVars
 *
 *using the newly updated values from polymer,
 *adjust the marriage namespace variables to reflect
 **/
marriage.adjustVars = function () {
    if (marriage.currentTab == 0) {
        marriage.currentQuery = marriage.birthQuery;
        marriage.currentTitle = marriage.birthTitle;
        marriage.currentHorTitle = marriage.birthHor;
    }
    else if (marriage.currentTab == 1 && !marriage.toggleValue) {
        marriage.currentQuery = marriage.ageMQuery;
        marriage.currentTitle = marriage.ageTitle;
        marriage.currentHorTitle = marriage.ageHor;
    }
    else if (marriage.currentTab == 1 && marriage.toggleValue) {
        marriage.currentQuery = marriage.ageFQuery;
        marriage.currentTitle = marriage.ageTitle;
        marriage.currentHorTitle = marriage.ageHor;
    }
    else if (marriage.currentTab == 2 && !marriage.toggleValue) {
        marriage.currentQuery = marriage.eduMQuery;
        marriage.currentTitle = marriage.eduTitle;
        marriage.currentHorTitle = marriage.eduHor;
    }
    else if (marriage.currentTab == 2 && marriage.toggleValue) {
        marriage.currentQuery = marriage.eduFQuery;
        marriage.currentTitle = marriage.eduTitle;
        marriage.currentHorTitle = marriage.eduHor;
    }
}