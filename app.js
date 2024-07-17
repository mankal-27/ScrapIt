// Importing the NPM packages that we installed
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// Function starts here
async function getFormulaOneDrivers() {
  try {
    // Fetch data from URL and store the response into a const
    const response = await fetch('https://www.formula1.com/en/drivers.html');
    // Convert the response into text
    const body = await response.text();
    
    // Load body data
    const $ = cheerio.load(body);
    
    // Selecting Each col-12 class name and iterate through the list
    console.log(body);
      
    
  } catch (error) {
    console.log(error);
  }
}

// Run getFormulaOneDrivers
getFormulaOneDrivers();