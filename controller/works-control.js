// 操作works block的顯示
app_main.controller('works', function($scope, $routeParams){
  $scope.works = [
    {i: 0, src: 'https://images.plurk.com/3RGeyEyWHjSkMDpwuw3Q.png', text: '綠頭鴨'},
    {i: 1, src: 'https://images.plurk.com/1d1qpyrgcfzQoq8puw3Q.png', text: '小黃鴨'},
    {i: 2, src: 'https://images.plurk.com/nXABA7qWtzWWsJvbuw3Q.png', text: '大象'},
    {i: 3, src: 'https://images.plurk.com/5xLtDwqvhyQ6Um3yuw3Q.png', text: '樹懶'},
    {i: 4, src: 'https://images.plurk.com/6xODq1PljqoXl173uw3Q.png', text: '胖鴨'},
    {i: 5, src: 'https://images.plurk.com/38Oxme2SV7MGmV9Huw3Q.png', text: 'H兔玩偶'}
  ];
  $scope.show = $routeParams.param;
});
