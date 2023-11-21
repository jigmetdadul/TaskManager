const express = require('express');
const app = express();
const task = require('./routes/tasks');  

app.use(express.json()); // Corrected: It should be express.json()

// routes
// app.get('/hello', (req, res) => {
//     res.send('Task Manager app');
// });

app.use('/api/v1/tasks', task);

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});