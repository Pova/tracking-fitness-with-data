// csv file path
const file = 'Renpho-Roman.csv'

// Importing
import Papa from 'papaparse';
import fs from 'fs/promises';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pb.romankitsela.com');

// Async function to read and process the file
async function processFile() {
    try {
        const csvData = await fs.readFile(file, 'utf8');
            
        // Parsing the CSV data
        const parseResult = Papa.parse(csvData, {
            header: true,  // Consider first row as header
            skipEmptyLines: true, // Skip empty lines
        });

        // 4. Create data objects and save them to the database
        for (let row of parseResult.data) {
            const data = {
                time: row['Time of Measurement'],
                weight: row['Weight(kg)'],
                bmi: row['BMI'],
                body_fat: row['Body Fat(%)'],
                fat_free_body_weight: row['Fat-free Body Weight(kg)'],
                sub_fat: row['Subcutaneous Fat(%)'],
                vis_fat: row['Visceral Fat'],
                body_water: row['Body Water(%)'],
                skeletal_muscle: row['Skeletal Muscle(%)'],
                muscle_mass: row['Muscle Mass(kg)'],
                bone_mass: row['Bone Mass(kg)'],
                protein_percent: row['Protein(%)'],
                BMR: row['BMR(kcal)'],
                metabolic_age: row['Metabolic Age'],
                remarks: row['Remarks']
            };
            
            // Save the data object in the PocketBase db.
            const record = await pb.collection('renpho_data').create(data);
        }
        } catch (err){
            console.log('Error: ', err);
        }
    }

processFile();