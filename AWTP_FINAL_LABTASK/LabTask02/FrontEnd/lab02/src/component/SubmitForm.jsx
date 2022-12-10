import "../../src/App.css";

const SubmitForm = ({ textChange, value, onClick }) => {
  return (
    <div className="form-div">
      <h1>Registration Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            name="name"
            value={value.name}
            onChange={textChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Title"
            className="form-control"
            name="email"
            value={value.email}
            onChange={textChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <br />
          <input
            type="radio"
            placeholder="Title"
            value="Male"
            name="male"
            onChange={textChange}
          />
          <label htmlFor="male" className="radio">
            Male
          </label>
          <input
            type="radio"
            value="Female"
            name="female"
            onChange={textChange}
          />
          <label htmlFor="female" className="radio">
            Female
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            className="form-select"
            name="country"
            placeholder="Title"
            aria-label="Default select example"
            onChange={textChange}
          >
            <option defaultValue="">Select from menu</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Bangladesh">Bangladesh</option>
          </select>
        </div>
        <div className="d-grid gap-2">
          <button
            className="submit-button btn btn-primary"
            type="button"
            onClick={onClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
