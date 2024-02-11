import React, { useEffect } from "react";
import classes from "./zoom-classes.module.css";
import AppModal from "../../components/modal/AppModal";
import exclamationCircle from "../../assets/exclamationCircle.png";
import exclamationError from "../../assets/exclamationError.png";
import successImg from "../../assets/success.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CancelClassAction,
  ConductClassAction,
  GetClassesAction,
  MarkClassCompletedAction,
} from "../../store/actions/ZoomClassActions";
import SuccessModal from "../../components/modal/SuccessModal";
import { HideSuccessModalAction } from "../../store/actions/ModalActions";
import success from "../../assets/success.png";
import Loader from "../../components/loader/Loader";

const ZoomClasses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { classesData } = useSelector((state) => state.ClassesReducer);
  const { loading } = useSelector((state) => state.LoaderReducer);

  useEffect(() => {
    dispatch(GetClassesAction({ token }));
  }, []);

  const cancelClassHandler = (id) => {
    dispatch(CancelClassAction({ status: "cancelled", id }, token));
  };

  const conductClass = (data) => {
    dispatch(ConductClassAction({ bookingId: data._id }));
  };

  const markClassAsCompleted = (id) => {
    dispatch(
      MarkClassCompletedAction(
        { status: "completed", meetingCompleted: true, id },
        token
      )
    );
  };

  const { modalText, showModal } = useSelector((state) => {
    return state.ModalReducer;
  });

  return (
    <>
      {showModal && (
        <SuccessModal
          open={showModal}
          heading={modalText}
          icon={success}
          closeBtnText={"Close"}
          closeBtnAction={() => dispatch(HideSuccessModalAction())}
          closeBtnStyle={{
            backgroundColor: "#00b4d8",
            boxShadow: "0px 16px 30px #14A3844D",
            width: "130px",
            height: "48px",
            borderRadius: "30px",
            opacity: 1,
          }}
          headingStyle={{
            textAlign: "center",
          }}
        />
      )}

      {loading ? (
        <Loader styles={{ marginTop: "50px" }} />
      ) : (
        <div className={`${classes["zoom-classes-table-container"]}`}>
          <table>
            <tr>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Start Time</th>
              <th>Action</th>
            </tr>
            {classesData?.map((data, i) => {
              // Setting the maximum meeting time 30 mins. If it is 12:30pm then adding 30 mins = 13pm
              if (data.bookingTime) {
                var [time, meridiem] =
                  data.bookingTime.match(/\d+:\d+(am|pm)/i);
                var [hours, minutes] = time.split(":").map((part) => {
                  if (part.includes(":")) return parseInt(part.split(":")[0]);
                  return parseInt(part);
                });
              }
              const meetingStartTime = new Date();
              if (meridiem.toLowerCase() === "pm" && hours === 12) {
                meetingStartTime.setHours(12);
                meetingStartTime.setMinutes(minutes);
              } else if (meridiem.toLowerCase() === "pm") {
                meetingStartTime.setHours(hours + 12);
                meetingStartTime.setMinutes(minutes);
              } else if (meridiem.toLowerCase() === "am" && hours === 12) {
                meetingStartTime.setHours(0);
                meetingStartTime.setMinutes(minutes);
              } else {
                meetingStartTime.setHours(hours);
                meetingStartTime.setMinutes(minutes);
              }
              const meetingEndTime = new Date(meetingStartTime);
              meetingEndTime.setMinutes(meetingEndTime.getMinutes() + 30);
              const currentTime = new Date();
              const isClassLive =
                currentTime >= meetingStartTime &&
                currentTime <= meetingEndTime;
              // end

              return (
                <tr key={i}>
                  <td>{data?.user?.fullName}</td>
                  <td>{data?.user?.email}</td>
                  <td>{data?.bookingTime && data?.bookingTime}</td>
                  <td>
                    <AppModal
                      text={"Conduct Class"}
                      heading={
                        !isClassLive
                          ? "Your Class is not live now"
                          : "Your Class is live now"
                      }
                      icon={!isClassLive ? exclamationError : successImg}
                      styles={{
                        color: "#82FF87",
                        opacity: "1",
                        fontSize: "14px",
                      }}
                      headingStyle={{ width: "294px", textAlign: "center" }}
                      onAccept={() =>
                        !isClassLive ? navigate("/classes") : conductClass(data)
                      }
                      onAcceptBtnText={!isClassLive ? "Close" : "Conduct Class"}
                      rejectBtnStyle={{
                        display: "none",
                      }}
                      acceptBtnStyle={{
                        backgroundColor: "#00B4D8 ",
                        width: "153px",
                        height: "57px",
                        borderRadius: "10px",
                        opacity: 1,
                      }}
                    />
                    <AppModal
                      text={"Cancel Class"}
                      heading={"Are You Sure You Want To Cancel?"}
                      icon={exclamationCircle}
                      styles={{
                        color: "#FF9998",
                        opacity: "1",
                        fontSize: "14px",
                      }}
                      headingStyle={{ width: "294px", textAlign: "center" }}
                      onReject={() => navigate("/classes")}
                      onAccept={() => cancelClassHandler(data._id)}
                      onRejectBtnText={"No"}
                      onAcceptBtnText={"Yes"}
                      rejectBtnStyle={{
                        backgroundColor: "#00B4D8 ",
                        border: "1px solid #00B4D8",
                        width: "152px",
                        height: "57px",
                        borderRadius: "10px",
                        opacity: 1,
                      }}
                      acceptBtnStyle={{
                        backgroundColor: "#E4201E ",
                        width: "153px",
                        height: "57px",
                        borderRadius: "10px",
                        opacity: 1,
                      }}
                    />
                    {data.meetingStarted && !data.meetingCompleted ? (
                      <AppModal
                        text={"Mark as Completed"}
                        heading={
                          "Are You Sure To Mark Your Meeting As Completed?"
                        }
                        icon={exclamationCircle}
                        styles={{
                          color: "cyan",
                          opacity: "1",
                          fontSize: "14px",
                        }}
                        headingStyle={{ width: "294px", textAlign: "center" }}
                        onReject={() => navigate("/classes")}
                        onAccept={() => markClassAsCompleted(data._id)}
                        onRejectBtnText={"No"}
                        onAcceptBtnText={"Yes"}
                        rejectBtnStyle={{
                          backgroundColor: "#00B4D8 ",
                          border: "1px solid #00B4D8",
                          width: "152px",
                          height: "57px",
                          borderRadius: "10px",
                          opacity: 1,
                        }}
                        acceptBtnStyle={{
                          backgroundColor: "#E4201E ",
                          width: "153px",
                          height: "57px",
                          borderRadius: "10px",
                          opacity: 1,
                        }}
                      />
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default ZoomClasses;
