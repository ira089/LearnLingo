import { useSelector } from "react-redux";

export function useAuth() {
  const {name, email, token, id} = useSelector(state => state.user);
  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  }
}


export const handlePending = state => {
    state.isLoading = true;
    state.error = null;
  };
  
  export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  };
  export const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
  };