let Homepage = function(){

    let enterusername = element(by.id("username"));
    let enterpassword = element(by.id("password"));
    let enterclick =element(by.id("kc-login"));

     this.get = function(url){
   
        browser.get(url);

     };



    this.enterusername1 = function(username){

    enterusername.sendKeys(username);

    }

    this.enterpassword1 = function(password){

        enterpassword.sendKeys(password);
    
        }

    this.enterclick1 = function(click){

            enterclick.click(click);
        
            }   

};

module.exports = new Homepage();