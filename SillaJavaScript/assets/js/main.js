


function generarSilla() {
    var altura = document.getElementById("altura").value;
    if (altura.length === 0){
        alert("No ha introducido ninguna altura");
    } else if (isNaN(altura)) {
        alert("No es un numero , porfavor , introduce un numero")
    } else{


        var arbol = "";
        for (let i = 0; i < altura; i++) {
            if (i<(altura/2)){
                arbol+="*";
            } else if (i>(altura/2)){
                for (let j=0;j<altura;j++){
                    if (j==0 || j==(altura-1)){
                        arbol+="*"
                    } else{
                        arbol+=" ";
                    }
                }
            } else {
                for (let j=0;j<altura;j++){
                    //console.log("*");
                    arbol+="*";
                }
            }
            arbol+="\n";
        }

        var arbolito = document.createElement("TEXTAREA");
        var textoArbolito = document.createTextNode(arbol);
        arbolito.appendChild(textoArbolito);
        var tabla = document.getElementById("silla");
        tabla.appendChild(arbolito);

    }
}

