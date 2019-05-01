const express=require('express');
const hbs=require('hbs');

var app=express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
//app.use(express.static(__dirname+'/Public'));

hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		pageTitle:'Home Page',
		WelcomeMessage:'Welcome to my Message',
		currentYear: new Date().getFullYear()
	});
});
app.get('/self',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'About Page',
		currentYear: new Date().getFullYear()
	});
});
app.get('/exam',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'About Page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/bad',(req,res)=>{
	res.send({
		errorMessage:'Unable to handle request'
	});
});

app.listen(300,()=>{
	console.log('Server is up on port 300');
	});