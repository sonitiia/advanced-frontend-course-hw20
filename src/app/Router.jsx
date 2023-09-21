import { Navigate, Route, Routes } from "react-router-dom";
import {
  CONTACTS_DETAILS_ROUTE,
  CONTACTS_ROUTE,
  MAIN_ROUTE,
  NEWS_ROUTE,
  NOT_FOUND_ROUTE,
  POSTS_ROUTE,
} from "./Routes";
import PageNotFoundRoute from "../routes/PageNotFoundRoute";
import MainRoute from "../routes/MainRoute";
import PostsRoute from "../routes/PostsRoute";
import NewsRoute from "../routes/NewsRoute";
import ContactsRoute from "../routes/ContactsRoute";
import ContactDetailsRoute from "../routes/ContactDetailsRoute";

const Router = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainRoute />} />
      <Route path={POSTS_ROUTE} element={<PostsRoute />} />
      <Route path={NEWS_ROUTE} element={<NewsRoute />} />
      <Route path={CONTACTS_ROUTE} element={<ContactsRoute />} />
      <Route path={CONTACTS_DETAILS_ROUTE} element={<ContactDetailsRoute />} />
      <Route path={NOT_FOUND_ROUTE} element={<PageNotFoundRoute />} />
      <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} replace />} />
    </Routes>
  );
};

export default Router;
