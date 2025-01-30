# Building for production

## Requirements

- NodeJS v16 or higher (tested on v23.6.1)
- Source Code
- git (not required)

## Steps (Windows 10/11)

1. Create a new folder and open it.
2. In a terminal, navigate to the folder and run 
```shell
git clone https://github.com/xefili/xefili.dev
cd .\xefili.dev\
```
3. Install required packages
```shell
npm install
```
4. Build TailwindCSS files
```shell
npx @tailwindcss/cli -i .\styles\input.css -o .\styles\build.css --minify
```

## Steps (macOS & Linux)

Works on Ubuntu Server 24.10, untested on macOS.

1. Create a new folder and open it:
```shell
mkdir xefili && cd xefili
```
2. Clone the repo
```shell
git clone https://github.com/xefili/xefili.dev && cd xefili.dev
```
3. Build TailwindCSS files
```shell
npm install && npx @tailwindcss/cli -i styles/input.css -o styles/build.css --minify
```

## Update files

When cloning through git, remove the `build.css` file from the `styles/` folder and run:
```shell
git fetch && git pull
```

If you downloaded the source code as a zip folder or tarball, you have to redownload it from Github.

After getting the new source code, go through the build steps again.

# Documentation

The full documentation can be viewed [here](https://beta.xefili.dev/)
