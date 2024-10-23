import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import myPageRouter from "./myPageRouter";
import PostDetailpage from "../pages/PostDetailpage/PostDetailpage";
import UserSettings from "../pages/userSettings";
import MyHome from "../pages/MyHome";

const loading = <div>loading...</div>;
const MyPage = lazy(() => import("../pages/myPage/Index"));
const MainLayout = lazy(() => import("../pages/Index"));
const VoicePostPage = lazy(() => import("../pages/voicePost/Index"));
const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loading}>
        <MainLayout />
      </Suspense>
    ),
  },
  {
    path: "/post/detail",
    element: (
      <Suspense fallback={loading}>
        <PostDetailpage />
      </Suspense>
    ),
  },
  {
    path: "/narration/register",
    element: (
      <Suspense fallback={loading}>
        <VoicePostPage />
      </Suspense>
    ),
  },
  {
    path: "/:postId",
    element: (
      <Suspense fallback={loading}>
        <MyPage />
      </Suspense>
    ),
    children: myPageRouter(),
  },
  {
    path: "/user/settings/:uid",
    element: (
      <Suspense fallback={loading}>
        <UserSettings />
      </Suspense>
    ),
  },
  {
    path: "/mypage",
    element: (
      <Suspense fallback={loading}>
        <MyHome />
      </Suspense>
    ),
  },
]);

export default root;
