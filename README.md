# Blob anticheat

### Introduction
This project is based on [YouTube video](https://www.youtube.com/watch?v=XTcP4oo4JI4) by [@PrimerBlobs](https://www.youtube.com/@PrimerBlobs).
It is based on basic statement, that if you get >60% good value (in this case heads) you are cheater.

### Requirements
1. Node.js installed
2. Some kind of node package manager such as npm or pnpm
3. Git installed

### Installation & running
To install it you have to clone it from this repo, using this command:
```shell
git clone https://github.com/WavyWare/blob-anticheat.git

cd blob-anticheat

npm i
```
Once you have this downloaded you need to build it and run it with Node.js:
```shell
npm run build
# you can in package.json disable option "--watch" if you dont want it to be running constantly

npm run start
```
If you want you can adjust testing values such as number of flips, amount of blobs in test or percent of cheater by editing `src/test.ts`. For example, you can edit this using Neovim:
```shell
nvim src/test.ts # ":wq" to save and close
```

### Tech stack
1. Node.js
2. Typescript

This project is developed using Object-Oriented Programming
