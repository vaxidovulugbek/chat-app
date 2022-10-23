import "./ChatWindow.css";
import { BsThreeDotsVertical } from "react-icons/bs";

import { BsPinAngle, BsEmojiSmile } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdImages } from "react-icons/io";
import { IoSearch, IoCheckmarkDoneOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useRef, useState } from "react";
// import Imoji from "./imojis/Imoji";

function ChatWindow() {
  let textFieldFocus = useRef(null);
  let MessageRightClick = useRef(null);

  let ChatWindow_messages = useRef(null);
  let chatsObj = {
    sent: [
      {
        id: 1,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world 15"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 2,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 3,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 4,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 5,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 6,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 7,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 8,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 9,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 10,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 11,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 12,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 13,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 14,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 15,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world 13"],
        seen: true,
        isPinned: true,
        me: false,
      },
      {
        id: 16,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 17,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 18,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 19,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },
      {
        id: 20,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 21,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: false,
      },

      {
        id: 22,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [true, "hello world"],
        seen: true,
        isPinned: false,
        me: true,
      },
      {
        id: 23,
        message: "hello",
        time: ["10:05", "AM", "10.10.2022"],
        isedited: [
          true,
          "hello sadasdasdasd asdasd sds sdassa asds dsd asd asdas dassdasdasdas asd asd asd asd a sd asdworld",
        ],
        seen: false,
        isPinned: false,
        me: true,
      },
    ],
  };

  let rightClickToMessage = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  let rightClickToMessageLine = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  // window.addEventListener("click", () => {
  //   textFieldFocus.current.focus;
  // });

  let [addClass, setAddClass] = useState(false);
  let focusImage = () => {
    setAddClass(!addClass);
  };

  let [is_shot_inned_message, setIs_shot_inned_message] = useState(false);
  let show_pinned_message = (id) => {
    setIs_shot_inned_message(id);
    setTimeout(() => {
      setIs_shot_inned_message(false);
    }, 2000);
  };

  //  text send button animation
  let send_message_icon_path = useRef(null);
  let send_message_icon = useRef(null);

  // state to check if all are  empty. it should be true.
  let [isNotEmptyAnimated, setIsNotAnimated] = useState(false);

  // input change event
  let send_message = (e) => {
    if (e.target.value.length > 0) {
      setIsNotAnimated(true);
    } else {
      setIsNotAnimated(false);
    }
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
      <div className="ChatWindow-pins">
        {chatsObj.sent.map((el) => {
          if (el.isPinned == true) {
            return (
              <a
                href={`#el${el.id}`}
                key={el.id}
                className="ChatWindow-pins__pin"
                onClick={() => show_pinned_message(el.id)}
              >
                <p>
                  {el.isedited[0] == true
                    ? el.isedited[el.isedited.length - 1]
                    : el.message}
                </p>
                <BsPinAngle className="ChatWindow-pins__pin--icon" />
              </a>
            );
          }
        })}
      </div>

      {/* chat window body */}
      <div ref={ChatWindow_messages} className="ChatWindow-messages">
        {chatsObj.sent.map((el, i) => {
          return (
            <div
              onContextMenu={rightClickToMessageLine}
              key={i}
              id={`el${el.id}`}
              className={`ChatWindow-messages__message ${
                el.me == true ? "meSent" : ""
              }  ${
                is_shot_inned_message == el.id
                  ? "ChatWindow-pins__pin--show"
                  : ""
              }`}
            >
              <div
                onContextMenu={rightClickToMessage}
                ref={MessageRightClick}
                className="ChatWindow-messages__message--see"
              >
                <p
                  // onselectstart={(e) => console.log(e)}
                  className="ChatWindow-messages__message--context"
                >
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
        {isNotEmptyAnimated == true ? (
          <label className="ChatWindow-textFeild-fileSend">
            <BsEmojiSmile />
          </label>
        ) : (
          <label htmlFor="sendFile" className="ChatWindow-textFeild-fileSend">
            <IoMdImages />
          </label>
        )}
        <input type="file" style={{ display: "none" }} id="sendFile" />
        <input
          onKeyUp={(event) => send_message(event)}
          ref={textFieldFocus}
          type="text"
          placeholder="text here..."
          className="ChatWindow-textFeild__input"
        />
        <IconButton
          aria-label="delete"
          color="primary"
          sx={{
            width: 50,
            height: 50,
            borderRadius: 50,
            color: "#3390EC",
            background: "#fff",
            marginLeft: "8px",
          }}
        >
          <svg
            id="send_messsage_icon"
            width="25"
            height="25"
            viewBox="0 0 215 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={
              isNotEmptyAnimated == true
                ? { animationName: "fill" }
                : { animationName: "" }
            }
          >
            <g filter="url(#filter0_d_4_14)">
              <path
                style={
                  isNotEmptyAnimated == true
                    ? { animationName: "pop" }
                    : { animationName: "" }
                }
                ref={send_message_icon_path}
                className="send_messsage_icon_path"
                d="M3.70945 61.6138L203.33 2.97726L113.754 190.563L88.2388 106.489C87.8845 105.322 87.0713 104.348 85.9856 103.791L3.70945 61.6138Z"
                stroke="#3390ec"
                strokeWidth="5"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4_14"
                x="0.366089"
                y="0.178116"
                width="213.904"
                height="204.763"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4_14"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4_14"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </IconButton>
      </div>
    </div>
  );
}

export default ChatWindow;
