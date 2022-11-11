import { Route, Routes, Navigate, useParams } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout"
import { HomePage } from "./pages/Home"
import { PostPage } from "./pages/Post"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}> 
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
      </Route>
    </Routes>
  )
}