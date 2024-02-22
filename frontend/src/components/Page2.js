import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import countries from "../utils/countries";
import { setCountries } from "../Redux/slices/dataSlice";

const Page2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [checkCountry, setCheckCountry] = useState([]);
  const form_data = useSelector((store) => store.theme.data.data);
  const data = form_data[form_data.length - 1];

  const handleClick = () => {
    dispatch(setCountries(checkCountry));
    navigate("/page3");
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheckCountry([...checkCountry, e.target.value]);
    } else {
      const index = checkCountry.indexOf(e.target.value);
      if (index > -1) {
        checkCountry.splice(index, 1);
      }
    }
  };
  return (
    <div className="page2">
      <p>
        Hi, {data.first_name} {data?.last_name}
      </p>
      <div>
        <table border={2} className="table">
          <thead>
            <tr>
              <th style={{ width: "150px" }}>Check</th>
              <th style={{ width: "150px" }}>Country</th>
            </tr>
          </thead>

          {countries.map((data, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={handleCheck}
                      name={data.country}
                      value={data.country}
                    />
                  </td>
                  <td>{data.country}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div>
        <form className="terms">
          <input
            type="radio"
            name=""
            id="check"
            value=""
            className="checked"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="check">All the information are correct.</label>
        </form>
      </div>
      <button type="Submit" disabled={!checked} onClick={handleClick}>
        Save and Proceed
      </button>
    </div>
  );
};

export default Page2;
