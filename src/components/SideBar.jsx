

function SideBar(props){

    const {handleToggleModle, data} = props

    return(
        <div className="sidebar" >
            <div className="bgoverlay" ></div>
            <div className="sidebarconatents" >
            <h2 > {data?.title} </h2>
            <div className="dicriptioncontainer" >
                <p className="discription" >{data?.date}</p>
                <p> {data?.explanation} </p>
            </div>
            <button onClick={handleToggleModle} >
            <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
    )
}

export default SideBar;