const Alert = (props) => {
    return (
        <div className = "alert">
            <h3>{props.message}</h3>
            
            <style jsx>{`
            .alert {
                position:absolute;
                bottom:-60px;
                width:auto;
                height:auto;
                padding-top: 8px;
                padding-bottom:8px;
                padding-left:20px;
                padding-right:20px;
                text-align:center;
                animation: floatIn 3s ease;
                background-color:white;
                border: 4px solid ${props.border};
                border-radius:5px;
                z-index:110;
            }

            @keyframes floatIn {
                0% {
                    bottom:-60px;
                }
                80% {
                    bottom:10px;
                }
                100% {
                    bottom:20px;
                }
            }
            `}</style>
        </div>
    )
}

export default Alert