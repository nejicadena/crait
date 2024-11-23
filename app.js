// Configura Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA7Ut9s9ooXMvx1Nbp1bZ7D7z4XVXGtn94",
    authDomain: "ilusion-laboral.firebaseapp.com",
    projectId: "ilusion-laboral",
    storageBucket: "ilusion-laboral.firebasestorage.app",
    messagingSenderId: "296131114878",
    appId: "1:296131114878:web:0c3f98007fb3c39bf2652f",
    measurementId: "G-CL08205LQV"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Obtén el formulario
  const form = document.getElementById('form-laboral');
  
  // Maneja el envío del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtén los datos del formulario
    const fecha = document.getElementById('fecha').value;
    const edad = document.getElementById('edad').value;
    const buscaTrabajo = document.querySelector('input[name="buscaTrabajo"]:checked').value;
    const profesion = document.querySelector('input[name="profesion"]:checked').value;
    const cualProfesion = document.getElementById('cualProfesion').value;
    const empleoEstudios = document.querySelector('input[name="empleoEstudios"]:checked').value;
    const empleoGastos = document.querySelector('input[name="empleoGastos"]:checked').value;
    const cualEmpleo = document.getElementById('cualEmpleo').value;
    const ambienteLaboral = document.querySelector('input[name="ambienteLaboral"]:checked').value;
    const sueldo = document.getElementById('sueldo').value;
    const alcanzaVivir = document.querySelector('input[name="alcanzaVivir"]:checked').value;
    const prestaciones = document.querySelector('input[name="prestaciones"]:checked').value;
    const renta = document.querySelector('input[name="renta"]:checked').value;
    const dificultadRenta = document.querySelector('input[name="dificultadRenta"]:checked').value;
    const nuevoEmpleo = document.querySelector('input[name="nuevoEmpleo"]:checked').value;
    const necesitasEmpleo = document.querySelector('input[name="necesitasEmpleo"]:checked').value;
    const desesperadaEmpleoEncontrar = document.querySelector('input[name="desesperadaEmpleoEncontrar"]:checked').value;
    const desesperadaEmpleoDebido = document.querySelector('input[name="desesperadaEmpleoDebido"]:checked').value;
    const trabajoSoportar = document.querySelector('input[name="trabajoSoportar"]:checked').value;
    const ingreso = document.getElementById('Ingreso').value;
    const gastarias = document.getElementById('gastarias').value;
    const deseas = document.getElementById('deseas').value;
    const exito = document.getElementById('exito').value;
    const enamorado = document.querySelector('input[name="enamorado"]:checked').value;
    const soñar = document.getElementById('soñar').value;
    const sobrecalificada = document.querySelector('input[name="sobrecalificada"]:checked').value;
    const sufuciente = document.querySelector('input[name="sufuciente"]:checked').value;
    const capaz = document.querySelector('input[name="capaz"]:checked').value;
    const abaratado = document.querySelector('input[name="abaratado"]:checked').value;
    const dispuesta = document.querySelector('input[name="dispuesta"]:checked').value;

    const correo = document.getElementById('correo').value;
    // Crea un nuevo documento en Firestore
    db.collection('col-laboral').add({
        fechaHoraRegistro: new Date(),
        fecha: fecha,
        edad: edad,
        buscaTrabajo: buscaTrabajo,
        profesion: profesion,
        cualProfesion: cualProfesion,
        empleoEstudios:empleoEstudios,
        empleoGastos:empleoGastos,
        cualEmpleo:cualEmpleo,
        ambienteLaboral:ambienteLaboral,
        sueldo:sueldo,
        alcanzaVivir:alcanzaVivir,
        prestaciones:prestaciones,
        renta:renta,
        dificultadRenta:dificultadRenta,
        nuevoEmpleo:nuevoEmpleo,
        necesitasEmpleo:necesitasEmpleo,
        desesperadaEmpleoEncontrar:desesperadaEmpleoEncontrar,
        desesperadaEmpleoDebido:desesperadaEmpleoDebido,
        trabajoSoportar:trabajoSoportar,
        ingreso:ingreso,
        gastarias:gastarias,
        deseas:deseas,
        exito:exito,
        enamorado:enamorado,
        soñar:soñar,
        sobrecalificada:sobrecalificada,
        sufuciente:sufuciente,
        capaz:capaz,
        abaratado:abaratado,
        dispuesta:dispuesta,

        correo: correo,
    })
    .then(() => {
      // El documento se creó correctamente
      console.log('Respuesta enviada correctamente');
      window.location = "agradecimiento.html";
      // Puedes mostrar un mensaje de éxito al usuario
    })
    .catch((error) => {
      // Error al crear el documento
      console.error('Error al enviar la respuesta:', error);
      // Puedes mostrar un mensaje de error al usuario
    });
  });