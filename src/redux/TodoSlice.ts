import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const todoList = createAsyncThunk("todo/list", async () => {
  return (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
});

export interface todoItem {
  id: number;
  writer: string;
  date: string;
  contents: string;
}

export interface todo {
  writer: string;
  contents: string;
  storage: todoItem[];
  loading: boolean;
}

const initailState: todo = {
  writer: "",
  contents: "",
  storage: [],
  loading: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initailState,
  reducers: {},
  extraReducers: {},
});
