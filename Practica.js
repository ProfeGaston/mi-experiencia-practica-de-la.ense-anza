<script>
    // Supongamos que tienes un array de comentarios
    const comentarios = [
        { nombre: 'Usuario1', comentario: '¡Gran página!' },
        { nombre: 'Usuario2', comentario: 'Me encantó tu viaje educativo.' },
        // Agrega más comentarios según sea necesario
    ];

    // Llena dinámicamente la lista de comentarios
    document.addEventListener('DOMContentLoaded', function () {
        const listaComentarios = document.getElementById('lista-comentarios');
        comentarios.forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${comment.nombre}:</strong> ${comment.comentario}`;
            listaComentarios.appendChild(li);
        });

        // Agrega la funcionalidad para manejar el envío del formulario
        const formulario = document.getElementById('formulario-comentarios');
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();

            // Obtén los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const comentario = document.getElementById('comentario').value;

            // Agrega el nuevo comentario al array
            comentarios.push({ nombre: nombre, comentario: comentario });

            // Limpia el formulario
            formulario.reset();

            // Limpia la lista de comentarios
            listaComentarios.innerHTML = '';

            // Llena dinámicamente la lista de comentarios actualizada
            comentarios.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${comment.nombre}:</strong> ${comment.comentario}`;
                listaComentarios.appendChild(li);
            });
        });
    });
</script>