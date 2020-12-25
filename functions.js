let funcoes = {

    
    a: 0,
    b: 0,
    X1: 0,
    Y1: 0,
    X2: 0,
    Y2: 0,
    haveFunc: false,
    
    defineFunc(){
    
        X1 = document.querySelector('#x1').value
        Y1 = document.querySelector('#y1').value
    
        X2 = document.querySelector('#x2').value
        Y2 = document.querySelector('#y2').value
    
    
        a = (Y2 - Y1) / (X2 - X1);
    
        b = (Y1 * X2) - (Y2 * X1) / (X2 - X1);
    
        document.querySelector('#func').innerHTML = `<p>F(x) = ${a}.x + ${b}</p>`;
        document.querySelector('#funclabel').style = "display:block;"
        document.querySelector('#part2').style = "display:block;"

        haveFunc = true;
    
    },

    isitValid(){

        X1 = document.querySelector('#x1').value
        Y1 = document.querySelector('#y1').value
    
        X2 = document.querySelector('#x2').value
        Y2 = document.querySelector('#y2').value

        if (X1.length == 0) {
            window.alert ("Você deve preencher o valor de x1")
        } else if (X2.length == 0) {
            window.alert ("Você deve preencher o valor de x2")
        }
        else if (Y1.length == 0) {
            window.alert ("Você deve preencher o valor de y1")
        }
        else if (Y2.length == 0) {
            window.alert ("Você deve preencher o valor de y2")
        } else if (X1 == X2) {
            window.alert ("O x1 não pode ser igual ao x2")
        } else {
            funcoes.defineFunc()
        }
    },

    newX(){
        if( haveFunc == true){

            let Y = document.querySelector('#y').value
            let X = (Y - b) / a;
            
            document.querySelector('#newX').innerHTML = `<p> Valor de X é: ${X}</p>`;

        } else {
            window.alert('Você ainda não definiu uma função')
        }
    
    },

    newY(){
        if( haveFunc == true){

            let X = document.querySelector('#x').value
            let Y = (a * X) + b;
            
            document.querySelector('#newY').innerHTML = `<p> Valor de Y é: ${Y}</p>`;

        } else {
            window.alert('Você ainda não definiu uma função')
        }
    
    }

}

