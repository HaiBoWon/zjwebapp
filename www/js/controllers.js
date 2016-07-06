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
    $scope.somePlaceholder="";
    $scope.showbox = false;
    $scope.showBox = function () {
      $scope.showbox = true;
      $scope.somePlaceholder="请输入内容";
    };
    $scope.hideBox=function(){
      $scope.showbox = false;
    };
    $scope.showReplyBox=function(){
      $scope.showbox = true;
      $scope.somePlaceholder="回复小财主"
    }

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
  .controller('ActivityCenterCtrl', function ($scope,$ionicLoading,ActivityInfo) {
    var promise = ActivityInfo.all();
    $ionicLoading.show({
      template: '玩命加载中...'
    });
    promise.then(function (data) {  // 成功回调
      $scope.activityInfo = data;
      $ionicLoading.hide();
    });
  })
  .controller('NewsCtrl', function ($scope,$ionicLoading,News) {
    var promise = News.all();
    $ionicLoading.show({
      template: '玩命加载中...'
    });
    promise.then(function (data) {  // 成功回调
      $scope.newsInfo = data;
      $ionicLoading.hide();
    });
  })
  .controller('AddServiceCtrl', function ($scope, MadebyProducts) {
    $scope.madebyProducts = MadebyProducts.all();
  })
  .controller('ContactCtrl', function ($scope) {
  })
  .controller('FeedbackCtrl', function ($scope,FeedBack,$ionicPopup) {
    $scope.formData={};
    $scope.addFeedBack=function(){
      if(!$scope.formData.content){
        $ionicPopup.alert({title:'请填写反馈内容'});
        return;
      }
      if(!!$scope.formData.phone&&!checkPhone($scope.formData.phone)){
        $ionicPopup.alert({title:'请正确输入手机号'});
        return;
      }
      var promise=FeedBack.addFeedBack({
        level:1,
        optype:15,
        contents:$scope.formData.content,
        backend_url:$scope.formData.phone //电话
      });
      promise.then(function(data){
        if (data.body.returnCode == "000000") {
          $ionicPopup.alert({title:'反馈成功，谢谢！'});
          $scope.formData.content="";
          $scope.formData.phone="";
        }
      });
    }
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

function checkPhone(mobile) {
  if ((/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/).exec(mobile)){
    return true;
  }else {
    return false;
  }
}
