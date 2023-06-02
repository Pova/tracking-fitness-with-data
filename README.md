# Tracking fitness with data

## A basic data pipelines project to track fitness metrics using data from Strava and a digital Renpho scale.

<hr>

**PROJECT GOALS:** 

I'm training for a mountaineering trip and wanted to track my fitness metrics over the weeks leading up to the trip. Since I was running often and weighing myself daily I decided on tracking the following two things:

- Runs (recorded with the Strava app on my phone)
- Weight (recorded daily on a digital Renpho scale)

The goal was to simply see progress towards my goal (evidenced in the data) and to perhaps draw insights into exercise performance.

<hr>

**INITIAL PLAN:**

Set up a dynamic and responsive website that would provide up to date visualizations on my current fitness goals progress. For the backend set up a database with PocketBase that regularly updates with scheduled queries to APIs for Strava (cardio workouts) and Renpho (digital scale) data. The website would be hosted on a linux server that runs regular scripts to keep the database up to date with the most recent data. 

**Data flowchart:**

<img src="https://github.com/Pova/tracking-fitness-with-data/blob/main/data_pipeline_plan.jpeg" style="height:500px"></img>

**The Issues:**

- Strava: The website updated their API token methods in 2018 and so in practice I found it difficult to fully automate token authentication for the Strava API (which requires *manual* user authorization before allowing data to be requested from their servers).
- Renpho: The only available API for the digital scale was too expensive to purchase so not an option.

**REVISED PLAN:**

*Step 1 (Data Extraction):*

For Strava: deliver a semi-autonomous method for querying data that requires a single personal authentication at the start of the workflow... with the goal of finding a solution to this problem in the future (**NOTE**: I've included my unsuccessful autonomous javascript programs in the repo). In addition downloading raw .gpx data for runs directly from Strava website.

For Renpho: download .csv data manually at regular intervals.

*Step 2 (Data Transformation):*

Clean, filter and augment the raw data into more useful and usable formats.

*Step 3 (Data Loading):*

Upload clean data to the PocketBase database connected to the website.

<hr>

### This repository:

**Notebooks (in python):**
- [Strava API Project](https://github.com/Pova/tracking-fitness-with-data/blob/main/Strava%20API%20project.ipynb) - Jupyter notebook to interact with the Strava API, extract data, clean data and perform some visualizations 
- [gpx_parse](https://github.com/Pova/tracking-fitness-with-data/blob/main/strava_gpx/gpx_parse.ipynb) - Jupyter notebook that parses .gpx data, outputs clean .csv files
- [gpx_graph](https://github.com/Pova/tracking-fitness-with-data/blob/main/strava_gpx/gpx_graph.ipynb) - Jupyter notebook with visualizations of running data cleanted with gpx_parse

**JS:**
- [Renpho_upload](https://github.com/Pova/tracking-fitness-with-data/blob/main/renpho_upload.js) - Javascript script to load up the PocketBase database with Renpho data

**Data:**
- [strava_gpx_data](https://github.com/Pova/tracking-fitness-with-data/tree/main/strava_gpx/strava_gpx_data) - folder of .gpx files downloaded manually from Strava website (processed with gpx_parse)
- [Renpho-Roman](https://github.com/Pova/tracking-fitness-with-data/blob/main/Renpho-Roman.csv) - .csv file manually downloaded from iPhone app with scale data 

<hr>

**Results:**

- Successfully set up a website: [romankitsela.com](romankitsela.com) running on a Linode Ubuntu instance
- Connect the website to a PocketBase database with the subdomain: [pb.romankitsela.com](pb.romankitsela.com) (loaded with weight data from Renpho)

<img width="1330" alt="Screenshot 2023-06-01 at 12 56 19" src="https://github.com/Pova/tracking-fitness-with-data/assets/25727048/23df601e-f315-4f14-8f79-0f2ef57c5125">

- Download data from Strava (in 2 different ways) and Renpho
- Transform JSON from the Strava API and .gpx data into more useful and usable formats (.csv files) 
- Extract value from these in the form of visualizations (**examples below**)

<hr>

### Future state:

There is much to be done and I have an ambitious future state plan for this project:

- If possible implement a self-updating me Strava data (if this is possible given the current API constraints)

- Integrate other forms data (*possible ideas:* calories per day, macronutrient breakdown, sleep quality, ...)

- Interactive Visualisations on main webpage (implemented with React and D3):

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
