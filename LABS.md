# Respuestas a Preguntas de Laboratorios

## Índice

- [Lab 1 - Introducción a HTML5 y Aplicaciones Web](#lab-1---introducción-a-html5-y-aplicaciones-web)
- [Lab 3 - CSS](#lab-3---css)
- [Lab 4 - Fundamentos de JavaScript](#lab-4---fundamentos-de-javascript)
- [Lab 5 - Frameworks de Estilo](#lab-5---frameworks-de-estilo)
- [Lab 6 - Programación Orientada a Eventos](#lab-6---programación-orientada-a-eventos)
- [Lab 11 - Express](#lab-11---express)
- [Lab 12 - HTML Dinámico](#lab-12---html-dinámico)
- [Lab 13 - MVC](#lab-13---mvc)
- [Lab 14 - Manejo de sesiones y cookies](#lab-14---manejo-de-sesiones-y-cookies)
- [Lab 17 - Interacción con la base de datos](#lab-17---interacción-con-la-base-de-datos)
- [Lab 18 - Autentificación](#lab-18---autentificación)
- [Lab 19 - RBAC](#lab-19---rbac)

---

## Lab 1 - Introducción a HTML5 y Aplicaciones Web

**¿Cuál es la diferencia entre Internet y la World Wide Web?**
Internet es la infraestructura física de redes que conecta computadoras globalmente. La World Wide Web es un servicio que usa Internet para compartir documentos hipertextuales. En síntesis, Internet es la red subyacente y la Web es una aplicación que funciona sobre ella.

**¿Cuáles son las partes de una URL?**
Una URL consta de varios componentes: el protocolo (http, https), el nombre de dominio, la ruta del recurso, parámetros de consulta y fragmentos. Por ejemplo, en `https://www.ejemplo.com:8080/ruta?param=valor#seccion`, cada parte cumple una función específica.

**¿Cuál es el propósito de los métodos HTTP?**

- **GET:** Obtiene datos del servidor sin modificarlos.
- **HEAD:** Similar a GET pero solo retorna encabezados.
- **POST:** Envía datos para crear recursos.
- **PUT:** Reemplaza un recurso completamente.
- **PATCH:** Modifica parcialmente un recurso.
- **DELETE:** Elimina un recurso del servidor.

**¿Qué método usar al enviar usuario y contraseña? ¿Por qué?**
Se debe usar POST porque los datos viajan en el cuerpo de la solicitud, no en la URL. Esto evita que información sensible aparezca en el historial del navegador o en los logs del servidor. POST es la opción segura para credenciales.

**¿Qué método se usa al acceder a una página por URL?**
Se usa GET. Cuando escribes una URL en la barra de direcciones o haces clic en un enlace, el navegador envía una solicitud GET para obtener el contenido de esa página.

**¿Qué significa el código 200? ¿Hay error?**
El código `200 OK` indica que la solicitud fue exitosa y el servidor devolvió correctamente el recurso solicitado. No ocurrió ningún error.

**¿Es responsabilidad del desarrollador corregir un 404?**
Sí, es responsabilidad del desarrollador verificar que las rutas sean correctas, que los archivos existan y que los enlaces internos del sitio no apunten a recursos inexistentes. Un `404` indica un recurso no encontrado en el servidor.

**¿Es responsabilidad del desarrollador corregir un 500?**
Sí, definitivamente. Un `500` indica un error interno del servidor, que puede ser un bug en el código, falla en la base de datos o configuración incorrecta. El desarrollador debe identificar y corregir la causa.

**¿Qué significa que un atributo esté deprecado?**
Deprecado significa que ya no se recomienda usar esa etiqueta o atributo porque ha sido reemplazado por mejores alternativas. Ejemplos: `font`, `center`, `b`, `i` y `frame` en HTML5.

**¿Cuáles son las diferencias entre HTML 4 y HTML5?**
HTML5 introduce etiquetas semánticas como `header`, `footer`, `nav` y `article`. Soporta nativamente video y audio. Tiene formularios mejorados con nuevos tipos de input. Incluye APIs modernas como LocalStorage y Canvas. HTML 4 era más básico y dependía de plugins para multimedia.

**¿Qué componentes tiene una tabla?**
Una tabla se compone de `table` como contenedor, `thead` para encabezados, `tbody` para datos, `tfoot` para pie de tabla, `tr` para filas, `th` para celdas de encabezado y `td` para celdas de datos. El estilo se aplica con CSS.

**¿Cuáles son los controles principales de un formulario HTML5?**
Los controles principales son: `input` (con tipos text, email, password, number, date, file, etc.), `textarea`, `select`, `option`, `button`, `label` y `fieldset`. HTML5 añade tipos especializados como color, range y url.

**¿Qué soporte HTML5 tiene tu navegador?**
Puedes verificar el soporte visitando HTML5test. La mayoría de navegadores modernos tienen muy buen soporte de HTML5.

**¿Cuál es el ciclo de vida de los sistemas de información?**
El ciclo de vida comprende: planeación (definir objetivos), análisis (recopilar requisitos), diseño (arquitectura del sistema), implementación (desarrollo), operación (uso en producción) y mantenimiento (soporte y actualizaciones).

**¿Cuál es el ciclo de desarrollo de sistemas de información?**
El ciclo de desarrollo incluye: identificar el problema, analizar requisitos, diseñar la solución, programar, realizar pruebas, implementar en producción y mantener el sistema. Es más técnico que el ciclo de vida general.

---

## Lab 3 - CSS

**Como ingeniero de software ¿cuál es tu recomendación sobre el uso de `!important` en un CSS?**
No usar `!important`. Es mejor escribir buen CSS desde el inicio con selectores correctos. Si lo usas mucho significa que tu código está desordenado y tienes problemas de especificidad.

**Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?**
Porque afecta la carga de la página. Una imagen muy grande hace que la página sea lenta. Además, si no tiene buen contraste, el texto se vuelve difícil de leer.

**Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?**
Usar `px` para tamaños fijos y `%` para elementos que deben adaptarse al tamaño de la pantalla. `pt` es estrictamente para medios impresos, no para web.

**¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?**
Porque es más pequeño al eliminar espacios, saltos de línea y comentarios. Un archivo más pequeño se descarga más rápido, reduciendo el tiempo de carga de la página.

---

## Lab 4 - Fundamentos de JavaScript

**¿Qué diferencias y semejanzas hay entre Java y JavaScript?**

- **Semejanzas:** Ambos usan sintaxis basada en C (llaves `{}`), tienen funciones y variables.
- **Diferencias:** Java es un lenguaje compilado, de tipado estático y orientado a objetos clásico. JavaScript es interpretado, de tipado dinámico y basado en prototipos.

**¿Qué métodos tiene el objeto Date? (Menciona al menos 5)**

1. `getFullYear()` - devuelve el año
2. `getMonth()` - devuelve el mes
3. `getDate()` - devuelve el día del mes
4. `getHours()` - devuelve la hora
5. `getTime()` - devuelve los milisegundos desde 1970

**¿Qué métodos tienen los arreglos? (Menciona al menos 5)**

1. `push()` - agrega un elemento al final
2. `pop()` - elimina el último elemento
3. `shift()` - elimina el primer elemento
4. `unshift()` - agrega un elemento al inicio
5. `slice()` - copia parte del arreglo

**¿Cómo se declara una variable con alcance local dentro de una función?**
Usando `let` o `const` (recomendado) dentro de la función. Por ejemplo:

    function ejemplo() {
        let miVariable = 5;
    }

**¿Qué implicaciones tiene utilizar variables globales dentro de funciones?**
Las variables globales pueden ser modificadas desde cualquier parte del código. Esto causa efectos secundarios impredecibles y bugs difíciles de rastrear, ya que diferentes funciones pueden sobrescribir el valor sin advertencia.

---

## Lab 5 - Frameworks de Estilo

**Describe Material Design**
Material Design es un sistema de diseño creado por Google que proporciona guías para crear interfaces visuales hermosas y funcionales. Se basa en principios de diseño que imitan el comportamiento de materiales físicos como el papel y la tinta.

Enfatiza la claridad y la jerarquía visual, utilizando colores atrevidos, tipografía clara e incorporando sombras para crear profundidad. Utiliza movimiento coherente con transiciones suaves y está basado en una cuadrícula de 4dp. Los principios clave incluyen la materialidad como metáfora, un diseño audaz, y consistencia multiplataforma.

---

## Lab 6 - Programación Orientada a Eventos

**¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?**
Proporciona validación inmediata al usuario sin necesidad de esperar una respuesta del servidor. Esto mejora la experiencia del usuario (UX), reduce el tráfico de red innecesario, y detecta errores de formato localmente.

**¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?**
Puedes saltarte la validación deshabilitando JavaScript en el navegador, modificando el DOM con las DevTools, interceptando las solicitudes HTTP, o enviando peticiones directas al servidor ignorando el frontend.

**Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?**
Porque la validación en JavaScript es estrictamente para la **experiencia del usuario**, no para la seguridad. La seguridad real y definitiva debe implementarse siempre en el backend. El servidor nunca debe confiar en el cliente.

**Implementación del Laboratorio:**
Se desarrolló una tienda online con validación de cantidades, cálculo automático de subtotal, IVA y total. Se implementaron eventos `mouseover` y `mouseout` para mostrar información dinámica sobre el stock disponible.

---

## Lab 11 - Express

**Describe el archivo package.json**
El `package.json` es el archivo de configuración principal de un proyecto de Node.js.

- **name**: nombre del proyecto.
- **version**: la versión actual.
- **description**: propósito del proyecto.
- **type**: `commonjs` (usa `require()`) o `module` (usa `import`).
- **main**: el archivo de entrada principal (ej. `app.js`).
- **scripts**: comandos de terminal automatizados (ej. `"start": "node --watch app.js"`).
- **dependencies**: lista de paquetes de terceros (ej. Express) necesarios para producción.

---

## Lab 12 - HTML Dinámico

**¿Qué otros templating engines existen para Node?**
Además de EJS, existen:

- **Pug (antes Jade):** Sintaxis basada en indentación, sin tags de cierre.
- **Handlebars:** Extiende Mustache con helpers. Usa doble llave `{{variable}}`.
- **Mustache:** "Logic-less", muy simple y restrictivo con la lógica en la vista.
- **Nunjucks:** Desarrollado por Mozilla, soporta herencia de plantillas y macros.

---

## Lab 13 - MVC

**¿Qué beneficios encuentras en el estilo MVC?**
El patrón MVC separa la aplicación en tres capas: Modelo (datos), Vista (interfaz) y Controlador (lógica de enrutamiento). Esto genera un código altamente cohesivo y de bajo acoplamiento. Facilita el mantenimiento, la escalabilidad y el trabajo en paralelo de diferentes desarrolladores en distintas capas del sistema.

**¿Encuentras alguna desventaja en el estilo arquitectónico MVC?**
Para proyectos muy pequeños o microservicios simples, introduce una complejidad innecesaria. Requiere navegar entre múltiples archivos y directorios para seguir el flujo de una sola petición, lo que aumenta la curva de aprendizaje inicial.

---

## Lab 14 - Manejo de sesiones y cookies

**¿Qué es una cookie y para qué sirve?**
Una cookie es un pequeño archivo de texto que el servidor envía al navegador del usuario. El navegador lo almacena y lo envía de vuelta en cada petición HTTP futura. Sirven principalmente para identificar usuarios, rastrear analíticas y guardar preferencias locales.

**¿Qué es una sesión?**
Es un mecanismo de almacenamiento en el lado del servidor que permite guardar datos específicos de un usuario (como si está logueado o su carrito de compras) a través de múltiples peticiones, rompiendo la naturaleza "stateless" del protocolo HTTP.

**¿Cuál es la diferencia principal entre una cookie y una sesión?**
La ubicación y la seguridad. Las cookies se guardan en el cliente (navegador), tienen límite de tamaño y pueden ser manipuladas por el usuario. Las sesiones se guardan en el servidor y son seguras. Normalmente, la sesión envía una única cookie cifrada al navegador que solo contiene el "Session ID" para vincular al usuario con sus datos en el servidor.

---

## Lab 17 - Interacción con la base de datos

**¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?**
Centraliza el acceso a datos. Si el esquema de la base de datos cambia, solo se modifica el Modelo, manteniendo intactos los Controladores. Cumple con el principio de responsabilidad única (Single Responsibility Principle) y facilita la implementación de pruebas unitarias al abstraer la base de datos.

**¿Qué es SQL injection y cómo se puede prevenir?**
Es un ataque donde se inserta código SQL malicioso en los inputs del usuario para manipular la base de datos (ej. `'; DROP TABLE usuarios; --`). Se previene obligatoriamente usando **consultas preparadas (Prepared Statements) o parametrizadas** (`?`), delegando al driver de la base de datos la sanitización y el escape de los caracteres especiales.

---

## Lab 18 - Autentificación

**¿Qué otras formas de autentificación existen?**

- **OAuth (SSO):** Iniciar sesión mediante proveedores de identidad (Google, GitHub).
- **JWT (JSON Web Tokens):** Autenticación stateless basada en tokens cifrados, ideal para APIs.
- **2FA / MFA:** Múltiples factores de autenticación (contraseña + SMS/App autenticadora).
- **Biometría:** Huellas dactilares o FaceID (usualmente respaldado por WebAuthn).
- **Passkeys:** Autenticación sin contraseña basada en criptografía de llave pública.

---

## Lab 19 - RBAC

**¿En qué consiste el control de acceso basado en roles?**
RBAC (Role-Based Access Control) asigna permisos a "roles" en lugar de a usuarios individuales. Los usuarios adoptan uno o más roles. Esto centraliza la gestión de autorización: si cambian las políticas de la empresa, se modifica el rol y el cambio se propaga automáticamente a todos los usuarios asignados a él.

**Ejemplos de Sistemas con y sin RBAC:**

- **Con RBAC (AWS IAM o Google Workspace):** Roles estrictamente definidos (Admin, Editor, Viewer). Escala perfectamente para miles de empleados.
- **Sin RBAC (App simple o WordPress configurado por defecto):** Todos los usuarios registrados tienen el mismo nivel de acceso o se manejan banderas booleanas simples (`isAdmin`). Es rápido de programar, pero insostenible si la aplicación crece.

---

## Lab 24 - AJAX

**¿Trazabilidad de Laboratorio?**
feat(admin): agregar buscador dinámico de usuarios

**¿Qué importancia tiene AJAX en el desarrollo de RIA's (Rich Internet Applications)?**
AJAX es el motor fundamental que hace posibles las RIAs. Su importancia radica en que permite a una aplicación web enviar y recibir datos del servidor en segundo plano (de forma asíncrona) sin tener que recargar la página completa. Esto otorga a las aplicaciones web una fluidez, velocidad y reactividad similares a las de una aplicación de escritorio nativa (como Gmail o Google Maps), mejorando drásticamente la experiencia del usuario.

**¿Qué implicaciones de seguridad tiene AJAX? ¿Dónde se deben hacer las validaciones de seguridad, del lado del cliente o del lado del servidor?**

- **Implicaciones de seguridad:** Al usar AJAX, la lógica de comunicación, las rutas (endpoints) y la estructura de los datos quedan expuestas en el código JavaScript del navegador. Un atacante puede inspeccionar este código, interceptar las peticiones o realizar peticiones fraudulentas directamente a la API (usando herramientas externas), facilitando ataques como CSRF o XSS si las respuestas no se manejan correctamente.
- **Dónde hacer las validaciones:** Las validaciones de seguridad siempre se deben hacer del lado del servidor. Las validaciones del lado del cliente existen única y exclusivamente para mejorar la experiencia del usuario (UX) previniendo envíos con errores básicos, pero un atacante puede saltárselas fácilmente desactivando JavaScript. El servidor es la única y verdadera línea de defensa.

**¿Qué es JSON?**
JSON es un formato de texto ligero, estructurado y estándar que se utiliza para el intercambio de datos entre un cliente y un servidor. Aunque su sintaxis se deriva de los objetos en JavaScript (usando llaves `{}` para objetos y corchetes `[]` para arreglos), es un formato completamente independiente soportado por prácticamente todos los lenguajes de programación modernos. Actualmente, es el estándar principal en la web debido a que es mucho más rápido y fácil de procesar que XML.

## Lab 26 - Servicios Web

**¿Trazabilidad de Laboratorio?**
feat: implementar integración de de Slack y corregir log_project
feat(employee): implementar self-review dinámico con generación por IA para todos los roles

**¿Qué ventajas y desventajas tiene la integración de tus aplicaciones web con servicios web desarrollados por terceros?**

**Ventajas:**

- **Ahorro de tiempo y costos:** No tienes que reinventar la rueda. Integrar un servicio complejo (como pagos con Stripe, mapas con Google Maps o notificaciones con Slack) es infinitamente más rápido y barato que desarrollar toda esa infraestructura desde cero.
- **Enfoque en el negocio principal (Core Business):** Permite a tu equipo de desarrollo concentrarse en la lógica que hace única a tu aplicación, delegando tareas genéricas o secundarias a empresas expertas en ese rubro.
- **Mantenimiento delegado:** El proveedor del servicio de terceros es quien se encarga de arreglar bugs, actualizar la tecnología, garantizar la seguridad de su entorno y mantener sus servidores funcionando 24/7.
- **Escalabilidad inmediata:** Los servicios comerciales están diseñados para manejar tráfico masivo. Si tu aplicación crece de golpe, el servicio externo escalará automáticamente para soportar las peticiones.

**Desventajas:**

- **Dependencia (Vendor Lock-in) y falta de control:** Si el servicio externo se cae, tu aplicación pierde funcionalidad. Además, si deciden cambiar las reglas de su API, subir los precios o cerrar la empresa, te verás obligado a reescribir tu código de emergencia.
- **Riesgos de privacidad y seguridad:** Al usar servicios externos, muchas veces los datos de tus usuarios viajan por servidores que tú no controlas. Si el proveedor sufre un hackeo, la reputación y confianza de tu aplicación también se verán afectadas.
- **Costos a escala:** Muchos servicios tienen capas gratuitas atractivas, pero cobran por volumen de peticiones. Cuando tu aplicación crece mucho, los costos por uso de la API pueden dispararse y volverse insostenibles.
- **Latencia (Rendimiento):** Cada llamada a un servicio web de terceros requiere que los datos viajen por internet hacia otro servidor y regresen. Esto añade un tiempo de retraso que, si no se maneja bien, puede hacer que tu aplicación se sienta lenta para el usuario.
