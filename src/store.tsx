import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
export type RootState = ReturnType<typeof store.getState>;

const movieList = createSlice({
  name: "movieList",
  initialState: {
    movies: [
      {
        id: "",
        title: "",
        genre: [""],
        synop: "",
        director: "",
        cast: [""],
        rating: "",
        runTime: 0,
        year: 0,
        img: "",
      },
    ],
    result: [
      {
        id: "",
        title: "",
        genre: [""],
        synop: "",
        director: "",
        cast: [""],
        rating: "",
        runTime: 0,
        year: 0,
        img: "",
      },
    ],
  },
  reducers: {
    setMovies(state, action: PayloadAction<[]>) {
      state.movies = action.payload;
      state.result = action.payload;
      console.log(state.movies);
    },
    findMoviesByValue(state, action: PayloadAction<string>) {
      const result = state.movies.filter(
        (item) =>
          item.title.includes(action.payload) ||
          item.genre.some((el) => el.includes(action.payload)) ||
          item.director.includes(action.payload) ||
          item.cast.toString().includes(action.payload),
      );
      state.result = result;
    },
    findMoviesByTag(state, action: PayloadAction<string>) {
      let result;
      if (action.payload === "전체") {
        result = state.movies;
      } else {
        result = state.movies.filter((item) => item.genre.some((el) => el == action.payload));
      }
      state.result = result;
    },
  },
});
export const { setMovies, findMoviesByValue, findMoviesByTag } = movieList.actions;

// test-progress
const progressSlice = createSlice({
  name: "progress",
  initialState: { progress: 0, data: [{ id: 0, answer: [""] }], ansIdxArray: [0], testResultIdx: 0 },
  reducers: {
    incrementProgress(state, action: PayloadAction<number>) {
      state.progress += action.payload;
      console.log("progress is " + state.progress);
    },
    decrementProgress(state, action: PayloadAction<number>) {
      if (state.progress > 0) {
        state.progress -= action.payload;
      }
      console.log("progress is " + state.progress);
    },
    resetProgress(state) {
      state.progress = 0;
      console.log("reset progress " + state.progress);
    },
    onChangeAnsIdx(state, action: PayloadAction<number>) {
      state.ansIdxArray = state.ansIdxArray.concat(action.payload);
      console.log("onChange ansIdxArray " + state.ansIdxArray);
    },
    delLastAnsIdx(state) {
      state.ansIdxArray = state.ansIdxArray.slice(0, state.ansIdxArray.length - 1);
      console.log("del last idx " + state.ansIdxArray);
    },
    resetAnsIdx(state) {
      state.ansIdxArray = [0];
      console.log("reset ansIdxArray " + state.ansIdxArray);
    },
    // test-result calculate part
    testResultCalc(state: any): any {
      let drama = 0;
      let fantasy = 0;
      let hero = 0;
      let action = 0;
      let comedy = 0;
      let anime = 0;
      let music = 0;
      let horror = 0;
      let criminal = 0;
      let romance = 0;
      let sf = 0;
      let adult = 0;

      const verygood = 2;
      const good = 1.45;
      const soso = 0.9;
      const bad = 0.5;
      const verybad = -0.45;

      // 질문 1번
      if (state.ansIdxArray[1] === 0) {
        criminal += verygood;
        hero += good;
        action += soso;
        horror += bad;
        romance += verybad;
        drama += verybad;
      } else if (state.ansIdxArray[1] === 1) {
        comedy += verygood;
        drama += soso;
        hero += soso;
        music += verybad;
      } else if (state.ansIdxArray[1] === 2) {
        romance += verygood;
        drama += verygood;
        adult += good;
        action += verybad;
        criminal += verybad;
        horror += verybad;
      }

      // 질문 2번
      if (state.ansIdxArray[2] === 0) {
        fantasy += verygood;
        anime += soso;
        sf += verybad;
      } else if (state.ansIdxArray[2] === 1) {
        sf += verygood;
        romance += soso;
      } else if (state.ansIdxArray[2] === 2) {
        action += verygood;
        adult += soso;
      } else if (state.ansIdxArray[2] === 3) {
        anime += verygood;
        fantasy += soso;
      }

      // 질문 3번
      if (state.ansIdxArray[3] === 0) {
        drama += verygood;
        horror += soso;
        sf += verybad;
      } else if (state.ansIdxArray[3] === 1) {
        music += verygood;
        hero += soso;
      }

      // 질문 4번
      if (state.ansIdxArray[4] === 0) {
        comedy += verygood;
        music += soso;
        horror += verybad;
      } else if (state.ansIdxArray[4] === 1) {
        fantasy += verygood;
        drama += soso;
      }

      // 질문 5번
      if (state.ansIdxArray[5] === 0) {
        criminal += verygood;
        hero += soso;
        anime += verybad;
      } else if (state.ansIdxArray[5] === 1) {
        adult += verygood;
        criminal += soso;
      }

      // 질문 6번
      if (state.ansIdxArray[6] === 0) {
        sf += verygood;
        drama += soso;
        adult += verybad;
      } else if (state.ansIdxArray[6] === 1) {
        hero += verygood;
        comedy += soso;
      }

      // 질문 7번
      if (state.ansIdxArray[7] === 0) {
        comedy += verygood;
        romance += soso;
        horror += verybad;
      } else if (state.ansIdxArray[7] === 1) {
        action += verygood;
        fantasy += soso;
      }

      // 질문 8번
      if (state.ansIdxArray[8] === 0) {
        drama += verygood;
        action += soso;
        anime += verybad;
      } else if (state.ansIdxArray[8] === 1) {
        music += verygood;
        sf += soso;
      }
      const resultArr = [drama, fantasy, hero, action, comedy, anime, music, horror, criminal, romance, sf, adult];
      console.log(resultArr);

      state.testResultIdx = resultArr.findIndex((el) => el >= Math.max.apply(null, resultArr));
      console.log(state.testResultIdx);
    },
  },
});

export const { incrementProgress, decrementProgress, resetProgress, onChangeAnsIdx, delLastAnsIdx, resetAnsIdx, testResultCalc } =
  progressSlice.actions;

// Home page
const homeSlice = createSlice({
  name: "home",
  initialState: { page: 0, transY: 0, innerHeight: 0, footer: 0 },
  reducers: {
    setInnerHeight(state, action: PayloadAction<number>) {
      state.innerHeight = action.payload;
    },
    pageDown(state) {
      if (state.page < 3) {
        state.page += 1;
      } else {
        state.footer = 105;
      }
    },
    pageUp(state) {
      if (state.page === 3 && state.footer > 0) {
        state.footer = 0;
      } else if (state.page > 0) {
        state.page -= 1;
      }
    },
    setTransY(state) {
      state.transY = state.page * state.innerHeight;
    },
  },
});
export const { setInnerHeight, pageDown, pageUp, setTransY } = homeSlice.actions;

const store = configureStore({
  reducer: {
    movieList: movieList.reducer,
    progress: progressSlice.reducer,
    home: homeSlice.reducer,
  },
});
export default store;
