const readline = require('readline');
const fs = require('fs');
const filename = process.argv[2] || '';
const searchTerm = process.argv[3];

fs.access(filename, fs.constants.R_OK, (err) => {
  if (err) {
    console.error(`Sorry, could not find file ${err.path}`);
    return;
  }

  const rl = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  var currentLine = 1;

  rl.on('line', (line) => {
    if (line.includes(searchTerm)) {
      console.log(`\x1b[2m[${filename} ${currentLine}]:\x1b[0m ${line}`);
    }
    currentLine++;
  });
});
