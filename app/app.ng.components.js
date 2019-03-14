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


  // mtmDemo.component('carosel', {
  //   controllerAs: 'vm',
  //   template: "<div ng-include='vm.tempUrl'></div>",
  //   bindings: {
  //     title: '@'
  //   },
  //   controller: function (svc) {
  //     var vm = this;
      
  //     vm.$onInit = function () {
  //       // TODO: Initialization goes here
  //     };
  //     vm.tempUrl = svc.getTemplateUrl('carosel.html');

  //   }

  // });


  // mtmDemo.component('accordion', {
  //   controllerAs: 'vm',
  //   template: "<div ng-include='vm.tempUrl'></div>",
  //   bindings: {
  //     title: '@'
  //   },
  //   controller: function (svc) {
  //     var vm = this;
  //     vm.$onInit = function () {
  //       var filter = '?$filter=Disable eq false';
  //       svc.getItems("AccordionList", filter).then(function (results) {
  //         vm.items = results;          
  //         console.log(vm.items);
  //       });
  //     };
  //     vm.getClass = function(index){
  //      return index==0?'in':'';
  //     }      

  //     vm.tempUrl = svc.getTemplateUrl('accordion.html');
  //   }
  // });

  // mtmDemo.component('slider', {
  //   controllerAs: 'vm',
  //   template: "<div ng-include='vm.tempUrl'></div>",
  //   bindings: {
  //     title: '@',
  //     siteurl: '@'
  //   },
  //   controller: function (svc) {
  //     var vm = this;
     
  //     vm.$onInit = function () {
  //       var url = '/sites/demo/';
  //       console.log("Site is " + vm.siteurl);
  //       if(vm.siteurl){url =vm.siteurl;}
  //       svc.getAllItemsFromSite("Slider", url).then(function (results) {
  //         vm.items = results;          
  //         console.log(vm.items);
  //       });
  //     };
  //     vm.getClass = function(index){
  //      return index==0?'active':'';
  //     }      

  //     vm.tempUrl = svc.getTemplateUrl('slider.html');
  //   }
  // });

  // mtmDemo.component('tableItems', {
  //   controllerAs: 'vm',
  //   template: "<div ng-include='vm.tempUrl'></div>",
  //   bindings: {
  //     title: '@'
  //   },
  //   controller: function (svc) {
  //     var vm = this;
  //     vm.search = '';
  //     vm.$onInit = function () {
        
  //       svc.getAllItems("Board").then(function (results) {
  //         vm.items = results;          
  //         console.log(vm.items);
  //       });
  //     };
  //     vm.getClass = function(index){
  //      return index==0?'in':'';
  //     }      

  //     vm.tempUrl = svc.getTemplateUrl('listItems.html');
  //   }
  // });



})();
