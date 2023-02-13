import { Spin } from "antd";
import React from "react";
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions
import UsersActions from "../../store/Users/users.actions";
// Styles
import { StyledList, StyledWrapper } from "./index.styles";

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


  return (
    <StyledWrapper $myBackground="cyan">
      Users:
      <br />
      <div>{usersStore.loading ? <Spin /> : <ul>
        {usersStore.users.map((user, index) => <StyledList isActive={index === 2} key={user.id}>{user.name}</StyledList> )}<div className="y">hello</div></ul>}</div>
    </StyledWrapper>
  );
};

export default Users;
