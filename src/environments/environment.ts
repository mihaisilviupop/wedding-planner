// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDIQVmCYNuhqSYn4X4Yaj-mtWglioY8jR4",
    authDomain: "plan-nunta.firebaseapp.com",
    databaseURL: "https://plan-nunta.firebaseio.com",
    projectId: "plan-nunta",
    storageBucket: "plan-nunta.appspot.com",
    messagingSenderId: "776846804690"
  }
};
