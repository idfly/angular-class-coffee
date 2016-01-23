Angular Class
=============

Coffeescript classes support for angular. Makes possible to use coffescript
classes instead of callbacks in angular.


Features
--------

  * Classes are simpler than large callbacks
  * Controllers/resources can be inherited; it is usefull for deduplication
  * It is easier to isolate classes and to do unit-testing


Installation
------------

`npm install angular-class-coffee --save`

Example
-------

```
app.controller(($scope, $http) ->
  $http
    .get('/api/status')
    .then((response) ->
      $scope.status = response.result
    )
)
```

->

```
class MyApp.StatusController < IdFly.AngularClass

  @_import: [
    '$scope',
    '$http',
  ]

  @initialize: () ->
    @_http.get('/api/status').then(@_setStatus)

  @_setStatus: (response) =>
    @_scope.status = response.result
```


License
-------

MIT