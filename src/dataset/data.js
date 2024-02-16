import JSONdata from './data.json';

// const generateData = () => {
//     var data = { "tasks": [] }
//     const status = ["YES", "NO"]
//     for (let i = 0; i < 25; i++) {
//         var categoryId = Math.floor(Math.random() * 5) + 1
//         var time = Math.floor(Math.random() * 25) + 1
//         var actualTime = Math.floor(Math.random() * 25) + 1
//         var improvementNeeded = time > actualTime ? "YES" : "NO"
//         var statusIndex = Math.floor(Math.random() * 2);
//         data["tasks"].push({
//             "name": `Task ${i + 1}`,
//             "category": `Cat ${categoryId}`,
//             "timeTaken": time,
//             "avgTimeRequired": actualTime,
//             "status": status[statusIndex],
//             "improvementNeeded": improvementNeeded
//         })
//     }
//     return data;
// }

// if (localStorage.getItem("data") === null) {
//     localStorage.setItem("data", JSON.stringify(generateData()));
// }

const data = JSONdata;

const convertedLIST = [{
    "name": [],
    "category": [],
    "timeTaken": [],
    "avgTimeRequired": [],
    "status": [],
    "improvementNeeded": []
}]

var incompleteTasks = []
var allEnrolledCategories = {}
var enrolledActiveCategories = {}
var areaImprovment = {};
var activeTasksByVolume = {}

const totalTasks = 25;

const taskCompletedCount = data.tasks.filter((task) => task.status === "YES").length

const timeTakenToComplete = data.tasks.reduce((acc, currTask) => acc + currTask.timeTaken, 0);

const totalTime = data.tasks.reduce((acc, currTask) => acc + currTask.avgTimeRequired, 0);

const convertedJSON = data.tasks;

data.tasks.forEach((task) => {

    if (task.status === "NO") {
        incompleteTasks.push([
            task.name,
            task.timeTaken,
            task.avgTimeRequired,
            task.category
        ])
    }

    if (areaImprovment[task.category] === undefined) {
        areaImprovment[task.category] = 0
    }
    if (allEnrolledCategories[task.category] === undefined) {
        allEnrolledCategories[task.category] = 0;
        enrolledActiveCategories[task.category] = { "Active": 0 }
    }

    allEnrolledCategories[task.category] += 1;
    enrolledActiveCategories[task.category]["Active"] += task.status === "NO" ? 1 : 0;
    activeTasksByVolume[task.category] = enrolledActiveCategories[task.category]["Active"] / allEnrolledCategories[task.category]

    areaImprovment[task.category] += (task.avgTimeRequired - task.timeTaken)
    convertedLIST[0].name.push(task.name)
    convertedLIST[0].category.push(task.category)
    convertedLIST[0].timeTaken.push(task.timeTaken)
    convertedLIST[0].avgTimeRequired.push(task.avgTimeRequired)
    convertedLIST[0].status.push(task.status)
    convertedLIST[0].improvementNeeded.push(task.improvementNeeded)
})

activeTasksByVolume = Object.entries(activeTasksByVolume)
    .sort(([, a], [, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});


export {
    data,
    totalTasks,
    taskCompletedCount,
    timeTakenToComplete,
    totalTime,
    areaImprovment,
    activeTasksByVolume,
    convertedJSON,
    incompleteTasks,
    convertedLIST,
    enrolledActiveCategories,
    allEnrolledCategories
}