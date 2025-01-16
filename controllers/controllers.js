/////////////////////////////////////////////////
const index = (req,res)=>{
	try{
		res.render('index');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
////////////////////////////////////////////////////
const menu = (req,res)=>{
	try{
        res.render('menu');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
/////////////////////////////////////////////////////
const separacion = (req,res)=>{
try{
        res.render('./juegos/separacion');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
//////////////////////////////////////////////////////
const sopa = (req,res)=>{
try{
        res.render('./juegos/sopa');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
//////////////////////////////////////////////////////
const hiato = (req,res)=>{
try{
        res.render('./juegos/hiato');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
//////////////////////////////////////////////////////
const tutorialSeparacion = (req,res)=>{
try{
        res.render('./tutorial/separacion');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
//////////////////////////////////////////////////////
const tutorialSopa = (req,res)=>{
try{
        res.render('./tutorial/sopa');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
//////////////////////////////////////////////////////
const tutorialHiato = (req,res)=>{
try{
        res.render('./tutorial/hiato');
	}catch(error){
		console.error(error.message);
		res.status(500).send('Error en el servidor',error.message);
	}
}
//////////////////////////////////////////////////////
module.exports={
	index,
	menu,separacion,sopa,hiato,tutorialSeparacion,tutorialSopa,tutorialHiato
};