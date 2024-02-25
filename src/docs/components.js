// module.exports = {
//     components: {
//         schemas: {
//             Task: {
//                 type: "object",
//                 properties: {
//                     _id: {
//                         type: "objectId",
//                         description: "Task identification number",
//                         example: "65d77737d0c12de335e49c0b"
//                     },
//                     title: {
//                         type: "string",
//                         description: "Title for the task",
//                         example: "Task 1"
//                     },
//                     completed: {
//                         type: "boolean",
//                         description: "Indicates if the task has been completed (true) or not (false)",
//                         example: "false"
//                     },
//                     createdAt: {
//                         type: "date",
//                         description: "Specifies the time and date in which the task was created",
//                         example: "2024-02-14T09:31:35.086+00:00"
//                     },
//                     updatedAt: {
//                         type: "date",
//                         description: "Specifies the time and date in which the task was last modified",
//                         example: "2024-02-14T09:31:35.086+00:00"
//                     },
//                     __v0: {
//                         type: "number",
//                         description: "Specifies the version of the document",
//                         example: "2024-02-14T09:31:35.086+00:00"
//                     }
//                 }
//             },
//             TaskInput: {
//                 type: "object",
//                 properties: {
//                     title: {
//                         type: "string",
//                         description: "Title for the task",
//                         example: "Task 1"
//                     },
//                     completed: {
//                         type: "boolean",
//                         description: "Indicates if the task has been completed (true) or not (false)",
//                         example: "false"
//                     }
//                 }
//             }
//         }
//     }
// }