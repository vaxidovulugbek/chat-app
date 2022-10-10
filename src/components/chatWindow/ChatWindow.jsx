import "./ChatWindow.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { MdDone } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdImages } from "react-icons/io";
import { IoSearch, IoCheckmarkDoneOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { hover } from "@testing-library/user-event/dist/hover";
import { useRef, useState } from "react";

function ChatWindow() {
  let textFieldFocus = useRef(null);
  let chatsObj = {
    sent: [
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: true,
        me: false,
      },

      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: false,
        isPinned: true,
        me: true,
      },
    ],
  };

  let rightClick = (e) => {};

  window.addEventListener("click", () => {
    textFieldFocus.current.focus();
    // console.log(textFieldFocus.current.focus());
  });

  let [addClass, setAddClass] = useState(false);
  let focusImage = () => {
    setAddClass(!addClass);
  };

  return (
    // chat window
    <div className="ChatWindow">
      {/* chat window header */}
      <div className="ChatWindow-header">
        <div className="ChatWindow-header-userInfo">
          <div
            onClick={focusImage}
            className={`ChatWindow-header-userImage ${
              addClass == true ? "ChatWindow-header-userImage--focus" : ""
            }`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
              alt=""
            />
          </div>
          <div className="ChatWindow-header-text">
            <p className="ChatWindow-header-text__userName">Ulug'bek</p>
            <p className="ChatWindow-header-text__lastSeen">
              Last seen recently
            </p>
          </div>
        </div>
        <div className="ChatWindow-header-icons">
          <IconButton aria-label="delete" size="small">
            <IoSearch className="ChatWindow-header-icons__search" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <BsThreeDotsVertical className="ChatWindow-header-icons__dots" />
          </IconButton>
        </div>
      </div>

      {/* chat window pins panel*/}
      <div className="ChatWindow-pins"></div>

      {/* chat window body */}
      <div className="ChatWindow-messages">
        {chatsObj.sent.map((el, i) => {
          return (
            <div
              key={i}
              className={`ChatWindow-messages__message ${
                el.me == true ? "meSent" : ""
              }`}
            >
              <div
                onClick={rightClick}
                className="ChatWindow-messages__message--see"
              >
                <p className="ChatWindow-messages__message--context">
                  {el.isedited[0] != true
                    ? el.message
                    : el.isedited[el.isedited.length - 1]}
                </p>
                <p className="ChatWindow-messages__message--info">
                  <span
                    className="ChatWindow-messages__message--infoTime"
                    title={`${el.time[0]} ${el.time[1]}, ${el.time[2]}`}
                  >
                    {el.time[0]}
                  </span>
                  <span className="ChatWindow-messages__message--infoSeen">
                    {el.seen == true ? <IoCheckmarkDoneOutline /> : <MdDone />}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* chat window textfield */}
      <div className="ChatWindow-textFeild">
        <IconButton
          sx={{
            width: 50,
            height: 50,
            borderRadius: 0,
            color: "success.main",
          }}
          aria-label="delete"
          disabled
          color="primary"
        >
          <IoMdImages />
        </IconButton>
        <input
          ref={textFieldFocus}
          type="text"
          placeholder="text here..."
          className="ChatWindow-textFeild__input"
        />
        <IconButton
          aria-label="delete"
          color="primary"
          sx={{
            width: 100,
            height: 55,
            borderRadius: 0,
            color: "success.main",
          }}
        >
          <RiSendPlaneFill />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatWindow;
