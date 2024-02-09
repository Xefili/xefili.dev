# Readme available on [xefili.dev](https://learn.xefili.dev/) :)

# Build from source

## Requirements

- Nodejs v16 or higher
- source code

## Steps

1. Download source files
2. In a terminal, run 
```powershell
npm install
```
3. Build CSS file(s) with 
```powershell
npx tailwindcss -i .\styles\input.css -o .\styles\build.css --minify
```
-[!] Always comment out line 11 in index.html if not already commented out. 

## Cleaning up

When building the main page (index.html), only `index.html` and `styles\build.css` are required. When using all pages, keep all files `styles\` except `style.css.old` and the `tw\` folder.