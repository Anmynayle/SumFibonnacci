const fiboPar = limit => {

    let arr=[0,1];
    let posicion =0;
    let elemtFibo=0;
    let arrPare=[];
    let total=0;
    
   for (let i = 0;i<limit; i++){
    elemtFibo=arr[posicion]+arr[posicion+1]
       if(elemtFibo<=limit){
          arr.push(elemtFibo)
          posicion++;
       }
    }
    for(let j of arr){ //recorro el arreglo

        if (j<=limit){ //los elementos del arreglo no pueden mayores al limit
            if(j%2==0){ //los elementos del arreglo deben ser pares
               let total= (j + total)
                
            }
        }
       
    }
  return arrPare
}

console.log(fiboPar(10))

