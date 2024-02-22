import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Page3 = () => {
  const navigate = useNavigate();
  const countries = useSelector((store) => store.theme.countries);
  const form_data = useSelector((store) => store.theme.data.data);
  const data = form_data[form_data.length - 1];

  const handleReset = () => {
    navigate("/");
  }

  return (
    <div style={{ margin: "30px" }}>
      <h1>Thank you for the information</h1>
      <p>Please check all your details below</p>
      <div>
        <table border={2} className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Application Date</th>
              <th>Country</th>
              <th>Checked Country</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>{data?.first_name}</td>
              <td>{data?.last_name}</td>
              <td>{data?.application_date}</td>
              <td>{data?.country}</td>
              <td>{countries.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Page3