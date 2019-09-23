function fibo(n){
    let a=0, b=1, aux=0;
    console.log(a);
    console.log(b);
    aux = a+b;
    for(let i=0;i<n-1;i++){
        b = aux;
        console.log(b);
        aux = a+b;
        a = b;
    }
}