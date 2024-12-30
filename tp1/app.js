const express = require('express')
const app = express();
const port =3000;
app.use(express.json());
app.use(express.urlencoded({extended : true}))
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
    ];
    app.get('/users', (req, res) => {
        res.json(users);
        });
     app.get('/users/:id', (req, res) => {
         const user = users.find(u => u.id === parseInt(req.params.id));
        if (!user) return res.status(404).send('User not found');
        res.json(user);
        });   



        app.post('/users', (req, res) => {
            const newUser = { id: users.length + 1, ...req.body };
            users.push(newUser);
            res.json(newUser);
            });
        
            
app.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user = { ...user, ...req.body };
    res.json(user);
    });


app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');
users.splice(userIndex, 1);
res.json({ message: 'User deleted' });
});

app.listen(port , ()     => {
    console.log('application exemple a ecouté sur le pc ');
})