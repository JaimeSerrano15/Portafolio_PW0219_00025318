function ocurrencia(a,b){
    let num = 0;
    for(let i=0; i<b.length;i++){
        if(a == b[i]){
            num++;
        }
    }
    console.log("El número " + a + " aparece " + num + " veces en el arreglo");
}