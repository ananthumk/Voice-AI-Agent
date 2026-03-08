export function logLatency(start:number){

 const end = Date.now()

 console.log("Latency:",end-start,"ms")

}