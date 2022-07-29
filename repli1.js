



 const fibonacci = limit =>{

 let arr= [0,1]
 let posicion = 0;
 let arrPar=[]
 

 for (let i=0; i<=limit; i++){
     let sum = (arr[posicion]+arr[posicion +1 ])
     if (sum < limit){
        arr.push(sum) 
        posicion++;
    }
    for(let  j=0; j<=arr.length; j++){  
        if(j%2==0){
          arrPar.push(j)
      }

   }

  return arrPar
}

console.log(fibonacci(10))

const funtionFibbonachi = limit => {

  let startInit = -1
  let lastEnd = 1
  let sum = startInit + lastEnd
  let par = Array()

  const arrayFibbonacci = Array()
  //Generame numeros matematicamente que no se sobrepase del limite
  for (let i = 0;i<=limit; i++) {
      arrayFibbonacci.push(sum)
      startInit = lastEnd
      lastEnd = sum
      sum= startInit+lastEnd
  }
  console.log(arrayFibbonacci)
  // con los numeros generados no te pases del limite 
  for (let j of arrayFibbonacci){
      if(j<=limit){ //si el numero es menor pasalo a comparacion par o impor 
          if(j%2 === 0){ /// comparo
              par.push(j) //mando
          }
      }   
  }
  return par

};


console.log(funtionFibbonachi(10))
