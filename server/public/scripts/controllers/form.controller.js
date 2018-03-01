app.controller('FormController', ['HealthService', function(HealthService) {
    console.log('FormController created.');
    let self = this;

    self.newData = {};

    self.createData = function(){
      console.log(self.newData);
    };


  }]);