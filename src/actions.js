import { CHANGE_SEARCH_FIELD ,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";


export const setSearchField=(text)=>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
}
)

export const requestRobots=()=>(dispatch)=>{ 
    /* This is function that returns a function. Now this will be used by the thunk middleware.
    (Because Redux thunk waits and sees if any action 
        is returning a function instead of a object)*/
    dispatch({type:REQUEST_ROBOTS_PENDING});

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>dispatch({ type:REQUEST_ROBOTS_SUCCESS,payload: data}))
    .catch(error=>dispatch({ type: REQUEST_ROBOTS_FAILED,payload: error}));
}