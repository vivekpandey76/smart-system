### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-management-app.git

For The Backend Code Create .env file and add this required data in that env file
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=task_management_db
DB_DIALECT=mysql # or 'postgres' for PostgreSQL
PORT=3000

Install Required Modules
npm install

Use this command to Run Backend Server
npm start

You can also check the endpoint working or not with postman using the baseurl as  http://localhost:3000
Create a Task: POST /api/tasks
Get All Tasks: GET /api/tasks
Get a Task by ID: GET /api/tasks/:id
Update a Task: PUT /api/tasks/:id
Delete a Task: DELETE /api/tasks/:id

For Running The Frontend Run npm install and then run npm start after that run npm start for server running


CREATE DATABASE task_management_db;
