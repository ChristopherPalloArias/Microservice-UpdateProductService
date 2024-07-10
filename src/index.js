const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 8084;


app.use(cors());
app.use(express.json());

// Configure the database connection
const db = mysql.createConnection({
    host: 'mysql-christopherobin.alwaysdata.net',
    user: '358042_admin',
    password: 'YqUZn6T6AxLYc5k',
    database: 'christopherobin_minimarket'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Route to update the quantity of a product
app.put('/products/:name', (req, res) => {
    const { name } = req.params;
    const { quantity } = req.body;
    const query = 'UPDATE products SET quantity = ? WHERE name = ?';
    db.query(query, [quantity, name], (err, result) => {
        if (err) {
            console.error('Error updating product:', err);
            res.status(500).send({ message: 'Error updating product', error: err });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send({ message: 'Product not found' });
            return;
        }
        res.send({ message: 'Product updated' });
    });
});

// Root route to check if the server is running
app.get('/', (req, res) => {
    res.send('Update Product Service Running');
});

app.listen(port, () => {
    console.log(`Update Product service listening at http://localhost:${port}`);
});
