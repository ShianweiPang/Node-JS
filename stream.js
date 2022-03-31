const fs = require('fs');

const readStream = fs.createReadStream('./docs/readStream.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/writeStream.txt');

// readStream.on('data', (chunk) => {
//     console.log('----NEW CHUNK----');
//     console.log(chunk);

//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);