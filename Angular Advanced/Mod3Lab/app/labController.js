angular.module('app')
    .controller('LabController', [
        function () {
            var vm = this;
            vm.alerts = [];
            vm.addDanger = addDanger;
            vm.addWarning = addWarning;
            vm.dismissAlert = dismissAlert;

            function addDanger() {
                addAlert('danger', 'Danger, Will Robinson! Danger!');
            }

            function addWarning() {
                addAlert('warning', 'Warning! Warning! Alien approaching!');
            }

            function addAlert(type, text) {
                vm.alerts.push({
                    type: type,
                    text: text
                });
            }

            function dismissAlert(index) {
                vm.alerts.splice(index, 1);
            }
            vm.today = function () {
                vm.dt = new Date();
            };

            vm.today();

            vm.dateOptions = {
                customClass: getDayClass,
                minDate: new Date(),
                showWeeks: false
            };

            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }

            vm.toggleMin = function () {
                vm.dateOptions.minDate = vm.dateOptions.minDate ? null : new Date();
            };

            vm.toggleMin();
            vm.setDate = function (year, month, day) {
                vm.dt = new Date(year, month, day);
            };

            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date(tomorrow);
            afterTomorrow.setDate(tomorrow.getDate() + 1);
            vm.events = [{
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];

            function getDayClass(data) {
                var date = data.date,
                    mode = data.mode;
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < vm.events.length; i++) {
                        var currentDay = new Date(vm.events[i].date).setHours(0, 0, 0, 0);

                        if (dayToCheck === currentDay) {
                            return vm.events[i].status;
                        }
                    }
                }

                return '';
            }


        }
    ]);