import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: "",
  dueToday: [],
  solvedToday: [],
  currentDate: "",
  username: "",
  password: "",
  isLoggedIn: false,
  signupUsername: "",
  signupPassword: "",
  signupEmail: "",
  questionName: "",
  questionDescription: "",
  questionDifficulty: "",
  questionTags: "",
  questionSolved: false,
  allQuestions: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLink: (state, action) => {
      state.link = action.payload;
    },
    setDueToday: (state, action) => {
      state.dueToday = action.payload;
    },
    setSolvedToday: (state, action) => {
      state.solvedToday = action.payload;
    },
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setSignupUsername: (state, action) => {
      state.signupUsername = action.payload;
    },
    setSignupPassword: (state, action) => {
      state.signupPassword = action.payload;
    },
    setSignupEmail: (state, action) => {
      state.signupEmail = action.payload;
    },
    setAllQuestions: (state, action) => {
      state.allQuestions = action.payload;
    },
    setQuestionName: (state, action) => {
      state.questionName = action.payload;
    },
    setQuestionDescription: (state, action) => {
      state.questionDescription = action.payload;
    },
    setQuestionDifficulty: (state, action) => {
      state.questionDifficulty = action.payload;
    },
    setQuestionTags: (state, action) => {
      state.questionTags = action.payload;
    },
    setQuestionSolved: (state, action) => {
      state.questionSolved = action.payload;
    },
  },
});

export const {
  setLink,
  setDueToday,
  setSolvedToday,
  setCurrentDate,
  setUsername,
  setPassword,
  setIsLoggedIn,
  setSignupUsername,
  setSignupPassword,
  setSignupEmail,
  setAllQuestions,
  setQuestionName,
  setQuestionDescription,
  setQuestionDifficulty,
  setQuestionTags,
  setQuestionSolved,
} = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});
