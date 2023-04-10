CREATE TABLE all_info(
	country_code VARCHAR(50) NOT NULL,
	country_name VARCHAR(50) NOT NULL PRIMARY KEY,
	population_pct_change FLOAT(50) NOT NULL,
	net_migration_pct_of_pop FLOAT(50) NOT NULL,
	avg_birth_rate_per1000 FLOAT(50) NOT NULL,
	longevity_pct_change FLOAT(50) NOT NULL,
	gdp_pct_change FLOAT(50) NOT NULL,
	capital VARCHAR(50) NOT NULL,
	continent VARCHAR(50) NOT NULL,
	population_2020 FLOAT(50) NOT NULL,
	population_1990 FLOAT(50) NOT NULL,
	area_km2 FLOAT(50) NOT NULL,
	density_per_km2 FLOAT(50) NOT NULL,
	world_population_pct FLOAT(50) NOT NULL
);

SELECT * FROM all_info;