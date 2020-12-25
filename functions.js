let funcoes = {

    
    a : 0,
    b : 0,
    X1: 0,
    Y1: 0,
    X2: 0,
    Y2: 0,
    
    defineFunc(){
    
        X1 = document.querySelector('#x1').value
        Y1 = document.querySelector('#y1').value
    
        X2 = document.querySelector('#x2').value
        Y2 = document.querySelector('#y2').value
    
    
        a = (Y2 - Y1) / (X2 - X1);
    
        b = (Y1 * X2) - (Y2 * X1) / (X2 - X1);
    
        document.getElementById('func').innerHTML = `<p>F(x) = ${a}.x + ${b}</p>`;
    
    }
}