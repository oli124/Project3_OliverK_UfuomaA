CREATE TABLE population(
	country_code VARCHAR(50) NOT NULL,
	country_name VARCHAR(50) NOT NULL PRIMARY KEY,
	population_pct_change FLOAT(50) NOT NULL,
	net_migration_pct_of_pop FLOAT(50) NOT NULL,
	avg_birth_rate_per1000 FLOAT(50) NOT NULL,
	longevity_pct_change FLOAT(50) NOT NULL,
	gdp_pct_change FLOAT(50) NOT NULL
);

SELECT * FROM population;