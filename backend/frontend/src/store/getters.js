export function getLoading (state) {
  return state.loading
}

export function getIsLoggedIn (state) {
  if (state.accessToken) {
    return true
  } else {
    return false
  }
}

export function getMyId (state) {
  return state.myId
}