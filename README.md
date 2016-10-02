## Laravel with Angular 2 and AdminLTE example project.
Angular2 RC.6
Laravel 5.2
AdminLTE 2
## Installation:

```
composer install
npm install
```
Create `.env` file (can be based on `.env.example`
```
php artisan key:generate
```

## Building

```
gulp
```

## Watching

```
gulp watch
```

Note: can be some problems with `gulp watch` when command is calling from `Homestead VM`

## Server

```
php artisan serve
```
## Go!

```
http://localhost:8000
http://localhost:8000/#/  --> login page
http://localhost:8000/#/register  --> register page
http://localhost:8000/#/dashboard/home  --> home page
http://localhost:8000/#/dashboard/blankpage  --> login page
```

## Info

## To include component template to the component use following code:
```ts
'template': require('./first.template.html'),
```
