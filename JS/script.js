// Menú hamburguesa móvil
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
});

// Detalle de cursos (mostrar/ocultar)
function asignarEventosCurso(cursoElemento) {
  const btnDetalles = cursoElemento.querySelector('.btn-detalles');
  const btnEliminar = cursoElemento.querySelector('.btn-eliminar');
  const descripcion = cursoElemento.querySelector('.descripcion-curso');

  btnDetalles.addEventListener('click', () => {
    const isHidden = descripcion.hasAttribute('hidden');
    if (isHidden) {
      descripcion.removeAttribute('hidden');
      btnDetalles.textContent = 'Ocultar detalles';
      btnDetalles.setAttribute('aria-expanded', 'true');
    } else {
      descripcion.setAttribute('hidden', '');
      btnDetalles.textContent = 'Ver detalles';
      btnDetalles.setAttribute('aria-expanded', 'false');
    }
  });

  btnEliminar.addEventListener('click', () => {
    if(confirm('¿Estás seguro que deseas eliminar este curso?')) {
      cursoElemento.remove();
    }
  });
}

// Asignar eventos a todos los cursos ya existentes
document.querySelectorAll('.curso').forEach(cursoElem => {
  asignarEventosCurso(cursoElem);
});

// Validación y manejo del formulario de contacto
const formContacto = document.getElementById('contactForm');
const mensajeFormContacto = document.getElementById('formMessage');

formContacto.addEventListener('submit', function (e) {
  e.preventDefault();
  mensajeFormContacto.textContent = '';
  mensajeFormContacto.style.color = '#dc2626';

  const name = formContacto.name.value.trim();
  const email = formContacto.email.value.trim();
  const mensaje = formContacto.mensaje.value.trim();

  if (!name) {
    mensajeFormContacto.textContent = 'Por favor, ingresa tu nombre.';
    formContacto.name.focus();
    return;
  }

  if (!email) {
    mensajeFormContacto.textContent = 'Por favor, ingresa tu correo electrónico.';
    formContacto.email.focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    mensajeFormContacto.textContent = 'Por favor, ingresa un correo electrónico válido.';
    formContacto.email.focus();
    return;
  }

  if (mensaje.length > 500) {
    mensajeFormContacto.textContent = 'Tu mensaje es demasiado largo (máx 500 caracteres).';
    formContacto.mensaje.focus();
    return;
  }

  mensajeFormContacto.style.color = '#16a34a';
  mensajeFormContacto.textContent = 'Mensaje enviado con éxito. ¡Gracias por contactarnos!';

  setTimeout(() => {
    formContacto.reset();
    mensajeFormContacto.textContent = '';
  }, 3000);
});

// Reloj en tiempo real en el footer
const clock = document.querySelector('.clock');

function updateClock() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  clock.textContent = now.toLocaleTimeString('es-ES', options);
}

setInterval(updateClock, 1000);
updateClock();

// Funcionalidad para mostrar/ocultar formulario agregar curso
const btnAgregarCurso = document.getElementById('btnAgregarCurso');
const formAgregarCurso = document.getElementById('formAgregarCurso');
const btnCancelarAgregar = document.getElementById('btnCancelarAgregar');
const mensajeAgregarCurso = document.getElementById('mensajeAgregarCurso');

btnAgregarCurso.addEventListener('click', () => {
  const isHidden = formAgregarCurso.hasAttribute('hidden');
  if (isHidden) {
    formAgregarCurso.removeAttribute('hidden');
    btnAgregarCurso.setAttribute('aria-expanded', 'true');
    formAgregarCurso.scrollIntoView({behavior: 'smooth'});
  } else {
    formAgregarCurso.setAttribute('hidden', '');
    btnAgregarCurso.setAttribute('aria-expanded', 'false');
  }
  mensajeAgregarCurso.textContent = '';
  mensajeAgregarCurso.classList.remove('success');
});

// Cancelar formulario agregar curso
btnCancelarAgregar.addEventListener('click', () => {
  formAgregarCurso.setAttribute('hidden', '');
  btnAgregarCurso.setAttribute('aria-expanded', 'false');
  formAgregarCurso.reset();
  mensajeAgregarCurso.textContent = '';
  mensajeAgregarCurso.classList.remove('success');
});

// Manejo del envío del formulario agregar curso
formAgregarCurso.addEventListener('submit', function (e) {
  e.preventDefault();
  mensajeAgregarCurso.textContent = '';
  mensajeAgregarCurso.classList.remove('success');
  mensajeAgregarCurso.style.color = '#dc2626';

  const titulo = this.nuevoTitulo.value.trim();
  const descripcion = this.nuevoDescripcion.value.trim();
  const duracion = this.nuevaDuracion.value.trim();
  const modalidad = this.nuevaModalidad.value;
  const archivoImg = this.nuevaImagen.files[0];

  if (!titulo) {
    mensajeAgregarCurso.textContent = 'Por favor, ingresa el título del curso.';
    this.nuevoTitulo.focus();
    return;
  }
  if (!descripcion) {
    mensajeAgregarCurso.textContent = 'Por favor, ingresa una descripción.';
    this.nuevoDescripcion.focus();
    return;
  }
  if (!duracion) {
    mensajeAgregarCurso.textContent = 'Por favor, ingresa la duración del curso.';
    this.nuevaDuracion.focus();
    return;
  }
  if (!modalidad) {
    mensajeAgregarCurso.textContent = 'Por favor, selecciona una modalidad.';
    this.nuevaModalidad.focus();
    return;
  }
  if (!archivoImg) {
    mensajeAgregarCurso.textContent = 'Por favor, selecciona una imagen para el curso.';
    this.nuevaImagen.focus();
    return;
  }

  const extPermitidas = ['jpg', 'jpeg', 'png', 'webp'];
  const ext = archivoImg.name.split('.').pop().toLowerCase();
  if (!extPermitidas.includes(ext)) {
    mensajeAgregarCurso.textContent = 'Formato de imagen no válido. Solo jpg, jpeg, png o webp.';
    this.nuevaImagen.focus();
    return;
  }

  const nuevoArticulo = document.createElement('article');
  nuevoArticulo.className = 'curso';
  nuevoArticulo.setAttribute('tabindex', '0');
  const idDesc = 'desc' + Math.floor(Math.random() * 1000000);
  const imgURL = URL.createObjectURL(archivoImg);

  nuevoArticulo.innerHTML = `
    <img src="${imgURL}" alt="Imagen del curso ${titulo}" />
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <div class="botones">
      <button class="btn-detalles" aria-expanded="false" aria-controls="${idDesc}" aria-label="Mostrar detalles del curso ${titulo}">Ver detalles</button>
      <button class="btn-eliminar" aria-label="Eliminar curso ${titulo}">Eliminar Curso</button>
    </div>
    <div id="${idDesc}" class="descripcion-curso" hidden>
      <ul>
        <li>Duración: ${duracion}</li>
        <li>Modalidad: ${modalidad}</li>
     </ul>
    </div>
  `;

  const listaCursos = document.getElementById('cursoLista');
  listaCursos.appendChild(nuevoArticulo);

  asignarEventosCurso(nuevoArticulo);

  this.reset();
  mensajeAgregarCurso.textContent = 'Curso agregado exitosamente.';
  mensajeAgregarCurso.classList.add('success');
  listaCursos.scrollIntoView({behavior: "smooth"});
});

