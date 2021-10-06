
const socket =io()
//const path=require('path')
//const root=path.join(__dirname,'../public')
var click = false
var moving_mouse=false
var x_position =0
var y_position =0
var previous_position=null
var color = 'white'
var texto=new Array()
var contador=0


texto[0] = "Hola Sandra!...";
texto[1] = "espero estes muy bien.";
texto[2] = "te hice esto con mucho cariño, es algo asi como una carta virtual.";
texto[3] ="Seré breve, estas lista? ";
texto[4] = "Primeramente....¡FELIZ CUMPLEAÑOS! ❤";
texto[5] ="(Un poco atrasado)";
texto[6] = "Espero que te la hayas pasado muuuy chidoo. ";
texto[7] = "Y que hayas disfrutado de la psicodelia de la vida..";
texto[8] = "Pero lo mas importante, que hayas sido muy feliz.";
texto[9] ="Tu cumple siempre me recuerda a que se viene Dia de muertos, mi epoca favorita del año!";
texto[10] ="Y.. me gusta que sea tu cumpleaños porque siempre iba a verte.";
texto[11] ="Aunque...ultimamente sentia que no era correcto visitarte de la nada.";
texto[12] ="Principalmente porque no hablamos mucho :c";
texto[13] ="Y sentia que era un poco raro que quisiera verte y regalarte algo.";
texto[14] ="Pero existe una razon... por la que lo hacía";
texto[15] ="Lo que pasa es que nunca me atrevi a decirtelo ...";
texto[16] ="Me gustas desde hace mucho.. y mi intencion era que se diera algo entre tu y yo.";
texto[17] ="nunca te lo pude decir, porque no sabia cómo..";
texto[18] ="Aunque quiza ya te hayas dado cuenta que no soy muy bueno expresando lo que siento.";
texto[19] ="sé que tambien esta fue una forma poco convencional para  expresartelo.. ";
texto[20] ="Pero queria que lo supieras ..";
texto[21] ="Sandra, por ultimo te quieria dedicar una cancion...";
texto[22] ="aun no te salgas de la pagina, tu sigue explorando, hay mas cosas que puedes ver ";
texto[23] ="Cuidate mucho!, P.D. Me encanta cuando sonries ❤";
const users=document.getElementById('users')
const canvas =document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = window.innerWidth
const height = window.innerHeight

canvas.width =width
canvas.height =height

canvas.addEventListener('mousedown', ()=>{
    click = true
})

canvas.addEventListener('mouseup',()=>{
    click = false
})
canvas.addEventListener('mousemove',(e)=>{
    x_position=e.clientX
    y_position=e.clientY
    moving_mouse=true
})



function adelante()
{
    if((contador+1) > 3) {
		contador = 0
	} else {
		contador++
	}
	//document.images.uno.src=imagenes[contador]
	//document.getElementById("one").src=cancion[contador]
}
function moverbtn(){
    newWidth = (Math.random() * width);
    newHeight= (Math.random() * height);
    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";
}

function mostrar(){
    var parrafo = document.getElementById("parrafo");
    var textod = texto[contador]
    parrafo.innerHTML = textod
    if(texto[contador]==null) {
              
              setTimeout(retraso_tres,1000);
              setTimeout(retraso_dos,20000);
              setTimeout(retraso,4000);
              document.getElementById("div2").style.display ='none';
              document.getElementById("div-mostrar").style.display ='none';
	}else{
		contador++
	}
 }
 function retraso_tres(){
    document.getElementById("div-dibujo").style.display ='';
 }
 function retraso(){
    document.getElementById("divsong").style.display ='';
 }
 function retraso_dos(){
    document.getElementById("div1").style.display ='';
 }
//setTimeout(function(){
    //var parrafo = document.getElementById("parrafo");
   
    //var textod = texto[contador]
    
   // parrafo.innerHTML = textod
   // contador++
//}, 1000 * 10);

function change_color(c){
    color =c
    context.strokeStyle = color
    context.stroke()
}

function delete_all(){
    socket.emit('delete')
}

function create_drawing(){
    if(click && moving_mouse && previous_position!=null){
        let drawing = {
            x_position:x_position, 
            y_position:y_position,
            color:color,
            previous_position:previous_position
        }
        socket.emit('drawing',drawing)
    }
    previous_position={x_position:x_position,y_position:y_position}
    setTimeout(create_drawing, 25)
}


    socket.on('show_drawing',(drawing)=>{
        
        if(drawing!=null){
            context.beginPath()
            context.lineWidth =3
            context.strokeStyle =drawing.color
            context.moveTo(drawing.x_position,drawing.y_position)
            context.lineTo(drawing.previous_position.x_position,
                drawing.previous_position.y_position)
            context.stroke()    
        }else{
            context.clearRect(0,0,canvas.width,canvas.height)
        }
    
    })

    socket.on('users',(number)=>{
         users.innerHTML= `numero de usuarios conectados: ${number}`
    })
create_drawing()



$(function (){
    function cargarCanciones(){
        $.ajax({
            url:'/canciones'
        }).done(function(canciones){
            var lista= $('.lista-canciones');
            lista.empty();
            canciones.forEach(function (cancion) {
                var nuevoElemento = $('<li class="cancion">'+cancion.nombre+'</li>')
                nuevoElemento.appendTo(lista);
            })
        }).fail(function(){
            alert('no pudo cargar canciones');
        })
    }
    cargarCanciones();
 });