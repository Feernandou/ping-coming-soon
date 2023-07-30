const input = document.querySelector("#input")
const button = document.querySelector("#button")
const demo = document.querySelector("#demo")
const demo2 = document.querySelector("#demo2")
//estilos del elemento #demo 
demo.style.color = "red"
demo.textAlign = "center"
demo.style.fontSize = "15px"
demo.style.marginTop = "20px"
//estilos del elemento #demo2
demo2.style.color = "green"
demo2.textAlign = "center"
demo2.style.fontSize = "15px"
demo2.style.marginTop = "-20px"
button.addEventListener("click", function(){
    
    if(input.value.trim() === ""){
        
        input.style.borderColor = "red"
        demo.innerHTML = "¡Necesitas ingresar un correo válido!"
        demo2.innerHTML = ""
    }
    else if(input.value.trim().includes("@") && input.value.trim().includes(".com")){
        input.style.borderColor = "green"
        demo.innerHTML = ""
        demo2.innerHTML = "El correo es válido"
    }
    else{
        demo.innerHTML = "El correo no es válido"
        input.style.borderColor = "red"
        demo2.innerHTML = ""
    }
    
})
