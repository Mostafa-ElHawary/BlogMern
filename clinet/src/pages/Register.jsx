const Register = () => {
    return (
      <form>
      <h1>Register</h1>

        <input className="username" type="text" placeholder="username"></input>
  
        <input
          className="password"
          type="password"
          placeholder="password"
        ></input>
        <button>Register </button>
      </form>
    );
  };
  
  export default Register ;
  