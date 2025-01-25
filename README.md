# Amigo Secreto - Aplicación Web

Este proyecto es una aplicación web para gestionar una lista de amigos y realizar un sorteo aleatorio, ideal para organizar eventos de "Amigo Secreto" o simplemente divertirse con amigos. La aplicación permite agregar nombres a una lista, mostrar la lista actualizada en pantalla, realizar un sorteo y reiniciar los datos.

## Características Principales
- **Agregar amigos:** Los usuarios pueden ingresar nombres que se almacenan en una lista.
- **Visualizar la lista:** La lista de nombres agregados se muestra de manera dinámica en la interfaz.
- **Sortear un amigo:** Se selecciona aleatoriamente un nombre de la lista y se muestra el resultado.
- **Restablecer todo:** Permite reiniciar la lista de amigos y limpiar todos los datos.

## Tecnologías Utilizadas
- **HTML5**: Estructura del proyecto.
- **CSS3**: Diseño y estilos visuales utilizando variables y una tipografía moderna.
- **JavaScript**: Lógica para manejar las funcionalidades.

## Estructura del Proyecto
```
Amigo-Secreto/
├── index.html      # Archivo principal del proyecto
├── style.css       # Estilos de la aplicación
├── app.js          # Lógica de la aplicación
├── assets/         # Recursos como imágenes e íconos
```

## Cómo Utilizar

1. Clona este repositorio o descarga el proyecto.
2. Abre el archivo `index.html` en cualquier navegador web.
3. Sigue los pasos:
   - Ingresa los nombres en el campo de texto.
   - Haz clic en "Añadir" para agregar nombres a la lista.
   - Una vez agregados los nombres, presiona "Sortear amigo" para realizar un sorteo aleatorio.
   - Si deseas reiniciar el proceso, haz clic en "Restablecer todo".

## Descripción de los Archivos

### index.html
Contiene la estructura principal de la aplicación, incluyendo:
- Campo de entrada para los nombres.
- Botones para interactuar con la aplicación.
- Contenedores para mostrar la lista de amigos y el resultado del sorteo.

### style.css
Define los estilos visuales de la aplicación, incluyendo:
- Variables de colores para personalizar el diseño.
- Tipografías modernas mediante Google Fonts.
- Estilos responsivos para asegurar una buena experiencia de usuario.

### app.js
Contiene la lógica de la aplicación:
- **agregarAmigo()**: Agrega nombres al array `amigos` y actualiza la lista visible.
- **actualizarLista()**: Refresca el contenido de la lista en el DOM.
- **sortearAmigo()**: Selecciona un nombre al azar y lo muestra en pantalla.
- **restablecerTodo()**: Limpia el array y reinicia el estado de la aplicación.

## Captura de Pantalla
Inserta aquí una captura o gif del proyecto funcionando.

## Requisitos
- Navegador web moderno (Google Chrome, Firefox, Edge, etc.).

## Mejoras Futuras
- Permitir eliminar nombres individuales de la lista.
- Mejorar la interfaz con animaciones.

## Autor
Este proyecto fue desarrollado con fines educativos y recreativos. Si deseas contribuir o tienes sugerencias, no dudes en contactarme.

---
© 2025 Amigo Secreto. Todos los derechos reservados.

