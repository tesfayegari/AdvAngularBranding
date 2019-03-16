(function () {
  'use strict';

  mtmDemo.component('topNavigation', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.$onInit = function () {
        // TODO: Initialization goes here
      };
      vm.tempUrl = svc.getTemplateUrl('topmenu.html');

    }

  });

  mtmDemo.component('globalNavigation', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.$onInit = function () {
        // TODO: Initialization goes here
      };
      vm.tempUrl = svc.getTemplateUrl('globalnav.html');

    }

  });

  mtmDemo.component('newForm', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.employee = {};
      vm.$onInit = function () {
        svc.getAllItems("Departments").then(function (response) {
          vm.departments = response;
          console.log(response);
        });
      };
      vm.tempUrl = svc.getTemplateUrl('newform.html');

      vm.createNewEmployee = function (event) {
        event.preventDefault();
        var d = new Date('3/3/1996');
        var data = {
          //To Get __metadata->'type' value for the list, go to
          //https://<site>/_api/web/lists/getbytitle('<List Name>')?$select=ListItemEntityTypeFullName
          //from the xml, get the value inside <d:ListItemEntityTypeFullName> element
          __metadata: { 'type': 'SP.Data.EmployeesListItem' },
          Title: vm.employee.first_name,
          last_name : vm.employee.last_name,
          email : vm.employee.email,
          phone : vm.employee.phone,
          description : vm.employee.description,
          DateOfBirth : vm.employee.dob,
          RegisteredDate : vm.employee.registeredDate,
          DepartmentId	: vm.employee.department,
          Created : d.toISOString(),
          Modified : d.toISOString()
        };
        svc.createListItem("Employees", data).then(function(response){
          console.log("Item Creted");
          console.log(response);
          console.log(event);
          vm.employee = {};
        });
      }

    }

  });


  mtmDemo.component('mtmFooter', {
    controllerAs: 'vm',
    template: "<div ng-include='vm.tempUrl'></div>",
    bindings: {
      title: '@'
    },
    controller: function (svc) {
      var vm = this;
      vm.$onInit = function () {
        // TODO: Initialization goes here
      };
      vm.tempUrl = svc.getTemplateUrl('footer.html');

    }

  });

})();
