### Pre-requisites

1. Insall node, you can download node [here](https://nodejs.org/en), or if on MacOS you can opt into using [nvm](https://github.com/nvm-sh/nvm) 

2. Download the ionic tools 

```console
npm install -g @ionic/cli native-run cordova-res
```

### Running the app on the web

1. Install the dependecies on your local machine 

```console
npm install
```

2. Start the ionic server

```console
ionic serve
```

### Building Android and IOS apps

1. Before you build your android and ios apps make sure to sync you web app with them:
```console
ionic capacitor sync android
ionic capacitor sync ios
```
2. To build the apps run:

```console
npx cap add android
npx cap add ios
```

### Running android app on emulator

To run the app in Android Studio run:

1. Run 

```console
npx cap open android
```

2. Open the emulator and let it boot (Make sure the android app has full booted)
3. Press the play button and let it happen!!
