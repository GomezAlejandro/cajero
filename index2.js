window.addEventListener('DOMContentLoaded', () => {
    var cliente = JSON.parse(localStorage.getItem("cliente"));
    const etiquetaUsuario = document.getElementById("etiquetaUsuario");
    const campoSaldo = document.getElementById('saldo');
    
    etiquetaUsuario.innerText = cliente.usuario;
    campoSaldo.value=cliente.saldo;
  })


function salir() {
    localStorage.clear();
    window.location="index.html";
}

function oper1(){
    var montototal=parseFloat(document.getElementById('mon').value);
    var monto1=parseFloat(document.getElementById('saldo').value);
    var temporal=monto1-montototal;
    if(montototal<0){
        alert("Monto no permitido")
    }else{
        if(temporal>=10 && temporal<=990){
                document.getElementById('saldo').value=(monto1-montototal);
                alert("Retiro exitoso")
                alert("Nuevo Saldo: " + temporal)
            
        }else{
            alert("Monto fuera de limites de transaccion")
        }
    }

}

    function oper2(){
        var montototal=parseFloat(document.getElementById('mon').value);
        var monto1=parseFloat(document.getElementById('saldo').value);
        var temporal=monto1+montototal;

        if(temporal>=10 && temporal<=990){
                document.getElementById('saldo').value=(monto1+montototal);
            alert("Deposito exitoso")
            alert("Nuevo Saldo: " + temporal)
            
        }else{
            alert("Monto fuera de limites de transaccion")
        }

    }