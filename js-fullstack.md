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

