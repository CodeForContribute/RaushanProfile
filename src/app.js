const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT || 3000;
const publicStaticDir = path.join(__dirname,'..','/public/templates/views');
const static = express.static(publicStaticDir);
const viewsPath = path.join(__dirname, '../public/templates/views');
const partialsPath = path.join(__dirname, '../public/templates/partials');
// console.log(viewsPath);
// console.log(partialsPath);
// console.log(publicStaticDir);
// Setup handlebars engine & views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(static);
app.get('',(req,res)=>{
	res.render('index');
});
// app.get('/about', (req, res) => {
// 	res.render('about', {
// 		title: 'About Me',
// 		name: 'Raushan'
// 	});
// });

app.listen(PORT,()=>{
    console.log("app is listening at port 3000");
});