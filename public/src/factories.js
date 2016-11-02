angular.module('SenderEngine')
    .factory ('Home', function($resource){
        return $resource('api/home');
    })
    // .factory ('Erga', function($resource){
    //     return $resource('api/erga');
    // })
;
