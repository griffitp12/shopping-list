This app was created during my time as a student at Code Chrysalis

# Shopping List -  a simple, fullstack shopping list tool.

**Shopping List** does everything you might want a shopping list to do and little else. You can add items to your shopping list persistently (i.e. they are saved to a database and available to you the next time you open the app). You can cross off items when they are poppd into your groceery cart, and you can delete items. 

Note: **Shopping List** was built with mobile users in mind, and probably looks quite silly on a desktop.

## Built With

* [Vuex](https://vuejs.org) for the UI
* [Knex](http://knexjs.org) Query Builder
* [ApolloServer](https://www.apollographql.com) Serves queries
* [Graphql](https://graphql.org) API Queries
* [Postgres](https://www.postgresql.org) Database

## Overall repo structure
* Configuration files are in the `root` folder.
* Initial seeding data (in a JSON file) is located in the `data` folder. This is only for testing, and never runs automatically
* In the `migrations` folder is the initial PSQL database migration (it's a very simple database)
* In the `server` folder are located all the files necessary to the back-end node server
* In the `src` file are located all the source files related with the `client` 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Everything you need is in the package.json, so just a basic install from your package manager of choice will suffice:

```
npm install
```

Next, create a .env file in the root directory and populate it with the following:

** FOR WINDOWS USERS **

```
DB_NAME= // your database name
DB_USER=postgres
DB_PW=// your postgres password
DB_HOST=localhost
```

** FOR MAC USERS **

```
DB_NAME= // your database name
DB_USER=// your postgres username
DB_PW=// your postgres password
DB_HOST=localhost
```

Head over to your postgres terminal and create a local database with whatever name you entered for DB_NAME in your .env file, and then run

```
npm run migrate
```

You can then start the two dev servers (in separate terminals):

```
npm run frontServe
npm run backServe
```

And then open your localhost8080 to see the site in action!

Note: the servers will automatically run a migration.

## Deployment

I deployed with Heroku. 
Should you want to deploy the app on Heroku servers, I recommend installing the Heroku CLI.
Please refer to the official Heroku help page for further details:
<https://devcenter.heroku.com/articles/git>

```
npm install heroku
```

Additionally, Heroku Postgres is a prerequisite for hosting over there.


## Contributing

Should you want to contribute:
* please fork and clone the repo on your machine
* Create an "issue" to describe what you want to work on
* Submit a pull request.

Many thanks!

## Author

* [Pete](https://github.com/griffitp12)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Helpful links
* Alligator logo found on <http://clipart-library.com/clipart/8cG6L6dki.htm>




