# PrimeraPrueba
Prueba de Admon de BDD

Esta aplicación se genera mediante la CLI de LoopBack 4 con el diseño del proyecto inicial .
Instalar dependencias
De forma predeterminada, las dependencias se instalaron cuando se generó esta aplicación. Siempre que package.jsonse cambien las dependencias en , ejecute el siguiente comando:

npm install
Para instalar solo dependencias resueltas en package-lock.json:

npm ci
Ejecutar la aplicación
npm inicio
También puede ejecutar node .para omitir el paso de compilación.

Abra http://127.0.0.1:3000 en su navegador.

Reconstruir el proyecto
Para construir el proyecto de forma incremental:

npm ejecutar compilación
Para forzar una compilación completa limpiando los artefactos almacenados en caché:

npm ejecutar limpio
npm ejecutar compilación
Solucionar problemas de formato y estilo de código
Si eslinty prettierestán habilitados para este proyecto, puede usar los siguientes comandos para verificar el estilo del código y los problemas de formato.

npm ejecutar pelusa
Para solucionar automáticamente estos problemas:

npm ejecutar lint: arreglar
Otros comandos útiles
npm run migrate: Migrar esquemas de base de datos para modelos
npm run openapi-spec: Generar especificaciones de OpenAPI en un archivo
npm run docker:build: Crea una imagen de Docker para esta aplicación
npm run docker:run: Ejecute esta aplicación dentro de un contenedor Docker.
Pruebas
prueba npm
Que sigue
Consulte la documentación de LoopBack 4 para comprender cómo puede continuar agregando funciones a esta aplicación.
