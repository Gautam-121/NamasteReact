# What is Emmet
Emment is plugin for text editor taht allow to write more faster HTML and CSS coding .Using Emment it allow devoler to write HTML and CSS code using shorthand notation

# Difference betwwen library and framework
library is chunk of code , chunk of functionallity written by someone and we have installed this library in our project and use it for speed up the deployment process , it doen't contain all the thing for building a web-application.libarry has smaller bundled size ,so it ignite very fast . we can make our react as much as superpowerful as library by using powerfull library

framework is full fledged system , it contan all the thing for building a web-application , framework have there large bundled size , so it required more time to igninition

# Difference between React and Angular
React is Library , so it contain chunk piece of code , piece of function , because of there small bundling size and it require less time for ignition

but Angular is Framework , it contain all the thing for building Web-application , so there bundling size is large it require more time for ignitition.

# Manipulating Dom is very costier in case of performance
React have there own virtual-dom so it find difference on and new virtual dom and old virtual doom and then it make chages on real-dom

but Angular have not there virtual-dom , it directly changes on realDom

imp--> React is library but we can make react library as much as powerful of framework by using more powerfull external library but in case of framework it build with all the thing so we can only use this think

# Ways To Add React In Project
Using CDN --> CDN is Not A Good Way to add React Inside --> Because As version chnages it not automatically change the CDN version so it work statically
Using NPM

# What is CDN
CDN is cross-Delivery Network , it is network of geographical distrubuted server that work together to delivering content such as images , videos ,and other static or dynamic assets to user

# why we use it
suppose user send request from there website or application , cdn will identify the nearest server in its network that can deliver a content , this will help to reduce distance between user and server , which turn can improve overvall performance and speed of website or application.

cdn also help to reduced load on single origin server by caching the content on their own server ands serving directly to user , so it can improve scallibity and avaibillity of website or application

# What is CORS (Cross-Origin-Resource-Sharing)
if you want something or send to the same origin browser allow to do this but but but when you send or access thing from the different origin browser not allowed to access directly so,

preflight Request has been send by domain A , this is not actual request this request contain lot of header but two more imoportant header is Access-control-Allow-Origin = domain A Access-control-allow-method = Get
if domain B , accept the request so the demain B tic this header it allow the request send By Domain A So it sets, Access-control-Allow-Origin = domain A for specific domain or * for all domain Access-control-Allow-Origin = Get , Post or * for all method

if any one this request false from domain B it throught the error

after getting response in preflight request according to that it will throght error or send actual request for accessing all user detail

if domain B not allow to this Origin Browser throught the Cors error if domain B allow the access then actual request made and get all user detail .

# What is diiference between React and ReactDom
React: This is the core React library that provides the foundation for building user interfaces 
ReactDOM: This is a separate package that provides the APIs for rendering React components to the DOM (Document Object Model) in a web browser environment.ReactDOM its Like a bridge between react and browser Dom , all manipulation of virtualDom , Normal Dom it handle by ReactDOM


# What is difference between react.developement.js and react.production.js from cdn links
react.developement.js is use at the development phase , it give warning and dubbging at the testing time of react application but we use react.production.js use at time deplying our app , so it reduce size of or app , it bundled the app , it remove all warning and dubbging

when developing react app it is recommended to developement version of the libaray (react,developement.js) during devolpement and testing phase. when deplyoing app to the production environment . It is recommended to use production version of library (react.production.js) to optimise the performance and reduce the size of javascript bundle that is loaded by the user browser.