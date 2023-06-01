# Tracking fitness with data

### A basic data pipelines project to track fitness metrics using data from Strava and a digital Renpho scale.

<hr>

**PROJECT GOALS:** 

I'm training for a mountaineering trip and wanted to track my fitness metrics over the weeks leading up to the trip. Since I was running often and weighing myself daily I decided on tracking the following two things:

- Runs (recorded with the Strava app on my phone)
- Weight (recorded daily on a digital Renpho scale)

<hr>

**INITIAL PLAN:**

My initial intention was to host a website that would provide up to date graphics on my current fitness goals progress. The website would have various graphs implemented with D3.js that would use data from a pocketbase database. With a regularly scheduled script the website would query APIs for recent Strava and Renpho data, and update the database as needed.

[Data pipelines flowchart here]

In practice I found it difficult to fully automate authentication token system for the Strava API (which requires manual user authorization before allowing data to be queried). As a result the current repository has various semi-autonomous methods implemented with the goal of finding a solution to this problem in the future (I've included my unsuccessful autonomous javascript programs in the repo)

<hr>

### This repository:

**Notebooks:**
- [Strava API Project](https://github.com/Pova/tracking-fitness-with-data/blob/main/Strava%20API%20project.ipynb) - Jupyter notebook to interact with the Strava API, extract data, clean data and perform some visualizations 
- [gpx_parse]() - Jupyter notebook that parses .gpx data, outputs clean .csv files
- [gpx_graph]() - Jupyter notebook with visualizations of running data (input: .csv data, output: graphs) 

**Data:**
- [strava_gpx_data]() - folder of .gpx files downloaded manually from Strava website (processed with gpx_parse)
- [Renpho-Roman]() - .csv file manually downloaded from iPhone app with scale data 

<hr>

## Visualizations

[Regents park running route]() 

![image](https://github.com/Pova/tracking-fitness-with-data/assets/25727048/2b95c782-6dc5-460f-b71b-2ad6956c41af)

[running_pace_over_time]()

![image](https://github.com/Pova/tracking-fitness-with-data/assets/25727048/3c25f828-a8a3-4612-be27-6d886a5b4483)

<hr>

### The route:

![image](https://github.com/Pova/tracking-fitness-with-data/assets/25727048/618d4653-cd41-4bda-94da-97ec19387dc5)

<hr>
