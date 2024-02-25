// module.exports = {
//     paths: {
//         "/create": {
//             post: {
//                 tags: [{ Tasks: ": Create task" }],
//                 summary: "Creates a task",
//                 description: "Creates a new task",
//                 operationId: "createTask",
//                 parameters: [],
//                 requestBody: {
//                     required: true,
//                     content: {
//                         "application/json": {
//                             schema: { $ref: "#/components/schemas/TaskInput" }
//                         }
//                     }
//                 },
//                 responses: {
//                     201: { description: "Task successfully created" },
//                     500: { description: "There was a problem trying to create a task" }
//                 }
//             }
//         },
//         "/": {
//             get: {
//                 tags: { Tasks: ": Get all tasks" },
//                 summary: "Gets all tasks",
//                 description: "Returns a list of all tasks",
//                 operationId: "getAllTasks",
//                 parameters: [],
//                 responses: {
//                     200: {
//                         description: "All tasks successfully retrieved",
//                         content: {
//                             "application/json": {
//                                 schema: { $ref: "#/components/schemas/Task" }
//                             }
//                         }
//                     },
//                     500: { description: "There was a problem trying to retrieve all tasks" }
//                 }

//             }
//         },
//         "/id/{_id}": {
//             get: {
//                 tags: { Tasks: ": Get task" },
//                 summary: "Gets a task",
//                 description: "Gets a task by _id",
//                 operationId: "getOneTask",
//                 parameters: [
//                     {
//                         name: "_id",
//                         in: "path",
//                         required: true,
//                         schema: {
//                             type: "string"
//                         },
//                         description: "Id of task to be retrieved"
//                     }
//                 ],
//                 responses: {
//                     200: { description: "Task successfully retrieved" },
//                     500: { description: "There was a problem with the task with _id number" }
//                 }
//             },
//             put: {
//                 tags: { Tasks: ": Update task title" },
//                 summary: "Updates task title",
//                 description: "Updates the title of a task by _id",
//                 operationId: "updateTask",
//                 parameters: [
//                     {
//                         name: "_id",
//                         in: "path",
//                         required: true,
//                         schema: {
//                             type: "string"
//                         },
//                         description: "Id of task to be updated"
//                     }
//                 ],
//                 requestBody: {
//                     required: true,
//                     content: {
//                         "application/json": {
//                             schema: { $ref: "#/components/schemas/TaskInput" }
//                         }
//                     }
//                 },
//                 responses: {
//                     200: { description: "Task successfully updated" },
//                     404: { description: "Task not found!" },
//                     500: { description: "There was a problem trying to update the task with _id" }
//                 }
//             },
//             delete: {
//                 tags: { Tasks: ": Delete task" },
//                 summary: "Deletes a task",
//                 description: "Deletes a task by _id",
//                 parameters: [
//                     {
//                         name: "_id",
//                         in: "path",
//                         required: true,
//                         schema: {
//                             type: "string"
//                         },
//                         description: "Id of task to be deleted"
//                     }
//                 ],
//                 responses: {
//                     200: { description: "Task successfully deleted" },
//                     500: { description: "There was a problem trying to delete a task" }
//                 }
//             }
//         },
//         "/markAsCompleted/{_id}": {
//             put: {
//                 tags: { Tasks: ": update status" },
//                 summary: "Mark task as completed",
//                 summary: "Update task from completed: false to completed: true",
//                 operationId: "taskCompleted",
//                 parameters: [
//                     {
//                         name: "_id",
//                         in: "path",
//                         required: true,
//                         schema: {
//                             type: "string"
//                         },
//                         description: "Id of task to be updated and marked as completed",
//                     },
//                 ],
//                 responses: {
//                     200: { description: "Task successfully updated" },
//                     500: { description: "There was a problem trying to update the task with _id" },
//                 },
//             },
//         }
//     }
// }