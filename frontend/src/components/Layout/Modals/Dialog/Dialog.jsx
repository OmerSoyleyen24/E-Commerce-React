import "./Dialog.css"

const Dialog = ({ isDialogShow, setIsDialogShow }) => {
    const handleCloseDialog = (e) =>{
        const checked = e.target.checked

        localStorage.setItem("dialog", JSON.stringify(!checked))
    }
    return (
    <section id="modal-dialog" className={`${isDialogShow ? "show" : ""}`}>
    <div className="modal-content">
        <div className="modal-close" onClick={()=>{setIsDialogShow(false)}}>
            <i className="bi bi-x"></i>
        </div>
        <div className="modal-image">
            <img src="/img/modal-dialog.jpg" alt=""/>
        </div>
        <div className="popup-wrapper">
            <div className="popup-content">
                <div className="popup-title">
                    <h3>NEWSLETTER</h3>
                </div>
                <p className="popup-text">
                    Sign up to our newsletter and get exclusive deals you won find any where else straight to your
                    inbox!
                </p>
                <form className="popup-form">
                    <input type="text" placeholder="Enter Email Address Here"/>
                        <button className="btn btn-lg btn-primary">SUBSCRİBE</button>
                        <label htmlFor="popup-checkbox">
                            <input id="popup-checkbox" type="checkbox" onChange={handleCloseDialog}/>
                                <span>Don't show this popup again</span>
                        </label>
                </form>
            </div>
        </div>
    </div>
    <div className="modal-overlay" onClick={()=>{setIsDialogShow(false)}}></div>
</section>
  )
}

export default Dialog