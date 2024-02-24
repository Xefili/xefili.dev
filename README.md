# Important Notice

**As of right now (24.02.2024) the blog is not working and displaying placeholder text. This will be fixed soon!**

# Building for production

## Requirements

- NodeJS v16 or higher
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
npx tailwindcss -i .\styles\input.css -o .\styles\build.css --minify
```

## Steps (macOS & Linux)

These instructions are untested as of now!

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
npm install && npx tailwindcss -i styles/input.css -o styles/build.css --minify
```

# Notes
The standart `styles/style.css` file can also be used, but file size might increase.
