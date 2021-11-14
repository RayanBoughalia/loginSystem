var fs = require('fs');

fs.readFile('./loginSystem/login.txt', 'utf8', (err, data) => {
	if (err) throw err;
	let username = data.split(' ')[1].split('\r')[0];
	let password = data.split(' ')[2].split('\r')[0];
	if (username == 'user' && password == 'password') {
		console.log('Success !')
	}else{
		console.log('Game Over !');
	}
});
