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
    
    // Create trace for first scatter: population growth rate vs. gdp growth rate
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

})