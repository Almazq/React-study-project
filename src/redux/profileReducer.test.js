import React from "react";
import {profileActionCreat} from "./profile-reducer";
import profileReducer from "./profile-reducer";

let state ={
  posts:[
    {id:1,posts:"Hi"},
    {id:2,posts:"My first post"},
    {id:3,posts:"I live"},
    {id:4,posts:"How are you?"},
    {id:5,posts:"Yes, Yes i good"}
  ]
}

it("length of post shulod" ,()=>{
  let action = profileActionCreat.addPostActionCreat("Almaz");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(6);
});

it("is add post shulod" ,()=>{
  let action = profileActionCreat.addPostActionCreat("Almaz");

  let newState = profileReducer(state, action);

  expect(newState.posts[5].posts).toBe("Almaz");
});

it("is delete post shulod" ,()=>{
  let action = profileActionCreat.deletePostActionCreat(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});
