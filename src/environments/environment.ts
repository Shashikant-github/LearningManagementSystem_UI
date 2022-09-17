// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //https://localhost:5001/api/v1.0/lms/Company/
  user_api_url:'https://shashi-lms-user.azurewebsites.net/api/v1.0/lms/Company/',
  //https://localhost:5011/api/v1.0/lms/Courses/
  course_api_url:'https://shashi-lms-courses.azurewebsites.net/api/v1.0/lms/Courses/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
