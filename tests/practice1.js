describe('Protractor Automation',function(){
 it('Calculator',function(){

  browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
  element(by.model('first')).sendKeys('8');
  element(by.model('second')).sendKeys('8');
  element(by.buttonText('Go!')).click();
  element(by.binding('latest')).getText().then(function(text){

   console.log(text);

  });



 });



});