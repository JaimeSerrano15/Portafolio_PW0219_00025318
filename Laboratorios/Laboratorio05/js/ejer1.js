function analisis(a){
    let n=0,s=0,b=0,u=0,o=0;
    for(let i=0; i<a.length; i++){
        switch(typeof a[i]){
            case "number": n++; break;
            case "string": s++; break;
            case "boolean": b++; break;
            case "undefined": u++; break;
            case "object": o++; break;
        }
    }
    console.log("number: " + n + " string; " + s + " boolean: " + b + " undefined: " + u + " object: " + o);
}