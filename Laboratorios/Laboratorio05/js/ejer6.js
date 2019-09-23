function ordenar(a){
    let aux=0;
    for(let i=0;i<a.length;i++){
        for(let j=0; j < a.length; j++){
            if(a[i] <= a[j]){
                aux = a[j];
                a[j] = a[i];
                a[i] = aux;
            }
        }
    }
    for(let i=0; i<a.length;i++){
        console.log(a[i]);
    }
}