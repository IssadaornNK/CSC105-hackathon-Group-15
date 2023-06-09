// Import
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authentication/endpoint_login");

// Database Connection
const connection = mysql.createConnection({
	host: "db.cshack.site",
	port: "3306",
	user: "group15",
	password: "212227230244",
	database: "group15",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Database is connected");
    }
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;  

// Middleware to parse JSON request body
app.use(express.json());
app.use(cookieParser()); 

// Enable CORS for requests from http://localhost:5173
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})); 

app.use('/auth', authRouter) 

// Checker backend still work ------------------------------------------
app.get('/CheckHello', (req, res) => {
    res.send("Hello World!!!!!!!!!!!!!!!")
})

app.get('/me', (req,res) => {
    const id = req.cookies['token'];
    connection.query(`SELECT name, email FROM User WHERE id = '${id}'`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})


// Routes [endpoint] (Got small endpoint so do all in here) -----------------------------------------------------------------------------
app.get('/User', (req, res) => {
    connection.query("SELECT * FROM User", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);

        }
    });
})


app.post('/Create_User', (req, res) => {
    const Name = req.body.name;
    const Email = req.body.email;
    const Password = req.body.password;

    
    connection.query("INSERT INTO User (name, email, password) VALUES(?,?,?)", 
    [Name, Email, Password],
    (err, result) => {
        if (err) {
            console.log(err);
            res.send("error 1");
        }
        else {
            res.send("Data inserted");
        }
    }
    );
}) 

// app.delete('/User/:id', (req, res) => {
//     const id = req.params.id;

//     connection.query(`DELETE FROM User WHERE id = '${id}'`,
//     (err, result) => {
//         if (err) {
//             console.log(err);
//             res.send("Error, Please try again.");
//         }
//         else {
//             res.send("Deleted");
//         }
//     }
//     );
// }) 


app.delete('/selfDelete', (req, res) => {
    const id = req.query.id;
  
    connection.query(`DELETE FROM User WHERE id = '${id}'`, (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error, please try again.");
      } else {
        res.send("Deleted");
      }
    });
  });
  

app.get('/Order/:userId',(req, res)=>{
    console.log(req.params.userId);
    const user = req.params.userId;
    connection.query(`SELECT * FROM \`Order\` as o join Product P ON P.id = o.ProductId join User U on U.id = o.Owner where Owner = ${user}`, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });

})

app.post('/buy/:userId', (req, res) => {
    console.log(req.params.userId);
    const user = req.params.userId;
    connection.query(
      `INSERT INTO \`Order\` (Owner, ProductId) VALUES (?, ?)`,
      [user, req.body.productId],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  


app.patch('/update_User_name', (req, res) => {
    const Name = req.body.name;
    const id = req.cookies['token'];
    console.log(id)
    connection.query(`UPDATE User SET name = (?) WHERE id = '${id}'`, 
    [Name],
    (err, result) => {
        if (err) {
            console.log(err);
            res.send("error");
        }
        else {
            res.send("Change saved.");
        }
    }
    );
}) 


// Select Product.name from User,Product WHERE User.id = Product.customer_buy

// Product --------------------------------------------------------------------------
app.get('/Product', (req, res) => {
    connection.query("SELECT * FROM Product", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})

app.get('/Product/item', (req, res) => {
    const name = req.query.item_name
    connection.query("SELECT * FROM Product WHERE name = ?", [name], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})

app.get('/Product/item', (req, res) => {
    const name = req.query.item_name
    connection.query("SELECT * FROM Product WHERE name = ?", [name], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})






// Listen /////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Sever is listening on port ${port}`);
});