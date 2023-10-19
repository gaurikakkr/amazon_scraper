const { JSDOM } = require('jsdom')
const axios = require('axios')

async function getHTML(str){
    const amazonUrl = 'https://www.amazon.in/s?k='+str;

      try {
        const response = await axios.get(amazonUrl);
        // HTML content of the Amazon.com homepage as a string
        const htmlString = response.data;
        return htmlString;
      } catch (error) {
        console.error('Error fetching Amazon.com:', error);
        return null; // Handle the error as needed
      }
 }

module.exports ={
    getHTML
}