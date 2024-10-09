import "./styles.css";
import { useState, useEffect, useRef } from "react";
import Pill from "./components/Pill";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermDebounce, setSearchTermDebounce] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  const fetchUsers = async () => {
    if (searchTerm.trim() === "") return;
    try {
      const resp = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );
      if (!resp.ok) {
        throw new Error("Error fetching users...");
      }
      const data = await resp.json();
      setSuggestions(data);
    } catch (error) {
      console.log("Error fetching data... ", error);
    }
  };

  useEffect(() => {
    let time = setTimeout(() => {
      setSearchTermDebounce(searchTerm);
    }, 300);

    return () => {
      clearTimeout(time);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (searchTermDebounce) fetchUsers();
  }, [searchTermDebounce]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    const newSelectedUsers = selectedUsers.filter(
      (currUser) => currUser.id !== user.id
    );
    setSelectedUsers(newSelectedUsers);

    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };

  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 8 && e.target.value === "" && selectedUsers.length > 0) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
      setSuggestions([]);
    }
  };

  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {/* Pills */}
        {selectedUsers.map((user, idx) => {
          return (
            <Pill
              key={idx}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => {
                handleRemoveUser(user);
              }}
            />
          );
        })}

        {/* Input field with search suggestions */}
        <div>
          <input
            type="text"
            placeholder="search for a user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          {/* Search suggestions */}
          <ul className="suggestions-list">
            {suggestions?.users?.map((user, idx) => {
              return !selectedUserSet.has(user.email) ? (
                <li key={idx} onClick={() => handleSelectUser(user)}>
                  <img src={user.image} alt={user.firstName} />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
