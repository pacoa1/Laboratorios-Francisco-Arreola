# Resumen y Preguntas de Lecturas

## Índice
1. [Lectura 1: Introducción a la gestión de proyectos](#lectura-1-introducción-a-la-gestión-de-proyectos)
2. [Lectura 2: Sistemas de información en los negocios](#lectura-2-sistemas-de-información-en-los-negocios)
3. [Lectura 3: Gestion del alcance](#lectura-3-gestion-del-alcance)
4. [Lectura 4: BD vs DBMS](#lectura-4-bd-vs-dbms)
5. [Lectura 5: Notación del modelo entidad relación y Restricciones adicionales](#lectura-5-notación-del-modelo-entidad-relación-y-restricciones-adicionales)
6. [Lectura 6: Reglas de traslado MER a MR](#lectura-6-reglas-de-traslado-mer-a-mr)
7. [Lectura 7: Gestión de la comunicación](#lectura-7-gestión-de-la-comunicación)
8. [Lectura 8: Modelo Relacional y Álgebra Relacional](#lectura-8-modelo-relacional-y-álgebra-relacional)
9. [Lectura 9: Diagramas de secuencia](#lectura-9-diagramas-de-secuencia)
10. [Lectura 10: Álgebra relacional, SQL básico y funciones agregadas](#lectura-10-álgebra-relacional-sql-básico-y-funciones-agregadas)
11. [Lectura 11: Metodología para diseñar casos de pruebas a partir de casos de uso](#lectura-11-metodología-para-diseñar-casos-de-pruebas-a-partir-de-casos-de-uso)
12. [Lectura 12: Consultas en SQL Usando Roles y Consultas](#lectura-12-consultas-en-sql-usando-roles-y-consultas)

---

## Lectura 1: Introducción a la gestión de proyectos

### Resumen
Un proyecto es un esfuerzo temporal que hacemos para crear algo único. Según la 
lectura, muchos proyectos fracasan por problemas como cambiar los requisitos a 
cada rato, la falta de planeación o una comunicación deficiente. Para evitar 
esto, se utiliza la guía PMBOK, la cual organiza el conocimiento para mantener 
todo el trabajo bajo control. El cerebro principal de este sistema se llama 
Integración, que se encarga de armar el plan general del proyecto, asegurar que 
se ejecute y revisar de forma integrada cualquier cambio que se quiera hacer. 
Esta integración coordina otras piezas clave. Por ejemplo, el Alcance tiene la 
regla estricta de hacer única y exclusivamente el trabajo necesario que se 
pidió para el proyecto, sin agregar tareas extra. El Calendario y el Costo nos 
ayudan a acomodar las actividades en el orden correcto y a usar el presupuesto 
asignado sin gastar de más. La Comunicación define cómo se va a generar, 
repartir y guardar la información entre todos los involucrados. Para asegurar 
que el resultado realmente cubra las necesidades, aplicamos la Calidad, mientras 
que los Riesgos nos preparan para actuar ante eventos que están fuera de nuestro 
control pero que pueden afectarnos. Por último, Recursos Humanos y Materiales se 
encargan de organizar al equipo de trabajo y nos guían sobre cómo adquirir 
bienes externos y administrar los contratos con los proveedores. Básicamente, es 
un método paso a paso para no perder el orden y entregar exactamente las 
características que se prometieron desde el principio.

### Preguntas
Pregunta 1: ¿Qué significa exactamente el control integrado de cambios dentro del área de Integración?
Pregunta 2: ¿Cómo se decide qué trabajo es estrictamente necesario para cumplir con la regla del Alcance?
Pregunta 3: ¿Qué diferencia hay entre los procesos de ejecución y los procesos de control mencionados en la guía?

---

## Lectura 2: Sistemas de información en los negocios

### Resumen
Un sistema de información es un conjunto de herramientas tecnológicas 
interrelacionadas que ayudan a recopilar, procesar, almacenar y distribuir datos 
para apoyar la toma de decisiones en una empresa. Para entender cómo funciona, 
primero hay que diferenciar un dato de la información: un dato es un simple 
símbolo o número sin valor semántico por sí mismo, pero cuando se procesa y 
organiza, se convierte en información útil. Todo sistema recibe datos de 
entrada, los somete a un procesamiento, genera una salida para el usuario y 
ofrece una retroalimentación. Según el nivel de la empresa, existen diferentes 
sistemas en una pirámide. En la base están los TPS para procesar transacciones 
diarias. Más arriba están los MIS, que usan datos para generar reportes fijos 
para gerentes medios. Para problemas menos estructurados existen los DSS, que 
apoyan decisiones complejas con simulaciones. En la cima están los EIS para 
directores, mostrando la información crítica mediante interfaces gráficas 
rápidas. Además, hay sistemas complementarios como los OAS para automatizar la 
oficina, KWS para crear conocimiento, GDSS para facilitar debates en grupo de 
forma anónima, y Sistemas Expertos que imitan el razonamiento humano para 
diagnosticar problemas.

### Preguntas
Pregunta 1: ¿Qué procedimientos o cálculos exactos convierten los datos aislados en la información final de los reportes?
Pregunta 3: ¿Por qué los sistemas GDSS utilizan aportaciones anónimas para facilitar las decisiones en grupo?

---

## Lectura 3: Gestion del alcance

### Resumen
El alcance de un proyecto se refiere a todo el trabajo exacto que se debe hacer 
para entregar un producto o servicio, definiendo claramente qué cosas están 
incluidas y cuáles definitivamente no. Para manejarlo bien, la guía propone 
varios pasos empezando por la iniciación, donde se autoriza formalmente el 
proyecto mediante un acta, la cual define los objetivos básicos y le da 
autoridad al jefe del proyecto para usar los recursos. Luego sigue la 
planificación y la definición del alcance, donde el trabajo total se divide en 
partes cada vez más pequeñas usando una herramienta llamada Estructura de 
Desglose del Trabajo (WBS). La regla de esta herramienta es desarmar el proyecto 
de forma ordenada hasta llegar al "paquete de trabajo", el cual debe ser 
específico para asignarle fechas, costo y vigilarlo. Después de realizar el 
trabajo viene la verificación, que consiste en hacer inspecciones para que el 
cliente acepte formalmente que lo entregado cumple lo prometido. Finalmente, 
está el control del alcance para vigilar el estado y administrar modificaciones. 
Esto es vital porque si se agregan tareas sin control, el proyecto sufre 
"scope creep" (el alcance crece sin permiso). En conclusión, gestionar el 
alcance es definir exactamente qué se va a entregar, dividir el trabajo en 
piezas manejables, lograr que el cliente apruebe los resultados y evitar que se 
agreguen cosas extra sin autorización formal.

### Preguntas
Pregunta 1: Al momento de hacer el WBS, ¿por qué exactamente cuesta más recursos intentar controlar tareas demasiado pequeñas?

---

## Lectura 4: BD vs DBMS

### Resumen
Antes de los años sesenta, la información se guardaba en archivos independientes 
que estaban atados a programas específicos. Esto causaba muchos problemas: los 
mismos datos se repetían en varios lugares, se desactualizaban fácilmente 
provocando errores de inconsistencia, y era muy difícil compartir la información 
o protegerla. Para solucionar esto, surgieron las bases de datos. Una base de 
datos es una colección organizada de archivos interrelacionados, diseñada para 
describir a toda una empresa sin repetir información innecesariamente. Sin 
embargo, tener los archivos organizados no es suficiente; se requiere un 
intermediario para manejarlos. Aquí es donde entra el Sistema Gestor de Bases de 
Datos (DBMS). El DBMS es el software o programa que conecta los datos guardados 
con los usuarios y las aplicaciones. Su objetivo es hacer que guardar y sacar 
información sea fácil, seguro y rápido. El DBMS se encarga de tareas vitales: 
traduce las peticiones de los usuarios, asegura que las reglas del negocio se 
cumplan (integridad), bloquea el acceso a personas no autorizadas (seguridad), 
gestiona copias de respaldo para recuperar la información si falla el sistema, y 
controla el tráfico cuando varios usuarios intentan modificar el mismo dato al 
mismo tiempo (control de concurrencia) para evitar que la información se 
corrompa. En conclusión, mientras que la base de datos es la información 
organizada, el DBMS es el programa indispensable que la administra y la protege.

### Preguntas
Pregunta 1: ¿Cómo logra exactamente el DBMS organizar el tráfico cuando dos o más usuarios intentan modificar el mismo dato al mismo tiempo sin que haya errores?
Pregunta 2: ¿Cuál es la diferencia práctica entre los problemas de "seguridad" y los problemas de "integridad" que menciona la lectura?

---

## Lectura 5: Notación del modelo entidad relación y Restricciones adicionales

### Resumen
El diseño de una base de datos busca organizar la información para no repetir 
datos innecesariamente y evitar errores al actualizarla. Para lograrlo, primero 
se averigua qué necesitan los usuarios y luego se crea un esquema usando el 
Modelo Entidad-Relación (MER).  
Este modelo representa el mundo real usando tres piezas clave: las entidades, 
que son los objetos o sujetos principales de los que queremos guardar información 
(como clientes o coches); las asociaciones, que son las acciones o relaciones 
que conectan a esas entidades (como un cliente que "compra" un coche); y los 
atributos, que son las características que describen a cada entidad (como el 
color o la matrícula). Además, cada entidad debe tener un identificador único 
para no confundirla con otra. Cuando la situación es más compleja, se usa el 
modelo extendido. Este permite manejar casos donde una entidad juega varios 
roles, o crear categorías generales y subtipos (como un "empleado" general que 
se divide en empleados de "planta" u "honorarios"). También ayuda a identificar 
entidades "débiles" que no pueden existir por sí solas sin otra principal que 
las respalde. Finalmente, el diseño requiere reglas de integridad adicionales. 
Estas son condiciones extra que el modelo gráfico no alcanza a mostrar, pero que 
son vitales, como establecer límites (cardinalidad) sobre cuántos cursos puede 
dar un profesor, o reglas lógicas como que el sueldo de un empleado no debe ser 
mayor al de su jefe. En conclusión, el MER y sus restricciones son el plano 
arquitectónico que asegura que la base de datos sea eficiente y refleje las 
reglas de la empresa antes de programarla.

### Preguntas
Pregunta 1: ¿Por qué tener espacios en blanco en una tabla afecta tanto el rendimiento de la base de datos?
Pregunta 2: ¿Qué pasa exactamente con los datos de esa entidad débil si borramos la entidad fuerte principal?

---

## Lectura 6: Reglas de traslado MER a MR

### Resumen
Para convertir un Modelo Entidad-Relación en una base de datos real, es necesario 
traducirlo a un formato de tablas llamado Modelo Relacional. Cada tabla tiene 
columnas, y la más importante es la "llave primaria", un valor que identifica 
de forma única a cada renglón. La traducción sigue reglas estrictas dependiendo 
de cómo se conecten las cosas. Primera regla: cada entidad normal se convierte 
en una tabla, sus atributos son las columnas, y su identificador principal pasa 
a ser la llave primaria. Segunda regla: si la asociación es de "muchos a muchos" 
(N:N), se debe crear una tabla nueva y exclusiva que combine las llaves primarias 
de las dos entidades involucradas. Tercera regla: cuando la relación es de "uno 
a muchos" (1:N), no se crea una tabla nueva; simplemente se toma la llave 
primaria de la tabla del lado "uno" y se copia como una columna más dentro de la 
tabla del lado "muchos". Cuarta regla: para relaciones de "uno a uno" (1:1), 
basta con copiar la llave de cualquiera de las dos tablas hacia la otra. 
También existen reglas para casos especiales. Si hay una relación de herencia 
donde una categoría general se divide en subtipos, las tablas de los subtipos 
usan la misma llave primaria que la tabla general. Si hay entidades "débiles" 
que dependen de una "fuerte", la tabla de la entidad débil debe incluir 
forzosamente la llave de la fuerte para poder existir. Finalmente, si una 
entidad se relaciona consigo misma mediante roles, se usan nombres diferentes 
en las columnas heredadas para no causar conflictos. Básicamente, es una receta 
paso a paso para transformar dibujos conceptuales en las tablas físicas del 
sistema.

### Preguntas
Pregunta 1: ¿Por qué es estrictamente necesario crear una tabla nueva en las relaciones de muchos a muchos?
Pregunta 2: ¿Qué problemas técnicos ocurren en el sistema si olvidamos asignar una llave primaria artificial a una entidad que no la tiene?

---

## Lectura 7: Gestión de la comunicación

### Resumen
La comunicación en un proyecto es el puente que conecta a todas las personas 
involucradas, asegurando que la información se recolecte, reparta, guarde y 
elimine de forma correcta. Para que esto funcione, la guía establece cinco 
pasos sencillos. Primero, hay que "identificar a los interesados", que significa 
descubrir desde el principio quiénes son todas las personas o departamentos 
afectados por el proyecto para entender sus intereses, ganar su apoyo y evitar 
que pongan resistencia. Segundo, se debe "planear la comunicación", lo cual es 
decidir quién necesita qué información, cuándo la necesita y cómo se le va a 
entregar para asignar los recursos adecuados. Tercero, hay que "distribuir la 
información", es decir, hacer que los mensajes y reportes lleguen a todos usando 
los medios y presentaciones acordadas en el plan original. Cuarto, se deben 
"administrar las expectativas", que básicamente es hablar, aclarar dudas y 
negociar constantemente con los interesados para resolver sus problemas a tiempo 
y evitar malos entendidos. Por último, está "reportar el desempeño", que 
consiste en avisarle a todos cómo va avanzando el trabajo mediante documentos 
claros que muestren qué tareas ya se terminaron, las estimaciones de tiempo o 
dinero, y qué riesgos o cambios han sido aprobados. En resumen, este proceso 
garantiza que todos en el equipo y los clientes estén siempre en la misma 
sintonía para asegurar el éxito del trabajo.

### Preguntas
Pregunta 1: ¿Cómo se decide qué estrategia usar para los interesados que no apoyan el proyecto y ponen resistencia?

---

## Lectura 8: Modelo Relacional y Álgebra Relacional

### Resumen
El modelo relacional, propuesto por Codd en 1970, revolucionó las bases de 
datos al estructurar la información en relaciones, que visualmente son 
tablas. Su objetivo principal es independizar cómo se guardan físicamente los 
datos de cómo los ven y usan las personas. En este modelo, cada tabla está 
formada por columnas llamadas atributos (que toman valores de un conjunto 
permitido llamado dominio) y renglones llamados tuplas, que representan 
cada registro único. Para conectar todo sin perder el orden, se usan llaves. 
La llave primaria es una o varias columnas que identifican de forma exclusiva 
a cada renglón. Por otro lado, la llave foránea es una columna que hace 
referencia a la llave primaria de otra tabla, sirviendo como un puente para 
vincular la información. Para evitar el caos, el modelo exige reglas estrictas: 
la integridad de entidad prohíbe que una llave primaria esté vacía o nula, y 
la integridad referencial asegura que las llaves foráneas siempre apunten a 
un registro que realmente exista. Finalmente, para hacer consultas, se utiliza 
el álgebra relacional. Es la base matemática del lenguaje SQL y funciona con 
operadores (como unión, selección para filtrar renglones, y proyección para 
filtrar columnas) que toman tablas existentes y las operan para generar 
siempre una tabla nueva como resultado.

### Preguntas
Pregunta 1: ¿Cuál es la diferencia exacta entre el operador de selección y el de proyección?
Pregunta 2: ¿Por qué no es riesgoso configurar la integridad referencial con transmisión en cascada y que el sistema borre datos automáticamente?

---

## Lectura 9: Diagramas de secuencia

### Resumen
Un diagrama de secuencia es una herramienta visual de programación que sirve 
para mostrar cómo interactúan y se comunican los diferentes objetos de un 
sistema a lo largo del tiempo. Funciona como una tabla donde el eje horizontal 
muestra a los objetos involucrados y el eje vertical representa el paso del 
tiempo. Cada objeto tiene una "línea de vida", que es una línea vertical 
punteada que indica su existencia, y un "foco de control", que es un 
rectángulo delgado que señala el periodo exacto en que el objeto está 
trabajando o ejecutando una acción. Estos objetos se comunican entre sí usando 
"mensajes", representados por diferentes tipos de flechas. Existen los 
mensajes síncronos, en los cuales el objeto que envía la petición se queda 
totalmente bloqueado esperando una respuesta, y los mensajes asíncronos, que 
terminan inmediatamente y crean un nuevo camino de ejecución sin esperar. 
Además, el diagrama permite dibujar flechas especiales para indicar cuándo un 
objeto es creado o cuándo es destruido permanentemente. Para situaciones más 
avanzadas, se utilizan los "fragmentos combinados", que son recuadros 
especiales que agrupan procesos bajo ciertas reglas. Por ejemplo, el operador 
"alt" sirve para decidir entre dos caminos posibles de acción, el "loop" se 
usa para repetir un proceso varias veces, el "par" hace que diferentes tareas 
sucedan al mismo tiempo de forma paralela, y el "ref" permite vincular y 
hacer referencia a la información de un diagrama totalmente distinto. En 
conclusión, este diagrama es esencial porque baja al detalle técnico de cómo 
se debe programar el sistema paso a paso, mostrando exactamente la lógica de 
los mensajes intercambiados.

### Preguntas
Pregunta 1: ¿Por qué es necesario que en un mensaje síncrono el sistema se quede esperando en lugar de seguir trabajando?
Pregunta 2: ¿Cuál es la diferencia exacta entre usar el operador "alt" y el operador "opt" dentro de los fragmentos combinados?

---

## Lectura 10: Álgebra relacional, SQL básico y funciones agregadas

### Resumen
SQL es el lenguaje universal para bases de datos, encargado de traducir la lógica 
matemática del álgebra relacional en comandos prácticos.  
La estructura básica utiliza SELECT para elegir las columnas (proyección), FROM 
para definir las tablas y WHERE para aplicar condiciones (selección). Además de 
mostrar datos crudos, SQL permite resumir grandes volúmenes de información usando 
funciones agregadas como SUM (sumar), AVG (promedio), MIN (mínimo), MAX (máximo) 
y COUNT (contar renglones). Cuando se usan estas funciones para agrupar 
resultados por categorías, es obligatorio utilizar la cláusula GROUP BY. Si 
después se necesita filtrar esos grupos ya calculados, se usa la cláusula HAVING, 
ya que el WHERE no funciona con funciones agregadas.  
Por otro lado, cuando la información está repartida en varias tablas, SQL utiliza 
cláusulas de unión (JOIN). El INNER JOIN es el más común y une los registros que 
tienen coincidencias exactas en ambas tablas. Si se necesita ver toda la 
información de un lado aunque no tenga coincidencias en el otro, se utilizan los 
LEFT o RIGHT JOIN. También existen cruces especiales como el CROSS JOIN, que 
mezcla todos los registros de una tabla contra todos los de la otra, y el SELF 
JOIN, una técnica donde una tabla se relaciona consigo misma, ideal para casos 
donde, por ejemplo, los empleados y sus jefes están guardados en la misma tabla.

### Preguntas
Pregunta 1: ¿Por qué es obligatorio usar la palabra HAVING en lugar de WHERE cuando queremos filtrar los resultados de una suma o un promedio?
Pregunta 2: Si usamos un LEFT JOIN y algunos registros de la tabla izquierda no encuentran pareja en la derecha, ¿qué datos pone el sistema en esos espacios vacíos?
Pregunta 3: En un SELF JOIN, ¿cómo sabe exactamente la base de datos diferenciar las columnas si estamos cruzando la tabla consigo misma?

---

## Lectura 11: Metodología para diseñar casos de pruebas a partir de casos de uso

### Resumen
En el desarrollo de software, probar que un programa funcione suele ser difícil 
y costoso si se deja para el final. Para evitar retrasos y fallas, la lectura 
propone usar una metodología basada en los "casos de uso" para crear los casos 
de prueba desde el principio del proyecto. Un caso de uso es simplemente una 
descripción clara de cómo interactúa un usuario, u otro sistema, con nuestro 
programa para lograr algo específico. La parte más importante de un caso de uso 
es su "flujo de eventos", que cuenta la historia paso a paso de lo que pasa en 
el sistema y se divide en dos: el flujo básico, que ocurre de forma normal 
cuando todo sale bien, y los flujos alternativos, que son excepciones o 
"desvíos" para cuando hay opciones distintas o suceden errores. Si combinamos 
el camino del flujo básico con estos desvíos, obtenemos diferentes "escenarios", 
que representan todos los caminos completos y reales que puede tomar el usuario. 
A partir de estos escenarios, podemos crear los casos de prueba siguiendo tres 
pasos. Primero, se hace una tabla listando todos los escenarios posibles que 
salieron del caso de uso. Segundo, se definen qué condiciones se necesitan para 
probar cada escenario, utilizando una tabla donde se marca simplemente si los 
datos requeridos serán válidos o inválidos, asegurando que se evalúen tanto los 
casos donde todo funciona como los escenarios de error. Tercero, se cambian 
esas marcas de válido o inválido por datos reales y específicos que se 
ingresarán para ejecutar la prueba final en el sistema. En conclusión, usar 
este método paso a paso permite a los evaluadores comenzar a trabajar desde 
las primeras etapas, encontrando errores a tiempo, facilitando el trabajo y 
asegurando que el programa haga exactamente lo que se le pidió.

### Preguntas
Pregunta 1: ¿Qué regla determina si un flujo alternativo debe regresar al flujo básico o si debe terminar el caso de uso por completo?
Pregunta 2: ¿Cómo sabemos con exactitud si hemos puesto las suficientes condiciones inválidas en la tabla para considerar que la prueba está completa?

---

## Lectura 12: Consultas en SQL Usando Roles y Consultas

### Resumen
En bases de datos, a veces necesitamos que una misma tabla participe varias 
veces en una sola consulta, ya sea para comparar sus propios datos o porque 
cumple más de un papel al mismo tiempo, como una tabla de empleados donde se 
mezclan trabajadores y jefes.  Para que el 
sistema no se confunda al leer la misma tabla dos veces, SQL permite usar 
"alias", que son apodos temporales que se le asignan a la tabla para 
diferenciar cada papel exacto que está jugando. También se pueden crear 
"sinónimos", que son nombres alternativos permanentes guardados en la base de 
datos para no tener que escribir el alias cada vez. Por otro lado, la lectura 
explica las "subconsultas", que consisten en meter una consulta pequeña dentro 
de una consulta principal más grande.  
Esto es muy útil cuando el resultado que buscamos depende de un cálculo o 
filtro previo. Por ejemplo, si queremos saber qué productos nunca se han 
vendido, primero hacemos una subconsulta para obtener la lista de lo que sí se 
vendió, y la consulta principal filtra los que definitivamente no estén en esa 
lista. Para conectar ambas partes, SQL utiliza operadores especiales como "IN" 
para revisar si un dato pertenece a la lista generada, o "EXISTS" para 
verificar de forma rápida si la subconsulta encontró o no algún resultado 
válido. También es posible usar una subconsulta para calcular un total y 
compararlo contra un número fijo. Básicamente, estas herramientas permiten 
resolver preguntas de negocio complejas cruzando la información de una tabla 
consigo misma o encadenando preguntas por niveles.

### Preguntas
Pregunta 1: ¿Cuál es la ventaja técnica de crear un sinónimo permanente en lugar de simplemente usar alias temporales en cada consulta?
Pregunta 2: ¿En qué situaciones prácticas es mejor utilizar el operador NOT EXISTS en lugar del operador NOT IN al armar una subconsulta?