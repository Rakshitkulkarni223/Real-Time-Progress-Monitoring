const SingleScoreWidget = ({ title, score, icon }) => {

    var titleColor = "";
    var scoreColor = "";
    var iconColor = "";
    var borderLeftColor = "";

    if (icon === "fa fa-tasks") {
        titleColor = "rgb(228,174,184)";
        scoreColor = "rgb(228,174,184)";
        iconColor = "rgb(228,174,184)";
        borderLeftColor = "rgb(228,174,184)";
    } else if (icon === "fa fa-list") {
        titleColor = "#1cc88a";
        scoreColor = "#1cc88a";
        iconColor = "#1cc88a";
        borderLeftColor = "#1cc88a";
    } else if (icon === "fa fa-clock") {
        titleColor = "#6095F7";
        scoreColor = "#6095F7";
        iconColor = "#6095F7";
        borderLeftColor = "#6095F7";
    }


    return <div className="col-xl-3 col-md-6 mb-4">
        <div className="card shadow h-100 py-2" style={{
            background: 'rgb(22,26,45)',
            borderColor: 'rgb(22,26,45)',
            borderLeftWidth: '3px',
            borderLeftColor: borderLeftColor
        }}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-uppercase mb-1" style={{
                            color: titleColor
                        }}>
                            {title}</div>
                        <div id="card-earning-monthly-1"
                            className="h5 mb-0 font-weight-bold" style={{
                                color: scoreColor
                            }}>{score} {icon === "fa fa-clock" ? "hrs" : ""}</div>
                    </div>
                    <div className="col-auto">
                        <i className={`${icon} fa-2x`} style={{
                            color: iconColor
                        }}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SingleScoreWidget;