import React, { useEffect, useState } from "react";
// import { users } from "./data";
import _ from "lodash";
import useApi from "./use-api";

const SearchEngine = () => {
  const {
    state: { data },
  } = useApi();
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(data?.results);

  const handleSearchFilter = (e: any) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filter = _.filter(data?.results, (user: any) => {
        return _.includes(
          _.lowerCase(JSON.stringify(_.values(user))),
          _.lowerCase(searchValue)
        );
      });
      setFilteredUsers(filter);
    }, 500);
    return () => clearTimeout(timeout);
  }, [data?.results, searchValue]);

  console.log(data?.results);

  return (
    <div>
      <div className="App">
        <h1>Users</h1>

        <input
          type="search"
          placeholder="Search users..."
          value={searchValue}
          onChange={handleSearchFilter}
        />
        <ul className="user-list">
          {_.map(filteredUsers, (user: any) => (
            <li key={user.id}>
              <strong>
                {user.name.title} {user.name.first} {user.name.last}
              </strong>

              <br />
              <small>{user.email}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchEngine;
