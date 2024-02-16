import { ImprovementStatWidget } from "./ImprovementStatWidget";

const AreasOfImprovementWidget = () => {
    return <div className="col-lg-6 mb-3">
        <div className="card shadow mb-3" style={{
            background: 'rgb(22,26,45)',
            borderColor: '#fff'
        }}>
            <div className="card-header py-3" style={{
                background: 'rgb(22,26,45)',
                borderColor: '#fff'
            }}>
                <h6 className="m-0 font-weight-bold text-light">Areas Of Improvement</h6>
            </div>
            <div className="card-body">
                <div id="second-row" className="chart-area" >
                    <ImprovementStatWidget />
                </div>
            </div>
        </div>
    </div>
}

export default AreasOfImprovementWidget;