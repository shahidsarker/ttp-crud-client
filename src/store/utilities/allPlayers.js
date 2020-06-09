import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_PLAYERS = "FETCH_ALL_PLAYERS";

const allPlayers = [
  {
    firstName: "Kyrie",
    lastName: "Irving",
    jerseyNumber: 11,
  },
  {
    firstName: "LeBron",
    lastName: "James",
    jerseyNumber: 23,
  },
  {
    firstName: "Luka",
    lastName: "Doncic",
    jerseyNumber: 77,
  },
];

// ACTION CREATORS;
const fetchAllPlayers = (players) => {
  return {
    type: FETCH_ALL_PLAYERS,
    payload: players,
  };
};

// THUNK CREATORS;
export const fetchAllPlayersThunk = () => (dispatch) => {
  // return axios
  //   .get("/api/players")
  //   .then((res) => res.data)
  //   .then((players) => dispatch(fetchAllPlayers(players)))
  //   .catch((err) => console.log(err));

  return dispatch(fetchAllPlayers(allPlayers));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
