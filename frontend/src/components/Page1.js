import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import countries from "../utils/countries";
import { setData } from "../Redux/slices/dataSlice";

function Page1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("India");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: first,
      last_name: last,
      application_date: startDate,
      country: value,
    };
    const pushData = await fetch("/api/v1/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const getPushData = await fetch("/api/v1/getdata");
    const pushDataJson = await pushData.json();
    const getPushDataJson = await getPushData.json();

    if (pushDataJson.success && getPushDataJson.success) {
      dispatch(setData(getPushDataJson));
      navigate("page2");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={first}
          placeholder="First Name"
          required
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          type="text"
          value={last}
          placeholder="Last Name"
          required
          onChange={(e) => setLast(e.target.value)}
        />

        <input
          type="date"
          value={startDate}
          required
          onChange={(e) => setStartDate(e.target.value)}
        />

        <select
          name="country"
          id="country"
          className="select"
          onChange={(e) => setValue(e.target.value)}
        >
          {countries.map((data, index) => {
            return (
              <option value={data.country} key={index}>
                {data.country}
              </option>
            );
          })}
        </select>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Page1;
