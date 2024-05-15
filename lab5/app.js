const result = (function(exports, module){

    exports = module.exports;

    exports.firstname = 'John';

    module.exports.lastname = 'Smith';

    exports = {

        getFullName: function(){

            console.log('John Smith')

        }

    }
    console.log(exports);
    console.log(module.exports);
    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);