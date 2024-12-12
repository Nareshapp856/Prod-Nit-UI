import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/admin/home/Home";
import Technologies from "./pages/admin/technology/Technologies";
import Modules from "./pages/admin/module/Modules";
import Subtopics from "./pages/admin/subtopic/Subtopics";
import Topics from "./pages/admin/topic/Topics";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import QuestionView from "./pages/admin/questionView/QuestionView";
import GroupQuestionView from "./pages/admin/groupQuestionView/GroupQuestionView";
import { React, useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "../src/redux/hooks.helper";
import {
  modulesListSlice,
  createModuleSlice,
  deleteModuleSlice,
  editModuleSlice,
  excelModuleSlice,
  selectedtechnologySlice,
  technologiesListSlice,
  moduleTechIdSlice,
} from "../src/redux/root.slice";
import ProgramView from "./pages/admin/programView/ProgramView";
import TestCaseView from "./pages/admin/testcaseView/TestCaseView";
function App() {
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      selectedtechnologySlice.actions.request({
        technologyid: "",
        moduleid: "",
        topicid: "",
        subtopicid: "",
      })
    );
    // dispatch(selectedtechnologySlice.actions.reset());
    // dispatch(excelModuleSlice.actions.reset());
    // dispatch(createModuleSlice.actions.reset());
    // dispatch(editModuleSlice.actions.reset());
    // dispatch(deleteModuleSlice.actions.reset());
    // dispatch(modulesListSlice.actions.reset());
    // dispatch(technologiesListSlice.actions.request());
    // dispatch(modulesListSlice.actions.request());
    //dispatch(selectedtechnologySlice.actions.reset());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route
            path="/technologies"
            exact
            element={<Technologies></Technologies>}
          />
          <Route
            path="/modules/:TechnologyID"
            exact
            element={<Modules></Modules>}
          />
          <Route
            path="/subtopics/:TopicID"
            exact
            element={<Subtopics></Subtopics>}
          />
          <Route path="/topics/:ModuleID" exact element={<Topics></Topics>} />
          <Route
            path="/question-view/:SubTopicID"
            exact
            element={<QuestionView />}
          />
          <Route path="/program-view/" exact element={<ProgramView />} />
          <Route path="/testcase-view" exact element={<TestCaseView />} />
          <Route
            path="/testcase-view/:programId"
            exact
            element={<TestCaseView />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
