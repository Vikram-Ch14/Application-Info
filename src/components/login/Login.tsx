const Login = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-[30%] p-[2rem] border">
        <form action="" className="flex flex-col  gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="p-[0.5rem] w-full border rounded-lg outline-none"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="p-[0.5rem] w-full border rounded-lg outline-none"
            />
          </div>

          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
