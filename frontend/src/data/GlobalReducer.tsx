import { AppDataType } from "./InitialData";

const globalReducer = (appData: AppDataType, action: any) => {
  switch (action.type) {
    case "getAll": {
      return {
        ...appData,
        posts: action.posts,
      };
    }
    case "upvote": {
      return {
        ...appData,
        posts: {
          meta: appData.posts.meta,
          data: appData.posts.data.map((t) => {
            if (t.id === action.post.id) {
              let post = Object.assign({}, t);
              post.votes += 1;
              return post;
            } else {
              return t;
            }
          }),
        },
      };
    }
    case "downVote": {
      return {
        ...appData,
        posts: {
          meta: appData.posts.meta,
          data: appData.posts.data.map((t) => {
            if (t.id === action.post.id) {
              let post = Object.assign({}, t);
              post.votes -= 1;
              return post;
            } else {
              return t;
            }
          }),
        },
      };
    }
    case "create": {
      return {
        ...appData,
        posts: {
          meta: appData.posts.meta,
          data: [
            ...appData.posts.data,
            {
              id: null,
              title: action.post.title,
              body: action.post.body,
              votes: 0,
            },
          ],
        },
      };
    }
    case "changed": {
      return {
        ...appData,
        posts: {
          meta: appData.posts.meta,
          data: appData.posts.data.map((t) => {
            if (t.id === action.post.id) {
              return action.post;
            } else {
              return t;
            }
          }),
        },
      };
    }
    case "deleted": {
      return {
        ...appData,
        posts: {
          meta: appData.posts.meta,
          data: appData.posts.data.filter((t) => t.id !== action.id),
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default globalReducer;
