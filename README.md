# Growth Engineering - Technical Assignment

Congratulations on making it this far! During your next interview, please be prepared to show and run the program(s).

### What's in this repo?

This repo contains an [Angular 12](https://angular.io/docs) custom web-app to simulate user interactions with a real website. 
It includes several views and all the front-end logic needed.
It can register two types of events:
- Page views
- Form submissions

You are not required to know how to use Angular, therefore no front-end coding is required. Feel free to play with
the code and upgrade some components/services if needed though.







## Objective

The main objective is to enrich Hubspot contacts with website data and compute custom properties if needed. To do so, you will need:
- Supabase project (more details on set up section)
- Hubspot developer account
- Data extraction tool

Full data workflow will look like this:
> Web-app > Data Base > Extraction Tool > Hubspot

### App event simulation
In the app you will find white buttons on both bottom sides of the screen:
- `Refresh anon id`: each id represents a different website visitor. Every time you click the button, a new one
  will be generated and stored in local storage.
- `Page view`: it will register a page view event for the visitor (current anonymous id) on every click. It takes the current
  url automatically.

You will also find some forms (contact and request demo). When submitted, an event will be created in your DB.


### Extraction Tool
As long as you can read from your DB and process and send data into Hubspot, feel free to use any extraction tool you want: 
create your own with SQL, Python, TypeScript..., or use an already available tool such as 
[High Touch](https://hightouch.io/), [Census](https://www.getcensus.com/)...





## Set up

Before you start with the setup, you will need NodeJS installed: [https://nodejs.org/en/](https://nodejs.org/en/)
1. Clone this repo in a local directory, open a terminal there and run `npm run install`.
2. The app currently expects a [Supabase](https://supabase.com/) project to act as a DB. 
You can create it with your own account for free.
Once created, still on [app.supabase.io](https://app.supabase.io/), on the left side menu navigate to the `API > Authentication`. There, on the right side you will find your Supabase Client Key (a very long random string) and your Supabase URL
(something like `https://xxxxxxxxxxx.supabase.co`).
3. Copy and paste these credentials into your local app `src/environments/environtment.ts`.
4. Back to Supabase, navigate to the table editor (left side menu) and create 2 tables called:
   - `page_views` - add the following columns:
     - anon_id
     - href
   - `form_submissions` - add the following columns:
     - anon_id
     - form
     - email
     - message
     - domain
     - product
     - company

5. Finally, back to your terminal, simply run `ng serve --open` and your default browser will open automatically.







## Assignment

#### Environment set up
1. Run the app locally 
2. Successfully register events in your DB

#### Data processing
3. Create and update Hubspot contacts 

Bonus:
- With the available data, create some Hubspot custom properties that may be useful for audience generation 
(you can create or update events if you need to).
- Suggest any extra event that would be useful to track from a marketing point of view (no need to implement it).





### Disclaimer

We have integrated Supabase in the app since it is a ready-to-use free DB. If you are more comfortable using
a different platform (Firebase, Aiven...), feel free to integrate it in the app. 

--- 

Some of these tools and concepts might be now for you, so if you get stuck or have any question, please do not hesitate to email us.
