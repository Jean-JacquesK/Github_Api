import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import UsersResults from "../../components/UsersResults/UsersResults";

function HomePage() {
  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("");

  const handleChange = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLInputElement;
    setSearch(target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setUserName(search);
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='usrnameInput'></label>
        <div className='d-flex justify-content-center mx-2'>
          <input
            type='search'
            id='usernameInput'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-lg'
            style={{ width: "50%" }}
            placeholder='Search'
            value={search}
            onChange={handleChange}
          />
          <button type='submit' className='btn btn-outline-secondary mx-2'>
            <FaSearch />
          </button>
        </div>
      </form>

      <UsersResults userName={userName} />
    </div>
  );
}

export default HomePage;
