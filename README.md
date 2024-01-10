This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started**

## Paso 1: Instalar las dependencias.

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

Primero,  se deberan instalar las dependencias del package.json 

## Paso 2: Iniciar el servidor de metro.

Segundo, debera iniciar el servidor de  **Metro**, 

Para inciar Metro , En una terminal que apunte a la raiz del proyecto ejecutar alguno de los siguientes comandos segun sea el caso. 

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Iniciar la aplicacion.

para iniciar la aplicacion ejecutar el siguiente comando.


```bash
# using npm
npm run android
```

Si todo está configurado correctamente, debería ver su nueva aplicación ejecutándose en su Emulador de Android en breve, siempre que haya configurado su emulador/simulador correctamente.

## Optional

Tambien se puede crear una APK bundle desde android studio

## Step 1: Abrir android studio en la version mas reciente.

## Step 2: Seleccionar y abrir el proyecto (carpeta android).

## Step 3: En la terminal, Ejecutar el siguiente comando en la raiz del proyecto. 

###

```bash
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

```
###

## Step 4: Ir y seleccionar la opcion que esta en el menu:  Build -> Build bundle(s) / APK -> Build APK(s).

## Step 5: Buscar en la carpeta correspondiente el APK: BlogApp\android\app\build\outputs\apk\debug.

## Step 6: instalar en un dispositivo android, se recomienda que tenga android 13.



