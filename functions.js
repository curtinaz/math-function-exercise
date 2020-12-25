let funcoes = {

    
    a: 0,
    b: 0,
    X1: 0,
    Y1: 0,
    X2: 0,
    Y2: 0,

    isitValid(){

        X1 = document.querySelector('#x1').value
        Y1 = document.querySelector('#y1').value
    
        X2 = document.querySelector('#x2').value
        Y2 = document.querySelector('#y2').value

        if (x1.length == 0) {
            window.alert ("Você deve preencher o valor de x1")
        } else if (X2.length == 0) {
            window.alert ("Você deve preencher o valor de x2")
        }
        else if (Y1.length == 0) {
            window.alert ("Você deve preencher o valor de y1")
        }
        else if (Y2.length == 0) {
            window.alert ("Você deve preencher o valor de y2")
        } else {
            defineFunc()
        }
    },
    
    defineFunc(){
    
        X1 = document.querySelector('#x1').value
        Y1 = document.querySelector('#y1').value
    
        X2 = document.querySelector('#x2').value
        Y2 = document.querySelector('#y2').value
    
    
        a = (Y2 - Y1) / (X2 - X1);
    
        b = (Y1 * X2) - (Y2 * X1) / (X2 - X1);
    
        document.querySelector('#func').innerHTML = `<p>F(x) = ${a}.x + ${b}</p>`;
        document.querySelector('#funclabel').style = "display:block;"
    
    }

}

