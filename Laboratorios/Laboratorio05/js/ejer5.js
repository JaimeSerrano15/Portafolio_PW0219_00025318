function palindromo(pal){
    for(let i=0; i<pal.length;i++){
        if(pal[i] != pal[pal.length-1-i]){
            console.log("No es palindromo");
            return;
        }
    }
    console.log("Es palindromo");
}