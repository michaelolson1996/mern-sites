const Alert = (props) => {
    return (
        <div className = "alert">
            <h3>{props.message}</h3>
            
            <style jsx>{`
            .alert {
                position:absolute;
                bottom:20px;
                width:auto;
                height:auto;
                padding-top: 8px;
                padding-bottom:8px;
                padding-left:20px;
                padding-right:20px;
                text-align:center;
                background-color:white;
                border: 4px solid ${props.border};
                border-radius:5px;
                z-index:110;
            }
            `}</style>
        </div>
    )
}

export default Alert