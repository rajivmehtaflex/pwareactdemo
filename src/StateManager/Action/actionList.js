const ACTION_PING = "action_ping";

const ADD_REPO = repos=>{
    return {
        type:'add_repo',repos
    }
};
const CLEAR_REPO = "clear_repo";

const getRepos = username => async dispatch => {
    try {
      const url = `https://api.github.com/users/${username}/repos?sort=updated`;
      const response = await fetch(url);
      const responseBody = await response.json();
      dispatch(ADD_REPO(responseBody));
    } catch (error) {
      console.error(error);
      //dispatch(clearRepos());
    }
  };
  

// const asynFunc = (User) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(User)
//         }, 1000);
//     })
// };

// const GET_REPO = user => async dispatch => {
//     const data = await asynFunc(user);
//     alert(data);
// };



export { ACTION_PING, ADD_REPO, CLEAR_REPO,getRepos }