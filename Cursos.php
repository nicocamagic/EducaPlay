<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EducaPlay</title>
    <link rel="stylesheet" href="CSS/styles.css" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="curso-online.png" alt="Logo Cursos Educativos" class="logo" />
            <h1>EducaPlay</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="php/cerrar_session.php">Cerrar Sesion</a></li>
            </ul>
        </nav>
        <button class="menu-toggle" aria-label="Toggle navigation menu">&#9776;</button>
    </header>

    <main>
        <section id="cursos" aria-label="Lista de cursos disponibles">
            <h2>Cursos Disponibles</h2>
            <div class="curso-lista" id="cursoLista">
                <article class="curso" tabindex="0">
                    <img src="curso-programacion.jpg" alt="Curso de Programación" />
                    <h3>Introducción a la Programación</h3>
                    <p>Aprende los fundamentos de la programación utilizando Python. Ideal para principiantes.</p>
                    <div class="botones">
                        <button class="btn-detalles" aria-expanded="false" aria-controls="desc1" aria-label="Mostrar detalles del curso Introducción a la Programación">Ver detalles</button>
                        <button class="btn-eliminar" aria-label="Eliminar curso Introducción a la Programación">Eliminar Curso</button>
                    </div>
                    <div id="desc1" class="descripcion-curso" hidden>
                        <ul>
                            <li>Duración: 8 semanas</li>
                            <li>Modalidad: Online</li>
                            <li>Incluye proyectos prácticos</li>
                        </ul>
                    </div>
                </article>
                <article class="curso" tabindex="0">
                    <img src="curso-marketing.jpg" alt="Curso de Marketing Digital" />
                    <h3>Marketing Digital Básico</h3>
                    <p>Domina las estrategias esenciales para promocionar productos y servicios en internet.</p>
                    <div class="botones">
                        <button class="btn-detalles" aria-expanded="false" aria-controls="desc2" aria-label="Mostrar detalles del curso Marketing Digital Básico">Ver detalles</button>
                        <button class="btn-eliminar" aria-label="Eliminar curso Marketing Digital Básico">Eliminar Curso</button>
                    </div>
                    <div id="desc2" class="descripcion-curso" hidden>
                        <ul>
                            <li>Duración: 6 semanas</li>
                            <li>Modalidad: Online</li>
                            <li>Certificación incluida</li>
                        </ul>
                    </div>
                </article>
                <article class="curso" tabindex="0">
                    <img src="curso-diseno.jpg" alt="Curso de Diseño Gráfico" />
                    <h3>Diseño Gráfico para Principiantes</h3>
                    <p>Aprende las bases del diseño gráfico y las herramientas más utilizadas profesionalmente.</p>
                    <div class="botones">
                        <button class="btn-detalles" aria-expanded="false" aria-controls="desc3" aria-label="Mostrar detalles del curso Diseño Gráfico para Principiantes">Ver detalles</button>
                        <button class="btn-eliminar" aria-label="Eliminar curso Diseño Gráfico para Principiantes">Eliminar Curso</button>
                    </div>
                    <div id="desc3" class="descripcion-curso" hidden>
                        <ul>
                            <li>Duración: 7 semanas</li>
                            <li>Modalidad: Online</li>
                            <li>Proyectos prácticos y portfolio</li>
                        </ul>
                    </div>
                </article>
            </div>

            <center>
            <button id="btnAgregarCurso" aria-controls="formAgregarCurso" aria-expanded="false" aria-label="Mostrar formulario para agregar nuevo curso">+ Agregar Nuevo Curso</button>
            <form id="formAgregarCurso" hidden aria-label="Formulario para agregar un nuevo curso" novalidate>
                <h3>Agregar Nuevo Curso</h3>
                <label for="nuevoTitulo">Título del Curso:</label>
                <input type="text" id="nuevoTitulo" name="nuevoTitulo" required aria-required="true" />

                <label for="nuevoDescripcion">Descripción:</label>
                <textarea id="nuevoDescripcion" name="nuevoDescripcion" rows="3" required aria-required="true" ></textarea>

                <label for="nuevaDuracion">Duración (ejemplo: 6 semanas):</label>
                <input type="text" id="nuevaDuracion" name="nuevaDuracion" required aria-required="true" />

                <label for="nuevaModalidad">Modalidad:</label>
                <select id="nuevaModalidad" name="nuevaModalidad" required aria-required="true">
                    <option value="">Seleccione...</option>
                    <option value="Online">Online</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Híbrido">Híbrido</option>
                </select>

                <label for="nuevaImagen">Imagen del Curso (archivo jpg, png o webp):</label>
                <input type="file" id="nuevaImagen" name="nuevaImagen" accept=".jpg, .jpeg, .png, .webp" required aria-required="true" />

                <button type="submit">Agregar Curso</button>
                <button type="button" id="btnCancelarAgregar">Cancelar</button>
                <div id="mensajeAgregarCurso" role="alert" aria-live="polite"></div>
            </form>
        </center>
        </section>

        <section id="sobre-nosotros" aria-label="Sección sobre la empresa">
            <h2>Sobre Nosotros</h2>
            <p>Somos una plataforma educativa dedicada a ofrecer cursos virtuales de alta calidad en diferentes áreas del conocimiento, facilitando el aprendizaje en línea para todas las edades.</p>
            <aside>
                <h3>Nuestras Ventajas</h3>
                <ol>
                    <li>Instructores expertos.</li>
                    <li>Material actualizado y práctico.</li>
                    <li>Flexibilidad de horarios.</li>
                    <li>Soporte personalizado.</li>
                </ol>
            </aside>
        </section>

        <section id="contacto" aria-label="Formulario de contacto">
            <h2>Contáctanos</h2>
            <form id="contactForm" novalidate>
                <label for="name">Nombre completo:</label>
                <input type="text" id="name" name="name" placeholder="Tu nombre" required aria-required="true" />

                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required aria-required="true" />

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>

                <button type="submit">Enviar</button>
            </form>
            <div id="formMessage" role="alert" aria-live="polite"></div>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Cursos Virtuales Educativos. Todos los derechos reservados.</p>
        <nav aria-label="Redes sociales">
            <ul class="social-media">
                <li><a href="#" aria-label="Facebook de Cursos Virtuales">Facebook</a></li>
                <li><a href="#" aria-label="Twitter de Cursos Virtuales">Twitter</a></li>
                <li><a href="#" aria-label="Instagram de Cursos Virtuales">Instagram</a></li>
            </ul>
        </nav>
        <div class="clock" aria-label="Reloj en tiempo real"></div>
    </footer>

    <script src="JS/script.js"></script>
</body>
</html>

