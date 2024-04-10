import {createContext, useReducer} from 'react';

export const PostListData = createContext ({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer (
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostListData.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
    reactions: 2,
    userId: 'user-9',
    tags: ['vacation', 'Mumbai', 'Enjoying'],
  },
  {
    id: '2',
    title: 'Paas ho bhai',
    body: '4 saal ki masti ke baad bhi ho gaye hain paas. Hard to believe.',
    reactions: 15,
    userId: 'user-12',
    tags: ['Graduating', 'Unbelievable'],
  },
];

export default PostListProvider;
