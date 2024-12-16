const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./DB/dbconenction');

const app = express();
const PORT = 9000;
const user = require('./routers/webUserRouter')
const form = require('./routers/companyFormRouter')


dbConnection()
app.use(cors());
app.use(express.json());

app.use("/user", user)
app.use("/company-form", form)



app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
