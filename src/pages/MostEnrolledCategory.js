import { activeTasksByVolume } from "../dataset/data";

const MostEnrolledCategory = () => {
    return <div className="col-lg-6 mb-3">
        <div className="card shadow mb-3" style={{
            background: 'rgb(22,26,45)',
            borderColor: '#fff'
        }}>
            <div className="card-header py-3" style={{
                background: 'rgb(22,26,45)',
                borderColor: '#fff'
            }}>
                <h6 className="m-0 font-weight-bold text-light">Remaining Active Tasks In Each Categories</h6>
            </div>
            <div className="card-body">
                <div className="chart-area" id="second-row" style={{
                    paddingRight: "20px"
                }}>
                    {
                        Object.keys(activeTasksByVolume).map((category) => activeTasksByVolume[category] !== 0 && <div key={category}>
                            <h4 className="small font-weight-bold">{category}<span
                                className="float-right">{Math.round(activeTasksByVolume[category] * 100)}%</span></h4>
                            <div className="progress mb-4">
                                <div className={Math.round(activeTasksByVolume[category] * 100) >= 70 ? `progress-bar bg-danger` : Math.round(activeTasksByVolume[category] * 100) >= 35 ? `progress-bar bg-warning` : `progress-bar bg-success`}
                                    role="progressbar"
                                    style={{
                                        width: `${Math.round(activeTasksByVolume[category] * 100)}%`
                                    }}
                                    aria-valuenow={Math.round(activeTasksByVolume[category] * 100)} aria-valuemin="0" aria-valuemax="100"></div>
                            </div></div>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default MostEnrolledCategory;