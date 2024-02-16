const ProgressBarWidget = ({ title, score1, score2 }) => {

    return <div className="col-xl-3 col-md-6 mb-4">
        <div className="card shadow h-100 py-2" style={{
            background: 'rgb(22,26,45)',
            borderColor: 'rgb(22,26,45)',
            borderLeftWidth: '3px',
            borderLeftColor: "rgb(240,225,160)"
        }}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-uppercase mb-1" style={{
                            color: "rgb(240,225,160)"
                        }}>{title}
                        </div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div id="card-earning-monthly-3"
                                    className="h5 mb-0 mr-3 font-weight-bold" style={{
                                        color: "rgb(240,225,160)"
                                    }}>
                                    {
                                        Math.round((score1 / score2) * 100)
                                    }%
                                </div>
                            </div>
                            <div className="col">
                                <div id="card-earning-monthly-3_1"
                                    className="progress progress-sm mr-2">
                                    <div className="progress-bar" role="progressbar"
                                        style={{
                                            background: "#1cc88a",
                                            width: `${(score1 / score2) * 100}%`
                                        }} aria-valuenow={
                                            Math.round((score1 / score2) * 100)
                                        } aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x" style={{
                            color: "rgb(240,225,160)"
                        }}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProgressBarWidget;