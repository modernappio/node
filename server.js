import express from 'express';
const app = express();
import mongoose from 'mongoose';

let uri = '';
if (process.env.NODE_ENV === 'production') {
  uri = process.env.MONGOLAB_URI;
  console.log('===PRODUCTION===');
} else {
  uri = '127.0.0.1/express-boiler';
  console.log('===DEVELOPMENT===');
}


app.get('/test', (req, res, next) => {
  res.json({
    data: [{ key: 'Project', value: 'CVS Modern test' },
    { key: 'PoC', value: 'json Web Service' }]
  })
})

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server started at port number: ', port);
});
