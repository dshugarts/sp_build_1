app.controller('FormController', ['HealthService', function(HealthService) {
    console.log('FormController created.');
    let self = this;

  self.newData = {};
  
    self.createData = function(){
      console.log(self.newData);
      console.log(self.newData.systolic);
      self.newObject = {
        systolic: self.newData.systolic,
        diastolic: self.newData.diastolic,
        blood_pressure: self.newData.systolic + "/" + self.newData.diastolic
      };
      console.log(self.newObject);
    };


  }]);