# Tracking fitness with data

### A basic data pipelines project to track fitness metrics using data from Strava and a digital Renpho scale.

<hr>

**PROJECT GOALS:** 

I'm training for a mountaineering trip and wanted to track my fitness metrics over the weeks leading up to the trip. Since I was running often and weighing myself daily I decided on tracking the following two things:

- Runs (recorded with the Strava app on my phone)
- Weight (recorded daily on a digital Renpho scale)

The goal was to simply see progress towards my goal evidenced in the data and to perhaps draw insights into exercise performance.

<hr>

**INITIAL PLAN:**

My initial intention was to set up a website that would provide up to date graphics on my current fitness goals progress. The website would have various graphs implemented with D3.js that would use data from a pocketbase database. With a regularly scheduled script the website would query APIs for recent Strava and Renpho data, and update the database as needed.

**Data flowchart:**

<img src="https://github.com/Pova/tracking-fitness-with-data/blob/main/data_pipeline_plan.jpeg" style="height:500px"></img>

**REVISED PLAN:**

In practice I found it difficult to fully automate authentication token system for the Strava API (which requires manual user authorization before allowing data to be queried). As a result the current repository has various semi-autonomous methods implemented... with the goal of finding a solution to this problem in the future (I've included my unsuccessful autonomous javascript programs in the repo).

I did successfully set up a website: [romankitsela.com](romankitsela.com) running on a Linode Ubuntu instance and connected it to a PocketBase database with the subdomain: [pb.romankitsela.com](pb.romankitsela.com) (unfortunately currently empty of data).

I was able to extract value from JSON data (received via Strava's API) in the form of visualizations found below but there is much to be done and I have an ambitious future state plan for this project - stay tuned!

<hr>

### This repository:

**Notebooks:**
- [Strava API Project](https://github.com/Pova/tracking-fitness-with-data/blob/main/Strava%20API%20project.ipynb) - Jupyter notebook to interact with the Strava API, extract data, clean data and perform some visualizations 
- [gpx_parse](https://github.com/Pova/tracking-fitness-with-data/blob/main/strava_gpx/gpx_parse.ipynb) - Jupyter notebook that parses .gpx data, outputs clean .csv files
- [gpx_graph](https://github.com/Pova/tracking-fitness-with-data/blob/main/strava_gpx/gpx_graph.ipynb) - Jupyter notebook with visualizations of running data (input: .csv data, output: graphs) 

**Data:**
- [strava_gpx_data](https://github.com/Pova/tracking-fitness-with-data/tree/main/strava_gpx/strava_gpx_data) - folder of .gpx files downloaded manually from Strava website (processed with gpx_parse)
- [Renpho-Roman](https://github.com/Pova/tracking-fitness-with-data/blob/main/Renpho-Roman.csv) - .csv file manually downloaded from iPhone app with scale data 

<hr>

## Visualizations

[Regents park running route](https://github.com/Pova/tracking-fitness-with-data/blob/main/running_route.png) **(Decoded polypath data and graphed with Folium)**

![image](https://github.com/Pova/tracking-fitness-with-data/assets/25727048/2b95c782-6dc5-460f-b71b-2ad6956c41af)

[running_pace_over_time](https://github.com/Pova/tracking-fitness-with-data/blob/main/strava_gpx/running_pace_over_time.png) **(Visualization created from raw .gpx format Strava data)**

![image](https://github.com/Pova/tracking-fitness-with-data/assets/25727048/3c25f828-a8a3-4612-be27-6d886a5b4483)

<hr>

### For those interested... the route I'm attempting:

![image](https://github.com/Pova/tracking-fitness-with-data/assets/25727048/618d4653-cd41-4bda-94da-97ec19387dc5)

<hr>
