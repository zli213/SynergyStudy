/**
 * Get a specific task according taskID
 *
 * param: taskId
 */

import connect from "./db";
import Tasks from "../../models/Tasks";

export default async function getOneTask(taskId) {
  //connect to the DB
  //   await connect();

  try {
    //find the tasks
    const task = await Tasks.findOne({ _id: taskId });

    if (!task) {
      console.log(`No task found with id: ${taskId}`);
      throw new Error("Task not found");
    }

    return task;
  } catch (error) {
    throw new Error("Error getting tasks");
  }
}