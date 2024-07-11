# node-ts-multiplication


Este proyecto es una aplicación Node.js escrita en TypeScript que genera tablas de multiplicar.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal: npm i

## uso

Para ejecutar la aplicación, utiliza el siguiente comando:npm run dev

## argumentos
La aplicación acepta los siguientes argumentos:
-b (obligatorio): Especifica la base de la tabla de multiplicar.
-l (opcional): Define el límite de la multiplicación. Por defecto es 10.
-s (opcional): Si se incluye, muestra la tabla en la consola.

Ejemplo
Para generar una tabla de multiplicar con base 5 hasta el número 12, y mostrarla en consola, ejecutarías:

npm run dev -- -b 5 -l 12 -s