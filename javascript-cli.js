console.log('Starting application ....');
const stdin = process.openStdin();
const memory = {};

stdin.addListener('data', data => {
	const words = data.toString().split(' ').map(word => word.trim());
	switch (words[0]) {
		case 'SET':
			memory[words[1]] = words.slice(2).join(' ');
			// console.log(`key ${words[1]} set to ${words.slice(2).join(' ')}`);
			break;

		case 'GET':
			if (memory[words[1]]) console.log(memory[words[1]])
			else console.log(`key ${words[1]} not set`);
			break;

		case 'DELETE':
			if (memory[words[1]]) {
				// console.log(`key ${words[1]} deleted`);
				delete memory[words[1]];
			} else console.log(`key ${words[1]} not set`);	
			break;

		case 'COUNT':
			console.log(Object.values(memory).filter(val => val === words[1]).length);
			break;

		default:
			console.log('You said ' + words.join(' '));
			break;
	}
});