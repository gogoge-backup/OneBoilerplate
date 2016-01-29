# Just another boilerplate for frontned dev
---

`index.js`: `src/app/index.js`   
`index.html`: `src/app/index.html`  its script tag will include `build/bundle.js`  

### Tools

Hot loading : webpack dev middleware + webpack hot middleware (HMR)  
http://andrewhfarmer.com/webpack-hmr-tutorial/  
http://andrewhfarmer.com/understanding-hmr/ by Andrew H Farmer  
https://github.com/glenjamin/webpack-hot-middleware hot-middleware  

https://github.com/gaearon/react-transform-hmr  
hot+dev middleware would lose the state when hot-reload, install this can solve this problem  

Server : express + chalk (color the console output)


### error page


react-transform-catch-errors  get error object and render to a component
https://github.com/gaearon/react-transform-catch-errors

redbox-react a component for error displays
https://github.com/KeywordBrain/redbox-react

### Refs

https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits