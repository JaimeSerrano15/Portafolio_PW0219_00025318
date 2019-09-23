function area(){
    let r = window.prompt("Digite el radio");
    if(r <= 0){
        return -1
    }
    else{
        let res = (Math.PI)*(r)*(r);
        return res;
    }

    

}