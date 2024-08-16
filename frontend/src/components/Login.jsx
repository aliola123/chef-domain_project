import '../App.css/Login.css';

const Login = () => {
  return (
    <div className="containerStyle">
      <h2>Login</h2>

      <form action="/login" method="POST" className="formStyle">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="inputStyle"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="inputStyle"
        />
        <div className="checkboxContainerStyle">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="checkboxStyle"
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button type="submit" className="buttonStyle">Sign In</button>
      </form>
      <a href="/signup" className="signupLinkStyle">Create an account</a>
    </div>
  );
};

export default Login;
