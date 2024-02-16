import LineChart from "./LineChart";

const LineChartWidgetWrapper = () => {
    return <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4" style={{
            background: 'rgb(22,26,45)',
            borderColor: '#fff'
        }}
        >
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between" style={{
                    background: 'rgb(22,26,45)',
                    borderColor: '#fff'
                }}
            >
                <h6 className="m-0 font-weight-bold text-light">Time Spent on Tasks</h6>
            </div>
            <div className="card-body">
                <div className="chart-area" id="second-row" >
                    <LineChart />
                </div>
            </div>
        </div>
    </div>
}

export default LineChartWidgetWrapper;