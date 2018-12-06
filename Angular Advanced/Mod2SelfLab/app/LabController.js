angular.module('app').controller('LabController', [
    function () {
        var vm = this;
        vm.author = [{
                name: "Mark Twain",
                nationality: "American",
                dates: "1835 - 1910"
            },
            {
                name: "A. A Milne",
                nationality: "English",
                dates: "1882 - 1956"
            },
            {
                name: "Ernest Hemingway",
                nationality: "American",
                dates: "1899 - 1961"
            },
            {
                name: "Charles Dicken",
                nationality: "English",
                dates: "1812 - 1870"
            },
            {
                name: "Jane Austen",
                nationality: "English",
                dates: "1775 - 1817"
            },
            {
                name: "Leo Tolstoy",
                nationality: "Russian",
                dates: "1828 - 1910"
            }
            
        ]
        vm.details = function (person) {
            alert(person.name);
        }
    }
]);