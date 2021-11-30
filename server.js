
const express = require('express');



const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.statick('public'));

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


app.listen(PORT, function() {
console.log(`Server is listening on PORT: ${PORT}`);
});
