import { AppDataType } from "./InitialData";

const globalReducer = (appData: AppDataType, action: any) => {
  switch (action.type) {
    case "upvote": {
      return {
        ...appData,
        posts: [
          ...appData.posts.map((t) => {
            if (t.id === action.post.id) {
              let post = Object.assign({}, t);
              post.votes += 1;
              return post;
            } else {
              return t;
            }
          }),
        ],
      };
    }
    case "downVote": {
      return {
        ...appData,
        posts: [
          ...appData.posts.map((t) => {
            if (t.id === action.post.id) {
              let post = Object.assign({}, t);
              post.votes -= 1;
              return post;
            } else {
              return t;
            }
          }),
        ],
      };
    }
    case "added": {
      return {
        ...appData,
        posts: [
          ...appData.posts,
          {
            id: action.id,
            title: action.text,
            body: action.body,
            vote: action.vote,
          },
        ],
      };
    }
    case "changed": {
      return {
        ...appData,
        posts: [
          ...appData.posts.map((t) => {
            if (t.id === action.post.id) {
              return action.post;
            } else {
              return t;
            }
          }),
        ],
      };
    }
    case "deleted": {
      return {
        ...appData,
        posts: appData.posts.filter((t) => t.id !== action.id),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default globalReducer;
