import { BsPinAngle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./pins.css";

function Pins({ chatsObj, setChatObj, setIs_show_pinned_message }) {
  let show_pinned_message = (id) => {
    setIs_show_pinned_message(id);
    setTimeout(() => {
      setIs_show_pinned_message(false);
    }, 1000);
  };

  function UnPin(el) {
    setChatObj({
      sent: [
        ...chatsObj.sent.map((item) => {
          if (item.isPinned == true) {
            item.isPinned = true;
            return item;
          }
          return item;
        }),
      ],
    });
  }

  return (
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
              <BsPinAngle
                onClick={() => UnPin(el)}
                className="ChatWindow-pins__remove-pin"
              />
              <p>
                {el.isedited[0] == true
                  ? el.isedited[el.isedited.length - 1]
                  : el.message}
              </p>
              <AiOutlineCloseCircle
                onClick={() => UnPin(el)}
                className="ChatWindow-pins__remove-pin"
              />
            </a>
          );
        }
      })}
    </div>
  );
}

export default Pins;
