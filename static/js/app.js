d3.json('/population_data').then(function(data) {
    console.log(data);

    let countries = data.map(x => x.country_name);
    console.log(countries);

})