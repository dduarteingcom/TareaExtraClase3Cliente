//Variables
var tmpNum = 0;
var iniciado= false ;
var result;
var operacion = false;


// Se invoca cuando se oprime el botón Enviar
function fBtn7(event){
    event.preventDefault();

    tmpNum *= 10;
    tmpNum += 7;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;
}
function fBtn8(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 8;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;
}
function fBtn9(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 9;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;
}
function fBtn4(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 4;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;
}
function fBtn5(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 5;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;
}
function fBtn6(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 6;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;

}
function fBtn1(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 1;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;

}
function fBtn2(event) {
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 2;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;

}
function fBtn3(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 3;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;

}
function fBtn0(event){
    event.preventDefault();
    tmpNum *= 10;
    tmpNum += 0;
    var area = document.getElementById("mensajes");
    area.innerHTML = tmpNum;
    operacion = false;
    iniciado=true;

}
function fBtnM(event){
    event.preventDefault();
    var area = document.getElementById("mensajes");
    if(!operacion && iniciado) {

        area.innerHTML = "";
        operacion = true;
        doSend("/"+tmpNum+"/2")
        tmpNum = 0;
    }
    else{
        tmpNum=0;
        area.innerHTML = "Really? Va de nuevo";
        doSend("-");
        tmpNum = 0;
    }
}
function fBtnD(event){
    event.preventDefault();
    var area = document.getElementById("mensajes");
    if(!operacion && iniciado) {

        area.innerHTML = "";
        operacion = true;
        doSend("/"+tmpNum+"/3")
        tmpNum = 0;
    }
    else{
        area.innerHTML = "Really? Va de nuevo";
        doSend("-");
        tmpNum = 0;
    }
}
function fBtnS(event){
    event.preventDefault();
    var area = document.getElementById("mensajes");
    if(!operacion && iniciado) {
        area.innerHTML = "";
        operacion = true;
        doSend("/"+tmpNum+"/0")
        tmpNum = 0;
    }
    else{
        area.innerHTML = "Really? Va de nuevo";
        doSend("-");
        tmpNum = 0;
    }
}
function fBtnR(event){
    event.preventDefault();
    var area = document.getElementById("mensajes");
    if(!operacion && iniciado) {
        area.innerHTML = "";
        operacion = true;
        doSend("/"+tmpNum+"/1");
        tmpNum = 0;
    }
    else{
        area.innerHTML = "Really? Va de nuevo";
        doSend("-");
        tmpNum=0;
    }
}
function fBtnI(event){
    event.preventDefault();
    var area = document.getElementById("mensajes");
    area.innerHTML ="";
    if(!operacion) {
        doSend("/"+tmpNum+"/4");
        tmpNum = 0;
    }
    else{
        area.innerHTML = "Really? Va de nuevo";
        doSend("-");
        tmpNum=0;
    }
}
function onMessage(evt) {
    // Agregamos al textarea el mensaje recibido
    var area = document.getElementById("mensajes")
    console.log(evt.data);
    area.innerHTML = evt.data + "\n";
}
// La función init se ejecuta cuando termina de cargarse la página
function init() {
    // Conexión con el servidor de websocket
    wsConnect();
}

// Invoca esta función para conectar con el servidor de WebSocket
function wsConnect() {
    // Connect to WebSocket server
    websocket = new WebSocket("ws://127.0.0.1:8083/");
/*
    // Asignación de callbacks
    websocket.onopen = function (evt) {
        onOpen(evt)
    };
    websocket.onclose = function (evt) {
        onClose(evt)
    };

 */
    websocket.onmessage = function (evt) {
        onMessage(evt)
    };
    websocket.onerror = function (evt) {
        onError(evt)
    };
}
/*
// Se ejecuta cuando se establece la conexión Websocket con el servidor
function onOpen(evt) {
    // Habilitamos el botón Enviar
    document.getElementById("enviar").disabled = false;
    // Enviamos el saludo inicial al servidor
}

// Se ejecuta cuando la conexión con el servidor se cierra
function onClose(evt) {

    // Deshabilitamos el boton
    document.getElementById("enviar").disabled = true;

    // Intenta reconectarse cada 2 segundos
    setTimeout(function () {
        wsConnect()
    }, 2000);
}
*/
// Se invoca cuando se recibe un mensaje del servidor
function onMessage(evt) {
    // Agregamos al textarea el mensaje recibido
    var area = document.getElementById("mensajes")
    area.innerHTML += evt.data + "\n";
}

// Se invoca cuando se presenta un error en el WebSocket
function onError(evt) {
    console.log("ERROR: " + evt.data);
}

// Envía un mensaje al servidor (y se imprime en la consola)
function doSend(message) {
    console.log("Enviando: " + message);
    websocket.send(message);
}


// Se invoca la función init cuando la página termina de cargarse
window.addEventListener("load", init, false);