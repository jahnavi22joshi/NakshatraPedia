import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Constants from "expo-constants";

const { API_BASE_URL } = Constants.expoConfig?.extra || {};

type FetchCoursesPayload = {
  filters: {
    keyword: string;
    Category: any[];
    SubCategory: any[];
    Level: string[];
    isFree: boolean | null;
    ratingCount: number[];
  };
  sortBy: string;
  page: number;
};

// ==========================
// 📌 COURSE LIST API
// ==========================

export const fetchCourses = createAsyncThunk<
  any, // response type (you can improve later)
  FetchCoursesPayload, // 👈 payload type
  { rejectValue: string } // 👈 error type
>(
  "courses/fetchCourses",
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}course/getFilteredCourseList`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ==========================
// 📌 COURSE DETAILS API (NEW)
// ==========================
export const fetchCourseDetails = createAsyncThunk(
  'courses/fetchCourseDetails',
  async (slug: string, thunkAPI) => {

    try {
      const response = await fetch(
        `${API_BASE_URL}course/getAllCourseDetail?slug=${slug}`
      );

      const res = await response.json();
      const courseData = res?.data?.data;
      const sections = courseData?.courseSection || [];

      const formattedLessons = sections.map((section: any) => ({
        id: section.id,
        title: section.name,
        duration: `${section.sectionLecture?.length || 0} Lectures`,
        subLessons: (section.sectionLecture || []).map((lecture: any) => ({
          title: lecture.name,
          time: lecture.duration || "00:00",
        })),
      }));

      return {
        courseData,
        lessons: formattedLessons,
      };

    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBundles = createAsyncThunk(
  'courses/fetchBundles',
  async (courseId: number, thunkAPI) => {
    const { API_BASE_URL } = Constants.expoConfig?.extra || {};

    try {
      const res = await fetch(
        `${API_BASE_URL}bundle/getLimitedBundles?courseId=${courseId}&limit=3`
      );

      const data = await res.json();

      return data?.data?.data || [];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreCourses = createAsyncThunk(
  'courses/fetchMoreCourses',
  async ({ courseId, categoryId }: any, thunkAPI) => {
    const { API_BASE_URL } = Constants.expoConfig?.extra || {};

    try {
      const res = await fetch(
        `${API_BASE_URL}course/getLimitedCourses?courseId=${courseId}&categoryId=${categoryId}&limit=2`
      );

      const data = await res.json();

      return data?.data?.data || [];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ==========================
// 📌 SLICE
// ==========================
const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    data: [],
    courseDetails: null,
    lessons: [],
    bundles: [],
    moreCourses: [],
    loading: false,
    bundleLoading: false,
    moreLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {

    // -------------------
    // LIST API
    // -------------------
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // -------------------
    // DETAILS API
    // -------------------
    builder
      .addCase(fetchCourseDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.courseDetails = action.payload.courseData;
        state.lessons = action.payload.lessons;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


    // ====================
    // BUNDLES
    // ====================
    builder
      .addCase(fetchBundles.pending, (state) => {
        state.bundleLoading = true;
      })
      .addCase(fetchBundles.fulfilled, (state, action) => {
        state.bundleLoading = false;
        state.bundles = action.payload;
      })
      .addCase(fetchBundles.rejected, (state, action) => {
        state.bundleLoading = false;
        state.error = action.payload;
      });

    // ====================
    // MORE COURSES
    // ====================
    builder
      .addCase(fetchMoreCourses.pending, (state) => {
        state.moreLoading = true;
      })
      .addCase(fetchMoreCourses.fulfilled, (state, action) => {
        state.moreLoading = false;
        state.moreCourses = action.payload;
      })
      .addCase(fetchMoreCourses.rejected, (state, action) => {
        state.moreLoading = false;
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;