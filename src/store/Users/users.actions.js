// Constants
import * as types from "./users.constants";

class Actions {
  /**
   * get/set users
   */
  handleUsers(users, options = {}) {
    return {
      type: options.saga ? types.SAGAS_GET_USERS : types.SET_USERS,
      payload: users,
    };
  }

  /** set loading state */
  setLoading(loading) {
    return {
      type: types.SET_LOADING,
      payload: loading,
    };
  }
}

const UsersActions = new Actions();

export default UsersActions;
