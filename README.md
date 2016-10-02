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

## Info

## To include component template to the component use following code:
```ts
'template': require('./first.template.html'),
```
