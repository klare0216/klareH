
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
    {name:'About KlareH', enable:'f'},
    {name:'Projects', enable:'f'},
    {name:'Works', enable:'t'},
    {name:'Blogs', enable:'f'},
    {name:'News', enable:'t'}
  ];
});

app_main.config(function($routeProvider) {
  $routeProvider.when("/",{ templateUrl : "news.html"})
                .when("/About KlareH",{ templateUrl : "about_kh.html"})
                .when("/Projects",{ templateUrl : "projects.html"})
                .when("/Works",{ templateUrl : "works.html"})
                .when("/Blogs",{ templateUrl : "blogs.html"})
                .when("/News",{ templateUrl : "news.html"});
});
