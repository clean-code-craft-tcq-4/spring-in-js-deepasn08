module.exports=function getStatistics(numbers){
    let stats = {
        "average": 0;
        "min": 0;
        "max": 0;
    }
    
    //if input array is empty
    if(!numbers.length){
        stats = {
            "average": NaN;
            "min": NaN;
            "max": NaN;
        }
    }
    
    //if input array containes some values
    if(numbers.length){
        let avg = 0;
        let min = 0;
        let max = 0;
        numbers.forEach( () => {})
    }
    
    return stats
    
}

