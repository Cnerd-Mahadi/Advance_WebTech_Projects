import "../../src/App.css";

const LoginForm = () => {
  return (
    <div className="form-div">
      <h1>Submission Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input type="text" className="form-control" id="name" />
          <div id="error-name" className="error form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="email" />
          <div id="error-password" className="error form-text"></div>
        </div>

        <div className="d-grid gap-2">
          <button className="submit-button btn btn-primary" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
