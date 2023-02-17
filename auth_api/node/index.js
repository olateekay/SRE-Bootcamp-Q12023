import app from './server';


 app.listen(process.env.APP_PORT, function() {
  console.log('listening at',process.env.APP_PORT);
});
