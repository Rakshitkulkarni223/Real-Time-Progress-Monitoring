import Donut from "./Donut";

const DonutChartWidgetWrapper = () => {
    return <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4" style={{
            background: 'rgb(22,26,45)',
            borderColor: '#fff'
        }}>
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between" style={{
                    background: 'rgb(22,26,45)',
                    borderColor: '#fff'
                }}
            >
                <h6 className="m-0 font-weight-bold text-light">Total Time vs Time Taken (in hrs)</h6>
            </div>
            <div className="card-body">
                <div className="chart-area" id="second-row">
                    <Donut />
                </div>
            </div>
        </div>
    </div>
}

export default DonutChartWidgetWrapper;