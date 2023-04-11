# Project3_OliverK_UfuomaA
Is population growth a key driver of economic growth?

Group members: Oliver King and Ufuoma Atakere

We propose to analyse the long-term relationship between a range of countries’ population growth rates and their economic growth rates to determine whether there is a statistically significant relationship.
Furthermore, we will break down population growth into its key demographic drivers (net migration, natural birth rates, and longevity) and determine whether any of these key drivers have a statistically significant relationship with a country’s economic growth rate.
In order to communicate this to viewers, we will create a dashboard with multiple charts that update from the various datasets.
In order to collect the relevant data and create the relevant visualisations:
- We will store this data in a SQL database.
- We will use a Python Flask-powered API to read the database and convert it to JSON format.
- We will use HTML and JavaScript to drive the visualisations in a browser.

After viewing our dashboard, a viewer should have a firm understanding firstly of whether, overall, a country’s population growth or its key demographic drivers have a significant relationship with a country’s economic growth rate. A viewer will also be able to look at various information datapoints for individual countries via selection from a dropdown list.

We will use 30 years of data (1990 - 2019 inclusive). (Want to exclude covid impact - this is bias, but is it justifiable?)

Criteria for a country's inclusion in the analysis:
1. Country population > 500,000
2. Country has data points for all indicators and all years (i.e. no nulls)

Dataset used: World Bank (https://data.worldbank.org/)

Indicators to be used:
1. Economic growth:
    - Indicator Name: GDP
    - Indicator Code: NY.GDP.MKTP.CD
    - 'resources/gdp.csv'
2. Total population:
    - Indicator Name: Population, total
    - Indicator Code: SP.POP.TOTL
    - 'resources/population.csv'
3. Net migration:
    - Indicator Name: Net migration
    - Indicator Code: SM.POP.NETM
    - 'resources/net_migration.csv'
4. Natural birth rate:
    - Indicator Name: Birth rate, crude (per 1000 people)
    - Indicator Code: SP.DYN.CBRT.IN
    - 'resources/birth_rate.csv'
5. Longevity:
    - Indicator Name: Life expectancy at birth, total (years)
    - Indicator Code: SP.DYN.LE00.IN
    - 'resources/life_expectancy.csv'
6. General Population Information:
    - 'resources/world_population.csv'

Visualisations to be included:
1. Population growth rate vs. Economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth (total %)
    - y-axis: Population growth (total %)
2. Net migration vs. Economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth (total %)
    - y-axis (Net migration) / (Population, total)
3. Avg natural birth rate vs. Economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth (total %)
    - y-axis: Birth rate, crude (per 1000 people)
4. Growth in longevity vs. mean economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth (total %)
    - y-axis: Life expectancy at birth, total (years) [growth over period]
5. Population growth summary table for a range of countries, including for each country:
    - Country Code
    - Country Name
    - Population change(%)
    - Net Migration (% of population)
    - Avg Birth Rate (per 1000)
    - Life expectancy change(%)
    - GDP change(%)
    - Capital
    - Continent
    - 2020 Population
    - 1990 Population
    - Area (km²)
    - Density (per km²)
    - World Population Percentage
    with a drop-down list to allow the user to select a country they would like to view the data of.

Correlations:
For each of the four scatter plots, we will calculate the correlation of the x-axis and y-axis data. These correlation values will be a key measure of each of the population indicator's ability to explain the variation in, or level of, GDP growth.

Database:
- PostgreSQL database: 'population_db.sql'

Flask API:
- Routes:
    - Home route: "http://127.0.0.1:5000/"
    - JSON population data display route: "http://127.0.0.1:5000/population_data"

Powerpoint Presentation:
- For presentation to class on 11/4/2023
- 'Project 3 Oliver King and Ufuoma Atakere-ufilolo.pptx'

JavaScript/HTML/Dashboard:
- Libraries used: d3 and Plotly
- Mouse-over scatter plot markers to reveal country name, x-value & y-value of each datapoint.
- Select country name from drop down list to populate information table with country information. 

Libraries:
1. 'lib/spearson.js'
2. 'lib/statistics.js'
3. 'lib/statistics.min.js'
    - These libraries were not integrated into the project in the end as a simpler solution for calculating the correlations was discovered.
