/**
 * Created by MrHai on 2016/3/23.
 */
angular.module('zjfae.services', [])
  .factory('Banners', function ($http,$q) {
    return {
      all: function () {
        var deferred = $q.defer();
        $http.get('data/banners.json').success(function (data) {
          deferred.resolve(data.result);
        });
        return deferred.promise;
      }
    };
  })
  .factory('ForumInfo', function ($http,$q) {
    return {
      all: function () {
        var deferred = $q.defer();
        $http.get('data/forums.json').success(function (data) {
          deferred.resolve(data.result);
        });
        return deferred.promise;
      },
      get: function (noteId) {
        var deferred = $q.defer();
        $http.get('data/forums.json').success(function (data) {
          for (var i = 0; i < data.result.length; i++) {
            if (data.result[i].id == parseInt(noteId)) {
              deferred.resolve(data.result[i]);
            }
          }
        });
        return deferred.promise;
      }
    };
  })
  .factory('ForumNote', function ($http,$q) {
    return {
      all: function () {
        var deferred = $q.defer();
        $http.get('data/forumNote.json').success(function (data) {
          deferred.resolve(data.result);
        });
        return deferred.promise;
      }
    };

  })
  .factory('ActivityInfo', function ($http,$q) {
    return {
      all: function () {
        var deferred = $q.defer();
        $http.get('data/activitys.json').success(function (data) {
          deferred.resolve(data.result);
        });
        return deferred.promise;
      }
    };
  })
  .factory('News', function ($http,$q) {
    return {
      all: function () {
        var deferred = $q.defer();
        $http.get('data/news.json').success(function (data) {
          deferred.resolve(data.result);
        });
        return deferred.promise;
      }
    }
  })
  .factory('MadebyProducts', function () {
    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var madebyProducts = [{
      id: 0,
      name: '浙金8号333期',
      time: '2016-02-03  11:20'
    }, {
      id: 1,
      name: '浙金8号333期',
      time: '2016-02-03  11:20'
    }, {
      id: 2,
      name: '浙金8号333期',
      time: '2016-02-03  11:20'
    }, {
      id: 3,
      name: '浙金8号333期',
      time: '2016-02-03  11:20'
    }, {
      id: 4,
      name: '浙金8号333期',
      time: '2016-02-03  11:20'
    }, {
      id: 5,
      name: '浙金8号333期',
      time: '2016-02-03  11:20'
    }, {
      id: 6,
      name: '浙金8号333期',
      time: '2016-02-03  11:20'
    },];
    return {
      all: function () {
        return madebyProducts;
      },
      remove: function (madebyProduct) {
        products.splice(madebyProducts.indexOf(madebyProduct), 1);
      },
      get: function (madebyProductId) {
        for (var i = 0; i < madebyProducts.length; i++) {
          if (madebyProducts[i].id === parseInt(madebyProductId)) {
            return madebyProducts[i];
          }
        }
        return null;
      }
    };
  });
