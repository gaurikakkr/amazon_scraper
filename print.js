function formatReport(result){
        result.sort((a,b)=>{
            //aHits = parseInt(a[0], 10);
            //console.log(a[0])
            aHits = parseFloat(a[0].replace(/,/g, ''));
            bHits = parseFloat(b[0].replace(/,/g, ''));
            //console.log(aHits)
            return aHits - bHits
        })
        //return result
    for (let i = 0; i < result.length; i++) {
        console.log(`price: ${result[i][0]}, Name: ${result[i][1]}`);
        //console.log(`Name: ${result[i][1]}`)
    }
}
function sortResults(result){
    const Arr = Object.entries(result)
    result.sort((a,b)=>{
        aHits = parseInt(a[0], 10);
        bHits = parseInt(b[0], 10);
        //console.log(aHits)
        return aHits - bHits
    })
    return result
}

module.exports ={
   formatReport,
   sortResults
}