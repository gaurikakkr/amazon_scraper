const { JSDOM } = require('jsdom')
//const cheerio = require('cheerio')
const { getHTML } = require('./htmlExtract.js')
const { formatReport } = require('./print.js')
const axios = require('axios')
async function main(){
      let str1 = process.argv[2]
      let str = str1.replace(/ /g, "+")
      const htmlBody = await getHTML(str);
      if (htmlBody === null) {
        // You now have the HTML content of Amazon.com stored in the amazonHTML variable
        return
      }
      const dom = new JSDOM(htmlBody)
      const element = dom.window.document.querySelectorAll('div')
      const result = []
      let i = 0
      for( e of element ){
          const attributeValue = e.getAttribute('data-component-type')
          if(attributeValue === "s-search-result"){
              //console.log(attributeValue)
              result[i] = []
              const priceSymbol = e.querySelector('.a-price .a-price-symbol').textContent;
              const priceValue = e.querySelector('.a-price .a-price-whole').textContent;
              //console.log(priceValue)
              if(priceValue > 0 && priceValue[priceValue.length-1] === '.'){
                const p = priceValue.slice(0,-1)
                //console.log(priceValue[priceValue.length-1])
                result[i][0] = p
              }
              //const price = `${priceValue}`;
              else{
                result[i][0] = priceValue
               }
              //console.log(result[i][0])
              const productName = e.querySelector('.a-size-base-plus.a-color-base.a-text-normal').textContent.trim();
              //console.log(productName);
              result[i][1] = productName
              //console.log(result[i][1])
              const productLink = e.querySelector('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').getAttribute('href');
              //console.log(productLink);
              result[i][2] = productLink
              //console.log(result[i][2])
              i = i+1
          }

      }
      formatReport(result)
      //console.log(result)
}
main()