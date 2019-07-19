import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://http://react-ssr-api.herokuapp.com/users')

  dispatch({ type: FETCH_USERS, paylaod: res.data })
}
