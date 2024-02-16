import React, { useState } from "react";
import './css/TaskList.css'
import { convertedJSON } from "../dataset/data";

const TaskList = () => {

    const [filterData, setFilterData] = useState(convertedJSON);
    const [searchTaskName, setSearchTaskName] = useState('');

    const handleSearchBar = (e) => {
        setSearchTaskName(e.target.value)
        setFilterData(convertedJSON.filter((task) => {
            var taskName = task.name.toLowerCase();
            var searchInput = e.target.value.toLowerCase();
            return taskName.includes(searchInput)
        }))
    }


    return <div className="col-lg-8 mb-3">
        <div className="card shadow mb-3" style={{
            background: 'rgb(22,26,45)',
            borderColor: '#fff'
        }}>
            <div className="card-header" style={{
                background: 'rgb(22,26,45)',
                borderColor: '#fff'
            }}>
                <div className="row justify-content-between px-2">
                    <div className="d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-light">All Tasks</h6>
                    </div>
                    <div className="col-lg-4 searchbar">
                        <input className="search_input" type="text" name="search_bar" placeholder="Search task... " onChange={handleSearchBar} />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="table-responsive" id="second-row">
                    {filterData.length > 0 ? <table className="table text-light" id="myTasks">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Task</th>
                                <th scope="col">Status</th>
                                <th scope="col">Time Spent (in hrs)</th>
                                <th scope="col">Actual Time Required (in hrs)</th>
                                <th scope="col">Category</th>
                                <th scope="col">Improvement Needed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(filterData).map((task) =>
                                    <tr key={`filterData[task]${task}`} style={{
                                        color: filterData[task].status === 'YES' ? '#1EAAE2' : '#fff',
                                    }}>
                                        <td >{parseInt(task) + 1}</td>
                                        <td ><div className="text text-uppercase">{filterData[task].name}</div></td>
                                        <td >
                                            <div className="text text-uppercase">
                                                {filterData[task].status === 'YES' ? "Completed" : "Active"}
                                            </div>
                                        </td>
                                        <td ><div className="text text-uppercase">{filterData[task].timeTaken}</div></td>
                                        <td ><div className="text text-uppercase">{filterData[task].avgTimeRequired}</div></td>
                                        <td ><div className="text text-uppercase">{filterData[task].category}</div></td>
                                        <td style={{
                                            color: filterData[task].improvementNeeded === "YES" ? "rgb(231, 74, 59)" : "rgb(28, 200, 138)",
                                        }}><div className="text text-uppercase">{filterData[task].improvementNeeded}</div></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table> : <div className="row justify-content-center" style={{
                        wordBreak: 'break-all',
                        paddingRight: '50px',
                        paddingLeft: '50px',
                    }}>
                        <h4 style={{
                            color: "#CFCCCC"
                        }}>Sorry, we couldn't find any tasks for </h4>
                        <h4 style={{
                            color: 'rgb(231, 74, 59)',
                            marginLeft: '5px'
                        }}>{searchTaskName}</h4>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default TaskList;