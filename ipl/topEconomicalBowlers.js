function topEconomicalBowlers(deliveries){
    const result = {};
    const bowl = [];
    const run = [];
    for(let deliverie of deliveries){
        const bowler = deliverie.bowler;
        const match_id = deliverie.match_id;
        const total_runs = deliverie.total_runs;
        if(parseInt(match_id) > 517 && parseInt(match_id) < 577){
            // console.log(bowler);
            if(run[bowler]){
                run[bowler] += parseInt(total_runs);
            }else{
                run[bowler] = parseInt(total_runs);
            }

            if(bowl[bowler]){
                bowl[bowler] += 1;
            }else{
                bowl[bowler] = 1;
            }
        }
    }
    for(let b in bowl){
        // console.log(parseInt(bowl[b]/6)+"."+parseInt(bowl[b]%6));
        bowl[b] = parseFloat(parseInt(bowl[b]/6)+"."+parseInt(bowl[b]%6));
    }

    for(let r in run){
        // console.log(parseInt(run[r])/bowl[r]);
        result[r] = parseInt(run[r])/bowl[r];
    }

    // for(let res in result){
    //     console.log(result[res]);
    // }

    // console.log(Object.keys(result));
    

    console.log(result);

    // return run;
}

module.exports = topEconomicalBowlers;