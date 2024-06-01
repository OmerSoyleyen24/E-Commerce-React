const Register = () => {
  return (
    <div className="account-column">
            <strong>
                <h2>Register</h2>
            </strong>
            <form>
                <div>
                    <label>
                        <span>Username<span>*</span></span>
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email address<span>*</span></span>
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password <span>*</span></span>
                        <input type="text" />
                    </label>
                </div>
                <div className="remember">
                    <div>
                        Your personal data will be used to support your experience throughout this website to
                        manage
                        access to your account, and for other purposes described in our <a href="#">privacy
                            policy</a>
                    </div>
                    <button className="btn btn-sm">Register</button>
                </div>
            </form>
        </div>
  )
}

export default Register