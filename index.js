const express = require('express');
const app = express();
app.use(express.json());


// Set the port
const PORT = process.env.PORT || 3000;




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});