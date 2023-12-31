// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: 'AIzaSyDRFn-PWPYnkrfyo52X-0f6K6Of_cMuSsI',
    authDomain: 'pula-nala-web-portal.firebaseapp.com',
    projectId: 'pula-nala-web-portal',
    storageBucket: 'pula-nala-web-portal.appspot.com',
    messagingSenderId: '620045127664',
    appId: '1:620045127664:web:7ca9bc51bd58fab169d735'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
