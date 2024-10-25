

function Footer(props){

    const {handleToggleModle, data} = props

    return(
        <footer>
            <div className="bggradient" ></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModle} >
            <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer;