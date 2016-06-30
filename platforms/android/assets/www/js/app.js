// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('zjfae', ['ionic', 'zjfae.controllers', 'zjfae.services','zjfae.config'])
  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
/*      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'template/tab.html',
      })*/

      // Each tab has its own nav history stack:

      .state('home', {
        url: '/home',
        templateUrl: 'template/home.html'/*,
         controller: 'HomeCtrl'*/
      })
      .state('forum',{
          url:'/forum',
          templateUrl:'template/forum.html',
          controller: 'ForumCtrl'
        })
      .state('forumNote',{
        url:'/forumNote/:noteId',
        templateUrl:'template/forum-note.html',
        controller: 'ForumNoteCtrl'
      })
      .state('forumNoteSpeak',{
        url:'/forumNoteSpeak/:noteId',
        templateUrl:'template/forum-note-speak.html',
        controller: 'ForumNoteSpeakCtrl'
      })
      .state('moreActivityCenter', {
        url: '/moreActivityCenter',
        templateUrl: 'template/more-activity-center.html',
        controller: 'ActivityCenterCtrl'
      })
      .state('moreContact', {
          url: '/moreContact',
          templateUrl: 'template/more-contact.html',
          controller:'ContactCtrl'
        })
      .state('moreFeedback',{
        url: '/moreFeedback',
        templateUrl: 'template/more-feedback.html',
        controller:'FeedbackCtrl'
      })
      .state('moreNews',{
        url: '/moreNews',
        templateUrl: 'template/more-news.html',
        controller:'NewsCtrl'
      })
      .state('moreGiveEncourage', {
        url: '/moreGiveEncourage',
        templateUrl: 'template/more-give-encourage.html',
        controller: 'GiveEncourageCtrl'
      })
      .state('addService',{
        url:'/addService',
        templateUrl:'template/add-service.html',
        controller:'AddServiceCtrl'
      })
    .state('serviceCentre',{
      url:'/serviceCentre',
      templateUrl:'template/service-centre.html'/*,
      controller:'ServiceCentreCtrl'*/
      })
      .state('activityQuiet',{
        url:'/activityQuiet',
        templateUrl:'template/activity-quiet.html'/*,
         controller:'ServiceCentreCtrl'*/
      })
      .state('newsQuiet',{
        url:'/newsQuiet',
        templateUrl:'template/news-quiet.html'/*,
         controller:'ServiceCentreCtrl'*/
      })
    .state('contactOptimization',{
      url:'/contactOptimization',
      templateUrl:'template/contact-optimization.html'/*,
       controller:'ServiceCentreCtrl'*/
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
  });
