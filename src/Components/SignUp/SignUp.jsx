import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import "./SignUp.css";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="sign-up-page">
        <div className="form-board-body card">
          <form action="/" onSubmit={handleSubmit}>
            <div className="info-set">
              <div className="info-item">
                <label className="icon">
                  <PersonIcon />
                </label>
                <input
                  className="input-tags"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <EmailIcon />
                </label>
                <input
                  className="input-tags"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <CallIcon />
                </label>
                <input
                  className="input-tags"
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <PersonOutlineIcon />
                </label>
                <select name="Gender" className="input-tags">
                  <option value="-1">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="info-item">
                <label className="icon">
                  <KeyIcon />
                </label>
                <input
                  className="input-tags"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <KeyIcon />
                </label>
                <input
                  className="input-tags"
                  type="password"
                  name="re-password"
                  id="re-password"
                  placeholder="Re-Password"
                  required
                />
              </div>
            </div>

            <div>
              <button type="submit" className="register-button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
