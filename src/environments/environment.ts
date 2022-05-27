// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  swal: {
    confirmButtonColor: '#FDDD35',
    background: '#0E1414',
    color: '#fff',
    cancelButtonColor: '#ED5656'
  },

  // UPDATE YOUR SUPABASE CREDENTIALS
  supabase: {
    url: "",
    key: ""
  },
};

// Don't use these credentials - better use your own :)
// url: "https://tthentnnqdrbtrofchjj.supabase.co",
// key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aGVudG5ucWRyYnRyb2ZjaGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA5NzUwOTUsImV4cCI6MTk2NjU1MTA5NX0.EjUMrxW_TwOW6GiCorGDOZAUORGsKI-UXUJl3fmzOTU"


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
