/**
 * Created by MrHai on 2016/3/23.
 */
angular.module('zjfae.controllers',[])
  .controller('ForumCtrl',function($scope,Banners,ForumInfo,$ionicSlideBoxDelegate,$ionicLoading,$timeout){
    var promise = Banners.all(); //获得承诺接口
    var promiseF = ForumInfo.all(); //获得承诺接口
    $ionicLoading.show({
      template: '玩命加载中...'
    });
    promise.then(function (data) {  // 成功回调
      $scope.banners = data;
      $ionicSlideBoxDelegate.$getByHandle("banners").update();
      $ionicSlideBoxDelegate.loop(true);
      $ionicLoading.hide();
    });

    promiseF.then(function (data) {  // 成功回调
      $scope.forums = data;
      $ionicLoading.hide();
    });

    //幻灯片返回处理
    $scope.$on('$ionicView.loaded', function () {
      var _timer;
      $scope.$on('$ionicView.enter', function () {
        if ($ionicSlideBoxDelegate.currentIndex() !== 0)
          _timer = $timeout(function () {
            $ionicSlideBoxDelegate.next();
          }, 4000);
      });
      $scope.$on('$destroy', function () {
        $timeout.cancel(_timer);
      });
    });
  })
  .controller('ForumNoteCtrl',function($scope,$ionicLoading,ForumNote){
    var promise = ForumNote.all(); //获得承诺接口
    $ionicLoading.show({
      template: '玩命加载中...'
    });
    promise.then(function (data) {  // 成功回调
      $scope.forumNote = data;
      $ionicLoading.hide();
    });
  })
  .controller('ForumNoteSpeakCtrl',function($scope,$ionicLoading,ForumInfo,$stateParams){
    var promise = ForumInfo.get($stateParams.noteId); //获得承诺接口
    $ionicLoading.show({
      template: '玩命加载中...'
    });
    promise.then(function (data) {  // 成功回调
      $scope.forumNote = data;
      $ionicLoading.hide();
    });
  })
  .controller('moreActivityCtrl', function ($scope,$ionicLoading,ActivityInfo) {
    defrAllByActivity(ActivityInfo,$ionicLoading,$scope);
  })
  .controller('NewsCtrl', function ($scope,$ionicLoading,News) {
    defrAllByNews(News,$ionicLoading,$scope);
  })
  .controller('AddServiceCtrl', function ($scope, MadebyProducts) {
    $scope.madebyProducts = MadebyProducts.all();
  })
  .controller('ContactCtrl', function ($scope) {
  })
  .controller('FeedbackCtrl', function ($scope) {
  })
  .controller('BackCtrl',function($scope, $ionicNavBarDelegate){

    $scope.goBack = function() {
      $ionicNavBarDelegate.back();
    };
  })
  .controller('GiveEncourageCtrl', function ($scope, $ionicPlatform) {
    window.callActivityPlugin = function () {
      navigator.intent.demo('NDljY2E1ZGM4NzUzM2U3Yg==,order,5740');
    }
    $scope.$on('$ionicView.afterEnter', function () {
      $ionicPlatform.ready();
      init();
    });
    var init = function () {
      console.log("phonegap init!!");
      //document.addEventListener("deviceready", onDeviceReady, true);
      $scope.come = onDeviceReady();
    }
    var onDeviceReady = function () {
      console.log("deviceready event fired");
      window.callActivityPlugin();
    };
  });
function defrAllByNews(promiseObj,$ionicLoading,$scope) {
  var promise = promiseObj.all();
  $ionicLoading.show({
    template: '玩命加载中...'
  });
  promise.then(function (data) {  // 成功回调
    $scope.newsInfo = data;
    $ionicLoading.hide();
  });
}
function defrAllByActivity(promiseObj,$ionicLoading,$scope) {
  var promise = promiseObj.all();
  $ionicLoading.show({
    template: '玩命加载中...'
  });
  promise.then(function (data) {  // 成功回调
    $scope.activityInfo = data;
    $ionicLoading.hide();
  });
}
