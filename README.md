# wtfprogramminb blog

Create new post:
`hugo new content posts/my-post.md`

### Start the CSS watcher and Hugo server

`npm run start`

### This runs both commands concurrently:

`postcss assets/css/main.css -o assets/css/style.css --watch`
`hugo server --disableFastRender`

### Build the CSS file

`npm run build:css`

# Build the Hugo site

`hugo --minify`

# Or use the combined command if you set it up in package.json

`npm run build`

### Debugging

`npm cache clean --force`
`rm -rf node_modules`
`npm install`

### Start Dev Server

`npm run start`

### Build

`hugo`

### Deploy

Site is hosted on Hostinger.com
`npm run build`
Take newly generated site from 'public' folder and upload to Hostinger.com
Files -> Files Manager
