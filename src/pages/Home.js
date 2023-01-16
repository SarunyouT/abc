import React, { useEffect, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [covidData, setCovidData] = useState([]);
  const [covidDataFilter, setCovidDataFilter] = useState([]);

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);

    const filterList = covidData.filter((list) => {
      return (
        list.province.includes(event.target.value) ||
        list.total_case.toString().includes(event.target.value)
      );
    });

    setCovidDataFilter(filterList);
  };

  const getData = async () => {
    const response = await fetch(
      "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"
    );
    const data = await response.json();

    setCovidData(data);
    setCovidDataFilter(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        onChange={onInputChange}
        value={searchTerm}
        className="search-input"
      />
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <td>จังหวัด</td>
            <td>จำนวนผู้ติดเชื้อ</td>
            <td>จำนวนผู้เสียชีวิต</td>
          </tr>
        </thead>
        <tbody>
          {covidDataFilter.map((item) => {
            return (
              <tr>
                <td>{item.province}</td>
                <td>{item.total_case}</td>
                <td>{item.total_death}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
