function sendEmail() {

    console.log("email")
     // Obtén el formulario
    const formemail = document.getElementById('form-laboral');
    const correo = document.getElementById('correo').value;
    console.log(correo)

    let params ={
        name:"test",
        email:correo,
        subject:"curriculum",
        message:"prueba"
    }
    emailjs.send("service_yuqbanc","template_j8uhvh3", params).then(console.log("email sent"))
    
}