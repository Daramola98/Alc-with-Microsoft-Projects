angular.module('app').factory('sessionFactory', ['$window','formattingFactory', sessionFactories]);

function sessionFactories($window, formattingFactory) {
    var factoryObject = {};
    function save(key, value) {
         finalValue = formattingFactory.format(value);
        $window.sessionStorage.setItem(key, finalValue);
    }

    function get(key) {
        return $window.sessionStorage.getItem(key);
    }

    function clear() {
        $window.sessionStorage.clear();
    }
    factoryObject.save = save;
    factoryObject.get = get;
    factoryObject.clear = clear;

    return {
        save: save,
        get: get,
        clear: clear
    };
}