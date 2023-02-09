<h1>Project Creation</h1>


<table>
<!-- step -->
<tr>
<td>
🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙
</td>
<td>
<h2>Back-End</h2>
</td>
</tr>

<tr>
<td>

* [x]  Make project folder and change directory to folder.
</td>
<td>

`mkdir <project>`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Change directories to project folder.
</td>
<td>

`cd <project>`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Make a new server folder.

</td>
<td>

`mkdir server`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Change directories into the server.
</td>
<td>

`cd server`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Make server.js.
</td>
<td>

```
Mac: touch server.js
Windows (gitbash): touch server.js
Windows: copy nul server.js
```
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Add to the server.js file.
</td>
<td>

```js 
const express = require('express');
const app = express();
const port = 8000;

// require("./config/mongoose.config");
// app.use(express.json(), express.urlencoded({ extended: true }));
// const xRoutes = require("./routes/xxxx");
// xRoutes(app);

app.listen(port, () => console.log(`Party on port: ${port}`) );
```
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Make modulated files.
</td>
<td>

`mkdir controllers routes models config`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Install backend packages and dependancies.
</td>
<td>

`npm install express mongoose cors bcrypt dotenv jsonwebtoken`

`npm i -g nodemon`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Run the server.
</td>
<td>

`nodemon server.js`
</td>
</tr>
<!-- step -->
<tr>
<td>
🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎🌎
</td>
<td>
<h2>Front-End</h2>
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Open new terminal
</td>
<td>

<img src="images\newterminal.png"/>
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Make sure we are in project folder.
</td>
<td>

`c:\Users\xtina\OneDrive - xtina.codes\UnicornMagic\project\`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Create React client application
</td>
<td>

`npx create-react-app client`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Change directories to client
</td>
<td>

`cd client`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Install frontend dependencies.
</td>
<td>

`npm install axios react-router-dom`
</td>
</tr>
<!-- step -->
<tr>
<td>

- [ ] Start front-end
</td>
<td>

`npm start`
</td>
</tr>
</table>




































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