const sentence = "hahahaha I am a hacker man I control ur computer\nI control the internet\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u\nI will hack u";
let printTime = 0;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, printTime);
  printTime += 50;
}
process.stdout.write(`\n`);
