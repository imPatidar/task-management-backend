# Task Management API

This is a Node.js project that provides a RESTful API for managing tasks. You can create, update, and retrieve tasks, as well as get task metrics based on their status and timeline.

## Getting Started

### Prerequisites

Before running this project, ensure you have the following dependencies installed:

- Node.js
- MySQL (or any other compatible database)
- Sequelize (for database ORM)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-api.git

2. Install the required npm packages:
    ```bash
   cd task-management-api
   npm install
   
3. Configure your database connection in the .env file.
    
4. Run the project:
    ```bash
    npm start

API Endpoints
1. Create a Task
   Endpoint: /task/tasks (POST)
   Description: Create a new task with the provided details.
   Request Body:
    
    ```bash
    {
      "title": "Task Title",
      "description": "Task Description",
      "status": "Pending",
      "dueDate": "2023-10-10"
    }

2. Response (201 - Created):
    ```bash
    {
      "id": 1,
      "title": "Task Title",
      "description": "Task Description",
      "status": "Pending",
      "dueDate": "2023-10-10"
    }

3. Update a Task
<br/>
Endpoint: /task/tasks (PUT)
<br/>
<br/> Description: Update an existing task with the provided details.
<br/>Request Body:
    ```bash
    
    {
      "id": 1,
      "title": "Updated Task Title",
      "description": "Updated Task Description",
      "status": "Completed",
      "dueDate": "2023-10-15"
    }

4. Get All Tasks (Paginated)
   <br/> Endpoint: /tasks/tasks (GET)
      <br/>Description: Retrieve a list of all tasks with pagination support.
      <br/>Query Parameters:
      <br/>page (optional): Page number for pagination (default: 1).
      pageSize (optional): Number of tasks per page (default: 10).
      <br/>Response (200 - OK):
       
   ```bash
   [
   {
       "totalTasks": 25,
       "currentPage": 1,
       "pageSize": 10,
       "tasks": [
       {
       "id": 1,
       "title": "Task 1",
       "description": "Description for Task 1",
       "status": "Pending",
       "dueDate": "2023-10-10"
   },
   // ... more tasks ...
   ]

5. Get Task Metrics
   Endpoint: /tasks/task-metrics (GET)
   Description: Get metrics for tasks, including counts based on status and timeline.
   Response (200 - OK):

    ```bash
   {
   "totalTasks": 50,
   "statusCounts": {
   "Pending": 20,
   "Completed": 15,
   "In Progress": 10,
   "On Hold": 5
   },
   "timelineCounts": {
   "Overdue": 8,
   "Due Today": 12,
   "Upcoming": 15,
   "No Due Date": 15
   }
   }



