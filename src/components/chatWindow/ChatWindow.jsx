import "./ChatWindow.css";
import { BsThreeDotsVertical } from "react-icons/bs";

import { BsPinAngle } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdImages } from "react-icons/io";
import { IoSearch, IoCheckmarkDoneOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { hover } from "@testing-library/user-event/dist/hover";
import { useRef, useState } from "react";

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
        isedited: [true, "hello world"],
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
