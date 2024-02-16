import Chart from "chart.js/auto";
import './App.css'
import {
  totalTasks,
  taskCompletedCount,
  timeTakenToComplete,
} from './dataset/data';
import { IncompletedTasksWidget } from "./pages/IncompletedTasksWidget";
import NavBar from "./pages/NavBar";
import SingleScoreWidget from "./pages/SingleScoreWidget";
import ProgressBarWidget from "./pages/ProgressBarWidget";
import LineChartWidgetWrapper from "./pages/LineChartWidgetWrapper";
import DonutChartWidgetWrapper from "./pages/DonutWidgetWrapper";
import AreasOfImprovementWidget from "./pages/AreasOfImprovementWidget";
import TaskList from "./pages/TaskList";
import MostEnrolledCategory from "./pages/MostEnrolledCategory";


export default function App() {
  return (
    <div className="dashboard" style={{
      backgroundImage: "linear-gradient(to right, #1D5E6A, #263D55)"
    }}>
      <div id="wrapper">

        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">

            <NavBar />

            <div id="padding-begin-page-content" style={{
              padding: "12px"
            }} ></div>


            <div className="container-fluid" id="container-fluid">

              <div className="row">
                <SingleScoreWidget title="Total Tasks" score={totalTasks} icon="fa fa-tasks" />
                <SingleScoreWidget title="Completed Tasks" score={taskCompletedCount} icon="fa fa-list" />
                <SingleScoreWidget title="Total Time Spent on Tasks" score={timeTakenToComplete} icon="fa fa-clock" />
                <ProgressBarWidget title="Active vs Completed Tasks" score1={taskCompletedCount} score2={totalTasks} />
              </div>


              <div className="row">
                <TaskList />
                <IncompletedTasksWidget />
              </div>

              <div className="row">
                <LineChartWidgetWrapper />
                <DonutChartWidgetWrapper />
              </div>

              <div className="row">
                <MostEnrolledCategory />
                <AreasOfImprovementWidget />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div >
  );
}
