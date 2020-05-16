var When=require('cucumber')
var Landingpage=require('../PageObjects/Landingpage')



When('User Enter {string} and {string}', (from,to) =>
{
   Landingpage.EnterLocation(from,to)  
   Landingpage.ClickSearchButton()
});


