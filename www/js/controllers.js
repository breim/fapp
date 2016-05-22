angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicScrollDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop(true);   
  };

  $scope.categories = [{name: 'Aparthigh', translate: 'Pernas abertas'},
                      {name: 'AmateurArchives', translate: 'Amadoras'},
                      {name: 'BBW', translate: 'Gordas'},
                      {name: 'BonerMaterial', translate: 'Para gozar'},
                      {name: 'Bigtitssmalltits', translate: 'Peitos grandes e pequenos'},
                      {name: 'AsianHotties', translate: 'Asiáticas quentes'},
                      {name: 'asiangirls', translate: 'Asiáticas'},
                      {name: 'BABES4PORN', translate: 'Novinhas'},
                      {name: 'Bottomless_Vixens', translate: 'Megera'},
                      {name: 'BustyPetite', translate: 'Peitudas atraentes'},
                      {name: 'celebNSFW', translate: 'Celebridades'},
                      {name: 'Blondes', translate: 'Loiras' },
                      {name: 'brunette', translate: 'Morenas' },
                      {name: 'ChristianGirls', translate: 'Cristã' },
                      {name: 'curls', translate: 'Cabelos cacheados'},
                      {name: 'curvy', translate: 'Curvas'},
                      {name: 'DarkAngels', translate: 'Negras'},
                      {name: 'GarterBelts', translate: 'Meia calça'},
                      {name: 'Ginger', translate: 'Ruiva'},
                      {name: 'GirlswithGlasses', translate: 'Óculos'},
                      {name: 'gonewild', translate: 'Enlouqueceu'},
                      {name: 'gonewildcolor', translate: 'Enlouqueceu negra'},
                      {name: 'gonewildplus', translate: 'Enlouqueceu gorda'},
                      {name: 'gravure', translate: 'Japonesas'},
                      {name: 'GroupOfNudeGirls', translate: 'Garotas peladas em grupo'},
                      {name: 'hairbra', translate: 'Cabelos longos'},
                      {name: 'hegre', translate: 'Hegre Art'},
                      {name: 'iWantToFuckHer', translate: 'Eu quero foder ela'},
                      {name: 'just18', translate: '18 anos'},
                      {name: 'LegalTeens', translate: 'Novinhas dentro da lei'},
                      {name: 'Legsup', translate: 'Pernas para cima'},
                      {name: 'lingerie', translate: 'Lingerie'},
                      {name: 'MetArt', translate: 'Metart'},
                      {name: 'milf', translate: 'Mãe'},
                      {name: 'NotSafeForNature', translate: 'Natureza'},
                      {name: 'nsfw', translate: 'Não seguro para o trabalho'},
                      {name: 'nsfwoutfits', translate: 'Com roupa de trabalho'},
                      {name: 'nude', translate: 'Nudes'},
                      {name: 'OnOff', translate: 'OnOff'},
                      {name: 'palegirls', translate: 'Branquinhas'},
                      {name: 'PetitePorn', translate: 'Baixinhas'},
                      {name: 'ravenhaired', translate: 'Cabelos escuros'},
                      {name: 'RealGirls', translate: 'Garotas reais'},
                      {name: 'redhead', translate: 'Ruivas'},
                      {name: 'seethru', translate: 'Roupa transparente'},
                      {name: 'sexyfrex', translate: 'Sardas'},
                      {name: 'SexyGirlsInBoots', translate: 'Botas'},
                      {name: 'SexyGirlsInJeans', translate: 'Jeans'},
                      {name: 'shewantstofuck', translate: 'Ela quer transar'},
                      {name: 'slingbikini', translate: 'Sling bikini'},
                      {name: 'stockings', translate: 'Meias'},
                      {name: 'SuicideGirls', translate: 'SuicideGirls'},
                      {name: 'Thick', translate: 'Gordinhas'},
                      {name: 'tightdresses', translate: 'Vestido'},
                      {name: 'twingirls', translate: 'Gêmeas'},
                      {name: 'Unashamed', translate: 'Sem vergonha'},
                      {name: 'Upskirt', translate: 'Saia levantada'},
                      {name: 'xsmallgirls', translate: 'Muito magras'}];


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
