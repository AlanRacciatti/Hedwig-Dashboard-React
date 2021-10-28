const CardInfo = (props) => {
    let cardBorder = "card shadow h-100 py-2 " + props.border
    let cardText =  props.color + " text-xs font-weight-bold text-uppercase mb-1 "
    let icon = props.icon + " fa-2x text-gray-300"
    return (
        <div className="col-md-4 mb-4">
            <div className={cardBorder}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={cardText}>{props.name}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardInfo
