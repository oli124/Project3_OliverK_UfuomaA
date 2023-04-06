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
Population = Base.classes.population

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
      
    pop_query = session.query(
        Population.country_name,
        Population.country_code,
        Population.population_change,
        Population.net_migration,
        Population.mean_natural_birth_rate,
        Population.longevity_change,
        Population.gdp_change).all()

    # Reformat into list
    # pop_query_list = list(pop_query)

    session.close()

    # Return results in JSON format  
    data_list = [{
        'country_name': i.country_name,
        'country_code': i.country_code,
        'population_change': i.population_change,
        'net_migration': i.net_migration,
        'mean_natural_birth_rate': i.mean_natural_birth_rate,
        'longevity_change': i.longevity_change,
        'gdp_change': i.gdp_change}
        for i in pop_query]
    
    return jsonify(data_list)


if __name__ == '__main__':
    app.run(debug=True)


