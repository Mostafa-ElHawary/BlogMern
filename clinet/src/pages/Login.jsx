const Login = () => {
  return (
    <form>
    <h1>Login</h1>
      <input className="username" type="text" placeholder="username"></input>
  
      <input
        className="password"
        type="password"
        placeholder="password"
      ></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
