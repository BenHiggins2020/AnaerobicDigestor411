// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
        id: '0',
        name: 'Matt',
        email: 'mhiggins33@bucknell.edu',
        password: '123456',
        account:'Admin',
    },
    {
      id: '1',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
      account:'Free',
    },
  ];

const posts = [
    {
        id:"0",
        date: new Date().getDate(),
        title: "Post 1",
        body: "This is the first post! ",
        data: null
    },
    {
        id:"1",
        date: new Date().getDate(),
        title: "Post 2",
        body: "This is the Second post! asdflkasjdl;fja;slkfj;asdkfj;alskdfj;alskdfal;sd",
        data: null
    },

];
  
  module.exports = {
    users,
    posts,
  };