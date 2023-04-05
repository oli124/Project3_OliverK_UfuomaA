# Project3_OliverK_UfuomaA
Is population growth a key driver of economic growth?

Group members: Oliver King and Ufuoma Atakere

We propose to analyse the long-term relationship between a range of countries’ population growth rates and their economic growth rates to determine whether there is a statistically significant relationship.
Furthermore, we will break down population growth into its key drivers (net migration, natural birth rates, and longevity) and determine whether any of these key drivers have a statistically significant relationship with a country’s economic growth rate.
In order to communicate this to viewers, we will create a dashboard with multiple charts that update from the various datasets.
In order to collect the relevant data and create the relevant visualisations:
- We will use a Python Flask-powered API during the data gathering process.
- We will store this data in a database such as SQL, MongoDB, SQLite, or similar.
- We will use HTML/CSS and JavaScript.

After viewing our dashboard, a viewer should have a firm understanding firstly of whether, overall, a country’s population growth, or its key drivers, has a significant impact on that same country’s economic growth rate. A viewer will also be able to look into the population growth rate, the key drivers of population growth rate, and the economic growth rate for any country in the dataset.

We will use 30 years of data (1990 - 2019 inclusive). (Want to exclude covid impact - this is bias, but is it justifiable?)

Criteria for a country's inclusion in the analysis:
1. Country population > 500,000
2. Country has data points for all indicators and all years (i.e. no nulls)

Dataset used: World Bank (https://data.worldbank.org/)

Indicators to be used:
1. Economic growth:
    - Indicator Name: GDP
    - Indicator Code: NY.GDP.MKTP.CD
2. Total population:
    - Indicator Name: Population, total
    - Indicator Code: SP.POP.TOTL
3. Net migration:
    - Indicator Name: Net migration
    - Indicator Code: SM.POP.NETM
4. Natural birth rate:
    - Indicator Name: Birth rate, crude (per 1000 people)
    - Indicator Code: SP.DYN.CBRT.IN
5. Longevity:
    - Indicator Name: Life expectancy at birth, total (years)
    - Indicator Code: SP.DYN.LE00.IN

Visualisations to be included:
1. Mean population growth rate vs. mean economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth
    - y-axis: Population growth (annual %)
2. Mean net migration rate vs. mean economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth
    - y-axis (Net migration) / (Population, total)
3. Mean natural birth rate vs. mean economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth
    - y-axis: (Birth rate, crude (per 1000 people)) / (Population, total)
4. Mean growth in longevity vs. mean economic growth rate over test period, per country, using scatter plot.
    - x-axis: GDP growth 
    - y-axis: Life expectancy at birth, total (years) [year-on-year % change]
5. Population growth summary table for a range of countries, including for each country:
    - mean population growth rate
    - mean net migration rate
    - mean natural birth rate
    - mean life expectancy
    - mean economic growth rate
    with a drop-down list to allow the user to select a country they would like to view the data of.

Correlations:
For each of the four scatter plots, we will calculate the correlation of the x-axis and y-axis data. These correlation values will be a key measure of each of the population indicator's ability to explain the variation in, or level of, GDP growth.