
// 操作list的連結、list的資料等等
var app_main = angular.module('main', ['ngRoute']);

app_main.filter('isEnable', function() {
    return function(x) {
        var ret = [];
        for (var i = 0; i < x.length; i++) {
            if (x[i].enable != 't') {
                continue;
            }
            ret.push(x[i]);
        }
        return ret;
    };
});



app_main.controller('list', function($scope){
  $scope.branches = [
    {name:'About KlareH', style:'0', enable:'f'},
    {name:'Projects', style:'2', enable:'f'},
    {name:'Works', style:'0', enable:'t'},
    {name:'Notes', style:'4', enable:'t'},
    {name:'Blogs', style:'5', enable:'f'},
    {name:'Update Log', style:'6', enable:'t'}
  ];
});

function tmp(){
  console.log('tmp');
}

function rect_change(i) {
  console.log("rect_change");

}



app_main.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/About KlareH/:param",{ templateUrl : "about_kh.html", controller: 'change_bg'})
                .when("/Projects/:param",{ templateUrl : "projects.html", controller: 'change_bg'})
                .when("/Works/:param",{
                  templateUrl : "works.html",
                  controller: 'change_bg'
                })
                .when("/Blogs/:param",{ templateUrl : "blogs.html", controller: 'change_bg'})
                .when("/Update Log/:param",{
                  templateUrl: "news.html",
                  controller: 'change_bg',
                })
                .when("/Notes/:param",{
                  templateUrl: "notes.html",
                  controller: 'change_bg',
                })
                .otherwise({
                    redirectTo: '/'
                });
}]);
