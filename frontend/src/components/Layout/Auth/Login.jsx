const Login = () => {
    return (
        <div className="account-column">
            <strong>
                <h2>Login</h2>
            </strong>
            <form>
                <div>
                    <label>
                        <span>Username or email address <span>*</span></span>
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password <span>*</span></span>
                        <input type="text" />
                    </label>
                </div>
                <p className="remember">
                    <label>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </label>
                    <button className="btn btn-sm">Login</button>
                </p>
                <a className="form-link">Lost your password ? </a>
            </form>
        </div>
    )
}


export default Login;