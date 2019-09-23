function suma(a){
    let sum = 0;
    for(let i=0;i<a.length;i++){
        sum += a[i];
    }
    console.log("La suma de los datos del arrelgo es: " + sum);
    console.log("El promedio de los datos del arreglo es: " + (sum/a.length));
}