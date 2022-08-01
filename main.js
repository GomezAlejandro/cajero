
var usuarios = [
    { usuario: "alex", contraseña: "123", saldo: 500 },
    { usuario: "beto", contraseña: "123", saldo: 600 },
    { usuario: "lety", contraseña: "123", saldo: 700 }
]

function login(){
    var user, pass
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    let cliente = usuarios.find(x => x.usuario === user && x.contraseña === pass);

    if(cliente){
        localStorage.setItem("cliente", JSON.stringify(cliente));
        window.location="index2.html";
    } else{
        alert("Acceso Denegado")
    }
}

// function oper1(){
//     var montototal=parseFloat(document.getElementById('mon').value);
//     var monto1=parseFloat(document.getElementById('m1').value);
//     var temporal=monto1-montototal;

//     if(temporal>=10 && temporal<=990){
//             document.getElementById('m1').value=(monto1-montototal);
        
//     }else{
//         alert("Monto fuera de limites de transaccion")
//     }

// }

//     function oper2(){
//         var montototal=parseFloat(document.getElementById('mon').value);
//         var monto1=parseFloat(document.getElementById('m1').value);
//         var temporal=monto1+montototal;

//         if(temporal>=10 && temporal<=990){
//                 document.getElementById('m1').value=(monto1+montototal);
            
//         }else{
//             alert("Monto fuera de limites de transaccion")
//         }

//     }