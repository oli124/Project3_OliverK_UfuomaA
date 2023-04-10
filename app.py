import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://postgres:C%40ptainM!ng1918@localhost/population_db")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
Info = Base.classes.all_info

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################


@app.route("/")
def home():
    return render_template('index.html')

@app.route("/population_data")
def population():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of countries and their respective datapoints"""
    # Query 
      
    info_query = session.query(
        Info.country_name,
        Info.country_code,
        Info.population_pct_change,
        Info.net_migration_pct_of_pop,
        Info.avg_birth_rate_per1000,
        Info.longevity_pct_change,
        Info.gdp_pct_change,
        Info.capital,
        Info.continent,
        Info.population_2020,
        Info.population_1990,
        Info.area_km2,
        Info.density_per_km2,
        Info.world_population_pct).all()

    # Reformat into list
    # pop_query_list = list(pop_query)

    session.close()

    # Return results in JSON format  
    data_list = [{
        'country_name': i.country_name,
        'country_code': i.country_code,
        'population_change': i.population_pct_change,
        'net_migration': i.net_migration_pct_of_pop,
        'mean_natural_birth_rate': i.avg_birth_rate_per1000,
        'longevity_change': i.longevity_pct_change,
        'gdp_change': i.gdp_pct_change,
        'capital': i.capital,
        'continent': i.continent,
        'population_2020': i.population_2020,
        'population_1990': i.population_1990,
        'area_km2': i.area_km2,
        'density_per_km2': i.density_per_km2,
        'world_population_pct': i.world_population_pct
        } for i in info_query]
    
    return jsonify(data_list)


if __name__ == '__main__':
    app.run(debug=True)


