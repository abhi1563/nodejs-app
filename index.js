var http = require('http');

http.createServer(function (req, res) {
  res.write('Welcome to AWS with Abhijeet All Devops');
  res.end();
}).listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
