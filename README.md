# Node
## build
```
npm run build
```

## run application
```
npm start
```

# Docker Commands
## install docker-compose
https://github.com/docker/compose/releases

## create image
```
docker build -t node-koa .
```

## run container
```
docker run -p 3000:3000 -it node-koa
