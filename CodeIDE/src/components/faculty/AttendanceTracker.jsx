import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Calendar from "./attendanceTracker/Calendar";
import Slots from "./attendanceTracker/Slots";
import StudentTable from "./attendanceTracker/StudentTable";
import {
  at_fetchSlotsDispatch,
  at_fetchStudentsDispatch,
  at_retrieveDetailsDispatch,
  at_submitActionsDispatch,
} from "../../redux/actions/faculty";
import { at_resetSlotSlice } from "../../redux/slices/faculty/attendanceTracker";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { TextField, useMediaQuery, useTheme, Button } from "@mui/material";
import CustomCalendar from "./attendanceTracker/Calendar";

function AttendanceTrackerComponent({
  slots,
  userState,
  totalStudents,
  retrievedData,
  studentsData,
  at_fetchSlots,
  at_fetchStudents,
  at_submitActions,
  at_retrieveDetails,
  at_resetSlots,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [includedStudents, setIncludedStudents] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState();
  const [todayTopic, setTodayTopic] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (slots && slots.data) {
      if (Array.isArray(slots.data)) {
        setAvailableSlots(slots.data);
        if (!selectedSlot) {
          setSelectedSlot(slots.data[0].id);
          at_fetchStudents(slots.data[0].id);
          at_retrieveDetails(slots.data[0].id);
        }
      } else {
        setAvailableSlots([]);
      }
    }
  }, [slots]);

  useEffect(() => {
    if (retrievedData && retrievedData.data && retrievedData.data.studentIds) {
      const retrievedIncludes = retrievedData.data.studentIds;

      if (Array.isArray(retrievedIncludes)) {
        setIncludedStudents(retrievedIncludes);
      } else {
        setIncludedStudents([]);
      }
    }
  }, [retrievedData]);

  useEffect(() => {
    at_resetSlots();
    if (selectedDate) at_fetchSlots(selectedDate);
  }, [selectedDate]);

  const onSlotSelection = (id) => {
    setSelectedSlot(id);
    at_fetchStudents(id);
  };

  const onSubmit = () => {
    at_submitActions({
      userId: userState.userId,
      date: selectedDate,
      todayTopic,
      description,
      comments,
      slotId: selectedSlot,
      studentIds: includedStudents,
    });
  };

  const onAllPresent = () => {
    const allStudentIds =
      studentsData?.students?.map((student) => student.id) || [];
    setIncludedStudents(allStudentIds);
  };

  return (
    <div>
      <div className="flex justify-between items-end mb-1">
        <h1 className="text-2xl font-semibold">Attendance Tracker</h1>
        <div className="flex space-x-4">
          <h2>
            <span className="text-sm font-semibold">TotalStudents:</span>{" "}
            <span className="text-sm">{totalStudents}</span>
          </h2>
          <h2>
            <span className="text-sm font-semibold">Present:</span>{" "}
            <span className="text-sm">{includedStudents.length}</span>
          </h2>
        </div>
      </div>
      <hr className="mb-4" />
      <div
        className={`flex ${
          isSmScreen ? "flex-wrap" : "gap-x-6"
        } justify-between items-start mb-6`}
      >
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <h2 className="text-lg">
              Date: {selectedDate.toLocaleDateString()}
            </h2>
            <CustomCalendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <div>
            {!isSmScreen && <h2 className="text-lg mb-2">Sessions:</h2>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Slots
                selectedSlot={selectedSlot}
                availableSlots={availableSlots}
                onSlotSelection={onSlotSelection}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-auto">
          <TextField
            label="Today's Topics"
            variant="outlined"
            value={todayTopic}
            onChange={(e) => setTodayTopic(e.target.value)}
            fullWidth
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            label="Comments"
            variant="outlined"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            fullWidth
          />
          <div className="flex gap-2">
            <Button
              onClick={onAllPresent}
              variant="contained"
              color="primary"
              style={{ whiteSpace: "nowrap", width: "200px" }}
            >
              All Present
            </Button>
            <Button
              onClick={onSubmit}
              variant="contained"
              color="primary"
              style={{ whiteSpace: "nowrap", width: "200px" }}
            >
              Submit Attendance
            </Button>
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <StudentTable
          studentsData={studentsData}
          includedStudents={includedStudents}
          setIncludedStudents={setIncludedStudents}
        />
      </div>
    </div>
  );
}

const mapState = (state) => ({
  totalStudents: state.at_students.data?.students?.length || 0,
  slots: state.at_slots.data,
  studentsData: state.at_students.data,
  userState: state.user,
  retrievedData: state.at_retrieveDetails.data,
});

const mapDispatch = {
  at_fetchStudents: at_fetchStudentsDispatch,
  at_fetchSlots: at_fetchSlotsDispatch,
  at_submitActions: at_submitActionsDispatch,
  at_retrieveDetails: at_retrieveDetailsDispatch,
  at_resetSlots: at_resetSlotSlice,
};

const AttendanceTracker = connect(
  mapState,
  mapDispatch
)(AttendanceTrackerComponent);

export default AttendanceTracker;
