# Remote control node server
A simple node server using [lirc-node](https://www.npmjs.com/package/node-lirc) for sending a signal to devices 

## Get started 
```sh
$ npm install && npm run start 
```
http://localhost:3000

## Production 
Using [forever](https://www.npmjs.com/package/forever)  

```sh
$ forever start app.js
```

To stop
```sh
$ forever list 

info:    Forever processes running
data:        uid  command             script forever pid   id logfile                       uptime      
data:    [0] _5X7 /usr/local/bin/node app.js 67420   67428    /Users/user/.forever/_5X7.log 0:0:0:4.017 

$ forever stop 0 
``` 