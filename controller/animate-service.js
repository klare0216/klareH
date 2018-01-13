app_main.controller('change_bg', function($scope, $routeParams, animate){
  console.log($routeParams);
  var i = $routeParams;
  animate.rect_change(i.param);
});

app_main.service('animate', function(){
  this.rect_change = function(i){

    var palette = [ {bg: '#db7b48', rect:'#ffffff'},
                    {bg: '#755741', rect:'#c4c141'},
                    {bg: '#755741', rect:'#c4c141'},
                    {bg: '#3b6055', rect:'#c4c141'},
                    {bg: '#342d3c', rect:'#78c698'}];

    d3.select('#rect')
      .transition()
      .delay(400)
      .duration(400)
      .style('fill', palette[i%palette.length].rect);

    d3.select('body')
      .transition()
      .delay(500)
      .duration(500)
      .style('background-color', palette[i%palette.length].bg);
  }
});
