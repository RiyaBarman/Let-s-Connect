module.exports.home=function(req,res){
   // return res.end("<h1>module is working with controller</h1>");
   return res.render('home',{
       title: "HOME"
   });
};