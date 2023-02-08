<h1>Project Creation</h1>

```js
// ------- //
// BACKEND //
// ------- //
// 1. Make project
mkdir <project>
cd <project>
// 2. new server folder and file
mkdir <project>
cd server
Mac: touch server.js
Windows (gitbash): touch server.js
Windows: copy nul server.js
// 3. make modulated files
mkdir controllers routes models config
// 4. install backed packages and dependancies
npm install express mongoose cors // bcrypt dotenv jsonwebtoken
npm i -g nodemon
// 5. add to server file
const express = require('express');
const app = express();
const port = 8000;
    
app.listen(port, () => console.log(`Party on port: ${port}`) );
// 6. start server
nodemon server.js

// -------- //
// FRONTEND //
// -------- //
// 7. Create front end
// 7.a new terminal
cd <project folder> // new terminal is most likely in project folder
npx create-react-app client
cd client
// 8. frontend dependencies
npm install axios react-router-dom
// 9. start front-end
npm start
```

<!-- 👣FOOTER👣 -->
&nbsp;
<hr />
<p align="center">A work by <a href="https://github.com/xtina-lt/">Christina Torres</a></p>
<p align="center"><span style="color: #808080;"><em>xtina_lt@outlook.com</em></span></p>

<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Add font awesome icons -->
<p style="text-align: center;">
    <a href="https://www.linkedin.com/in/xtinacodes/" class="fa fa-linkedin"></a>
    <a href="https://github.com/xtina-lt/" class="fa fa-github"></a>
</p>

&nbsp;