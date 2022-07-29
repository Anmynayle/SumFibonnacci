



 const fibonacci = limit =>{

    let arr= [0,1];
    let posicion = 0;
    let arrPar=[];
    let sum =0;

    
   
    for (let i = 0;i<limit; i++){
        elemtFibo=arr[posicion]+arr[posicion+1]
           if(elemtFibo<=limit){
              arr.push(elemtFibo)
              posicion++;
        }

}
return arr
}
console.log(fibonacci(10))