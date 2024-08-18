let max_dig = 9
function insert(num){
    if(document.getElementById('result').innerHTML === '0' ||  document.getElementById('result').innerHTML === 'Error'){
        document.getElementById('result').innerHTML = num
    }else if (document.getElementById('result').innerHTML.length < 8){
        document.getElementById('result').innerHTML += num
    }
    
}
function clean(){
    document.getElementById('result').innerHTML = '0'
}
function backspace(){
    let resultado = document.getElementById('result').innerHTML
    if (resultado.length > "1" && resultado != 'Error'){
        document.getElementById('result').innerHTML = resultado.slice(0, -1)
    }else{
        document.getElementById('result').innerHTML = '0'
    }
}

function calcular(){
    try {
        document.getElementById('result').innerHTML = eval(document.getElementById('result').innerHTML) || '0'
    }catch{
        document.getElementById('result').innerHTML = 'Error'
    }
}