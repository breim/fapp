angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};


  $scope.categories = [{name: 'Aparthigh', cat: 'Aparthigh'},
                      {name: 'Amauter'},
                      {name: 'BBW'},
                      {name: 'BonerMaterial'},
                      {name: 'Bigtitssmalltits'},
                      {name: 'bimbofetish'},
                      {name: 'AsianHotties'},
                      {name: 'asiangirls'},
                      {name: 'BABES4PORN'},
                      {name: 'Bottomless_Vixens'},
                      {name: 'BustyPetite'},
                      {name: 'candidfashionpolice'},
                      {name: 'celebNSFW'},
                      {name: 'Blondes'},
                      {name: 'brunette'},
                      {name: 'brunettes'},
                      {name: 'ChristianGirls'},
                      {name: 'classicscreenbeauties'},
                      {name: 'curls'},
                      {name: 'curvy'},
                      {name: 'DarkAngels'},
                      {name: 'diorabaird'},
                      {name: 'DSLs'},
                      {name: 'GarterBelts'},
                      {name: 'Ginger'},
                      {name: 'GirlswithGlasses'},
                      {name: 'gonewild'},
                      {name: 'gonewildcolor'},
                      {name: 'gonewildplus'},
                      {name: 'gravure'},
                      {name: 'GroupOfNudeGirls'},
                      {name: 'hairbra'},
                      {name: 'hegre'},
                      {name: 'Horny_Porn_Pics'},
                      {name: 'hot_pics'},
                      {name: 'hub_porn'},
                      {name: 'indianbabe'},
                      {name: 'iWantToFuckHer'},
                      {name: 'jenniejune'},
                      {name: 'jordancarver'},
                      {name: 'just18'},
                      {name: 'LegalTeens'},
                      {name: 'Legsup'},
                      {name: 'lingerie'},
                      {name: 'MetArt'},
                      {name: 'milf'},
                      {name: 'NotSafeForNature'},
                      {name: 'nsfw'},
                      {name: 'NSFWblogs'},
                      {name: 'nsfwoutfits'},
                      {name: 'nude'},
                      {name: 'OnOff'},
                      {name: 'palegirls'},
                      {name: 'PetitePorn'},
                      {name: 'PhotoShopBattlesNSFW'},
                      {name: 'Playboy'},
                      {name: 'Porn_beauty'},
                      {name: 'Porn_imgur'},
                      {name: 'ravenhaired'},
                      {name: 'RealGirls'},
                      {name: 'redhead'},
                      {name: 'redheads'},
                      {name: 'seethru'},
                      {name: 'sexyfrex'},
                      {name: 'SexyGirlsInBoots'},
                      {name: 'SexyGirlsInJeans'},
                      {name: 'shewantstofuck'},
                      {name: 'slingbikini'},
                      {name: 'stockings'},
                      {name: 'SuicideGirls'},
                      {name: 'Thick'},
                      {name: 'thinspo'},
                      {name: 'tightdresses'},
                      {name: 'twingirls'},
                      {name: 'Unashamed'},
                      {name: 'Upskirt'},
                      {name: 'voluptuous'},
                      {name: 'womenofcolor'},
                      {name: 'womenofcolour'},
                      {name: 'workgonewild'},
                      {name: 'WtSSTaDaMiT'},
                      {name: 'xsmallgirls'}];


})

.controller('PhotosCtrl', function($scope, $http, $stateParams) {

    var category = $stateParams.category;
    if (category == null || category == ''){
      category = "nsfw";
    }
    $scope.category = category;

    var nextPage = 0;
    $scope.photos = [];

    $scope.loadMore = function() {
      $http.get('https://fappedia.herokuapp.com/api/v1/photos?category=' + category + '&page=' + nextPage).then(function(response) {
        nextPage++;
        $scope.photos = $scope.photos.concat(response.data.data);
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };
})




.controller('PhotoCtrl', function($scope, $stateParams) {
  $scope.hash = $stateParams.hash;
  $scope.ext = $stateParams.ext
});
