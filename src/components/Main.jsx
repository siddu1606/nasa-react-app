
function Main(props){

    const {handleToggleModle, data} = props

    return(
        <div className="imgcontainer" >
            <img src= {data?.hdurl} alt = {data.title || 'bg-image' } className="bgimage" onClick={handleToggleModle} />
        </div>
    )
}

export default Main;  