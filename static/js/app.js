// let spearson = require("../../lib/spearson.js");
// import spearson from "../../lib/spearson.js";
// let Statistics = require("../../lib/statistics.js");
// import Statistics from '../../lib/statistics.js';

d3.json('/population_data').then(function(data) {
    console.log(data);

    // Define variables to trace datapoints
    let country_codes = data.map(x => x.country_code);
    let country_names = data.map(x => x.country_name);    
    let gdp = data.map(x => x.gdp_change);    
    let longevity = data.map(x => x.longevity_change);    
    let birth_rates = data.map(x => x.mean_natural_birth_rate);    
    let net_mig = data.map(x => x.net_migration);    
    let population = data.map(x => x.population_change);
    
    // Create traces for scatters
    let trace1 = {
        x: gdp,
        y: population,
        mode: 'markers',
        type: 'scatter',
        text: country_names
    }
    
    let trace2 = {
        x: gdp,
        y: net_mig,
        mode: 'markers',
        type: 'scatter',
        text: country_names
    }
    
    let trace3 = {
        x: gdp,
        y: birth_rates,
        mode: 'markers',
        type: 'scatter',
        text: country_names
    }
    
    let trace4 = {
        x: gdp,
        y: longevity,
        mode: 'markers',
        type: 'scatter',
        text: country_names
    }


    // Data trace arrays
    let traceDataOne = [trace1];
    let traceDataTwo = [trace2];
    let traceDataThree = [trace3];
    let traceDataFour = [trace4];

    // Implement layout features
    let layout1 = {
        title: 'Population Growth vs. GDP Growth (1990-2019)',
        xaxis: {title: 'GDP growth (%, USD)'},
        yaxis: {title: 'Population growth (%)'}
    }

    let layout2 = {
        title: 'Net Migration vs. GDP Growth (1990-2019)',
        xaxis: {title: 'GDP growth (%, USD)'},
        yaxis: {title: 'Net migration (% of population)'}
    }

    let layout3 = {
        title: 'Natural Birth Rate vs. GDP Growth (1990-2019)',
        xaxis: {title: 'GDP growth (%, USD)'},
        yaxis: {title: 'Avg birth rate (per 1000)'}
    }

    let layout4 = {
        title: 'Change in Life Expectancy (aka. Longevity) vs. GDP Growth (1990-2019)',
        xaxis: {title: 'GDP growth (%, USD)'},
        yaxis: {title: 'Life expectancy (% change)'}
    }
  
    // Render the plots to theier relevant div tags
    Plotly.newPlot("scatter_1", traceDataOne, layout1);
    Plotly.newPlot("scatter_2", traceDataTwo, layout2);
    Plotly.newPlot("scatter_3", traceDataThree, layout3);
    Plotly.newPlot("scatter_4", traceDataFour, layout4);


    // // Calculate and define correlations for 4 traces
    // let corrOne = spearson.correlation.pearson(gdp, population);
    // let corrTwo = spearson.correlation.pearson(gdp, net_mig);
    // let corrThree = spearson.correlation.pearson(gdp, birth_rates);
    // let corrFour = spearson.correlation.pearson(gdp, longevity);

    // // Append correlation values to div buckets
    // d3.select("corr_1").text(`Correlation: ${corrOne}`);
    // d3.select("corr_2").text(`Correlation: ${corrTwo}`);
    // d3.select("corr_3").text(`Correlation: ${corrThree}`);
    // d3.select("corr_4").text(`Correlation: ${corrFour}`);

});

    

// Create function that establishes initial country selection
function init(){
    // Read in JSON data
    d3.json('/population_data').then(function(data) {
     
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    
    // Create variables that trace data points to be used
    let all_countries = data.country_name;
    // let value = all_names;
    
    // Run for loop to append sample id's to dropdown list
    for (i=0; i<data.length; i++){
      dropdownMenu.append("option")
      .text(all_countries[i])
      .property("value", all_countries[i]);
  
    };
    // Generate country info window with the first country in the dataset
    demographicInfo(value);
  });
  }
  
  // Call init function so that dashboard presents data when first visited
  init();
  
  // Create function that is called when a new dropdown menu item is selected
  function optionChanged(newSample) {
    // createPlots();
    demographicInfo(newSample);
  }
  
  
    // Create function that generates data for country info window
    function demographicInfo(sample){
      // Read in JSON data
      d3.json('/population_data').then(function(data) {
      
      // Create variables that trace data points to be used
      let metaData = data.metadata;
      // Use filter to set country selection
      let selection = data.filter(selectCountry => selectCountry.country_name == sample);
      let selectionOne = selection[0];
    
      // Select and clear contents of demographic info window (prior to repopulating)
      let countryInput = d3.select("#sample-metadata");
      countryInput.html("");
        
      // Run for loop that appends key and object datapoints of selected sample id
      for (key in selectionOne){
        metaInput.append("h6")
        .text(`${key}: ${selectionOne[key]}`);
      };
    
      });
    }