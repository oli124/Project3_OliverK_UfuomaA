CREATE TABLE population(
	country_name VARCHAR(50) NOT NULL,
	country_code VARCHAR(50) NOT NULL PRIMARY KEY,
	population_change FLOAT(50) NOT NULL,
	net_migration FLOAT(50) NOT NULL,
	mean_natural_birth_rate FLOAT(50) NOT NULL,
	longevity_change FLOAT(50) NOT NULL,
	gdp_change FLOAT(50) NOT NULL
);

SELECT * FROM population;