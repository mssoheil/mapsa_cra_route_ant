import { Spin } from "antd";
import React from "react";
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import UsersActions from "../../store/Users/users.actions";

const Users = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const isLoaded = React.useRef(false);

  React.useEffect(() => {
    if (isLoaded.current) {
      return;
    }

    dispatch(UsersActions.handleUsers(null, { saga: true }));

    return () => {
      isLoaded.current = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Debug ~ Users ~ usersStore", usersStore);

  return (
    <div>
      Users:
      <br />
      <div>{usersStore.loading ? <Spin /> : <ul>
        {usersStore.users.map(user => <li key={user.id}>{user.name}</li> )}</ul>}</div>
    </div>
  );
};

export default Users;
