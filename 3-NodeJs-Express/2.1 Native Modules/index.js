import { writeFile, readFile } from 'node:fs';

// writeFile('message.txt', 'Hello Node.js', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });


readFile('./message.txt',"utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});