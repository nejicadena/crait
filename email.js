function sendEmail() {
     // Obtén el formulario
    const formemail = document.getElementById('form-laboral');
    const correo = document.getElementById('correo').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",//curriculumvitae151124@gmail.com
        Password: "Enter your password",
        To: 'receiver@email_address.com',//curriculumvitae151124@gmail.com
        From: correo,
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}