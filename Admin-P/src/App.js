import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import AdminHomePage from "./pages/AdminHomePage";
import Categories from "./pages/Categories";
import ListOfAssessment, {
  loader as AssessmentLoader,
} from "./pages/ListOfAssessment";
import { TechnologyV2, TechnologyActionV2 } from "./pages/Technology";
import {
  AssessmentActionV2,
  AssessmentLoaderV2,
  AssessmentsV2,
} from "./pages/Assessments";
import { QuestionViewV2 } from "./pages/QuestionView";
import ScheduleTime, {
  action as ScheduleTimeAction,
} from "./pages/ScheduleTime";

import { queryClient } from "./util/http";
import UploadTopic from "./pages/UploadTopic";
import Questiondb from "./pages/Questiondb";
import { QuestionViewProvider } from "./context/questionView";
import QuestionViewFixed from "./pages/QuestionViewFixed";
import QuestionViewFixedEasy from "./pages/QuestionViewFixedEasy";
import { TableTotalCtxProvider } from "./context/tableTotalCtx";
import Login from "./pages/Login";
import UserLogin from "./components/login/UserLogin";
import AdminLogin from "./components/login/AdminLogin";
import Dashboard from "./pages/Dashboard";
import EnrollStudent from "./pages/enrollStudent/EnrollStudent";
import UserManagement from "./pages/userManagement/UserManagement";
import BatchTablePage from "./pages/enrollStudent/BatchTablePage";
import StudentSelectionPage from "./pages/enrollStudent/StudentSelectionPage";
import ListOfTests from "./pages/enrollStudent/ListOfTests";
import ListOfBatches from "./components/userManagement/ListOfBatches";
import BatchDetails from "./components/userManagement/BatchDetails";
import ErrorBoundary from "./shared/ErrorBoundary";
import EnrollStudentPage from "./pages/EnrollStudentPage";

/**
 *
 * Main App component that sets up routing and provides QueryClient for React Query.
 */
function App() {
  // Define the routing configuration
  const appRoutes = [
    {
      path: "/login",
      element: <Login />,
      children: [
        { index: true, element: <UserLogin /> },
        { path: "admin", element: <AdminLogin /> },
      ],
    },
    { path: "/", element: <AdminHomePage /> },
    {
      path: "questiondb",
      element: <Questiondb />,
      children: [{ path: "uploadtopic", element: <UploadTopic /> }],
    },
    {
      path: "categories",
      element: <Categories />,
      children: [
        {
          path: "assessmentlist",
          element: <ListOfAssessment />,
        },
        {
          path: "technology",
          element: <TechnologyV2 />,
          id: "tech",
          action: TechnologyActionV2,
        },
        {
          path: "assessments",
          element: <AssessmentsV2 />,
          action: AssessmentActionV2,
          loader: AssessmentLoaderV2,
        },
        {
          path: "questionview",
          element: (
            <QuestionViewProvider>
              <TableTotalCtxProvider>
                <QuestionViewV2 />
              </TableTotalCtxProvider>
            </QuestionViewProvider>
          ),
        },
        {
          path: "questionviewfixed",
          element: <QuestionViewFixed />,
          children: [{ index: true, element: <QuestionViewFixedEasy /> }],
        },
        {
          path: "scheduletime",
          element: <ScheduleTime />,
          action: ScheduleTimeAction,
        },
      ],
    },
    {
      path: "/user-management",
      element: <UserManagement />,
      children: [
        { index: true, element: <ListOfBatches /> },
        { path: "batch-details/:batchId", element: <BatchDetails /> },
      ],
    },
    {
      path: "/enroll-student",
      element: <EnrollStudentPage />,
      children: [
        {
          index: true,
          element: <EnrollStudent />,
        },
        {
          path: "tests",
          element: <ListOfTests />,
        },
        {
          path: "batch-selection",
          element: <BatchTablePage />,
        },
        {
          path: "student-selection/:batchId",
          element: <StudentSelectionPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(appRoutes);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
// add lazy loader to all the routs
