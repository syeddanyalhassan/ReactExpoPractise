<h1>Gadgets Selling App: React Native Expo, Stripe, Supabase & NextJs</h1>

Commands

npx create-expo-app@latest -t

npx expo install react-dom react-native-web @expo/metro-runtime

npm install --save-dev metro

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

package.json

  "main": "expo-router/entry",

In App.json

"scheme":"gadget-app",

---

When you dont have babel installed

npm install --save-dev @babel/preset-react

and then go to babel.config.js and add this

module.exports=function(api){
    api.cache(true);
    return {
      presets:['babel-preset-expo'],   
    };
};

---

Install ES7+ React/Redux/React-Native snippets extension

type rnfes under src->index.js

a boiler plate code will be pasted

------

Make sure to have the following available in Environment variables before proceeding with connecting 

ANDROID_HOME C:\Users\danyal.hassan\AppData\Local\Android\Sdk\

Then add following in PATH

%ANDROID_HOME%\platform-tools;
%ANDROID_HOME%\tools;
%ANDROID_HOME%\build-tools;
D:\AndroidStudio\bin