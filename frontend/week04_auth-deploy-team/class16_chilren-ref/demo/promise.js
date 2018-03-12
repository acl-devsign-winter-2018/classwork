const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// long hand way:
// const readdirPromise = readdir('.');
// const readFilePromise = readdirPromise.then(files => {
//   console.log(files);
//   return readFile(files[0], 'utf8')
// });

// const yetAnotherPromise = readFilePromise.then(whatElse => {
//   console.log(whatElse);
// });

// yetAnotherPromise.then(result => {
//   console.log(result);
// });

// short way:
// readdir('.')
//   .then(files => {
//     return readFile(files[0], 'utf8');
//   })
//   .then(whatElse => {
//     console.log(whatElse);
//   }).then(result => {
//     console.log(result);
//   }); 

// function getFirstFile() {
//   return readdir('.')
//     .then(files => readFile(files[0], 'utf8'));
// }

// getFirstFile()
//   .then(() => {
//     throw 'I am an evil promise handler';
//   })
//   .then(contents => writeFile('firstone.txt', contents))
//   .then(() => console.log('all done!'))
//   .catch(err => {
//     console.log('ERROR, OH NOES!', err);
//   })
//   .then(() => {
//     console.log('I always happen!');
//   });
  
// promises don't re-execute their actions!
// const readdirP = readdir('.');
// // (only one call to readdir)
// readdirP.then(files => console.log(files));
// readdirP.then(files => console.log(files));

// Promise.all([
//   readdir('src'),
//   readdir('build')
// ])
//   .then(([srcDir, buildDir]) => {
//     console.log('result 1', srcDir);
//     console.log('result 2', buildDir);
//   });
//   // .then(results => {
//   //   console.log('result 1', results[0]);
//   //   console.log('result 2', results[1]);
//   // });

// const dir = './src/components/app';
// readdir(dir)
//   .then(files => {
//     return files.map(file => `${dir}/${file}`);
//   })
//   .then(filePaths => {
//     const readPromises = filePaths.map(filePath => readFile(filePath, 'utf8'));
//     return Promise.all(readPromises);
//   })
//   .then(contents => {
//     return contents.map(content => content.slice(0, 25));
//   })
//   .then(snippets => {
//     console.log(snippets);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const dir = './src/components/app';
// readdir(dir)
//   .then(files => {
//     return files.map(file => `${dir}/${file}`);
//   })
//   .then(files => {
//     return Promise.all(files.map(f => readFile(f, 'utf8')));
//   })
//   .then(contents => {
//     return contents.map(c => c.slice(0, 25));
//   })
//   .then(snippets => console.log(snippets))
//   .catch(err => console.log(err));

// Promise.resolve('yo').then(console.log);
// console.log('after Promise.resolve');

const dir = './src/components/app';
async function readAllDirContents(dir) {
  const files = await readdir(dir);
  const paths = files.map(file => `${dir}/${file}`);
  const contents = await Promise.all(paths.map(f => readFile(f, 'utf8')));
  const snippets = contents.map(c => c.slice(0, 25));
  return snippets;
}

readAllDirContents(dir)
  .then(console.log)
  .catch(console.log);