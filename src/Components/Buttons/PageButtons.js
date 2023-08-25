import "./PageButtons.css";
import { BiBookBookmark } from "react-icons/bi";
import { IoCreate } from "react-icons/io5";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { GiRelationshipBounds } from "react-icons/gi";

const PageButtons = (props) => {
  const buttonPressHandler = (page) => {
    props.onPageChange(page);
  };

  return (
    <div className="page-buttons">
      <div className="page-buttons-wrapper">
        <button
          className={`page-buttons-button + ${
            props.currentPage === 0 ? "active" : ""
          }}`}
          onClick={() => buttonPressHandler(0)}
        >
          <BiBookBookmark />
        </button>
        <button
          className={`page-buttons-button + ${
            props.currentPage === 1 ? "active" : ""
          }}`}
          onClick={() => buttonPressHandler(1)}
        >
          <IoCreate />
        </button>
        <button
          className={`page-buttons-button + ${
            props.currentPage === 2 ? "active" : ""
          }}`}
          onClick={() => buttonPressHandler(2)}
        >
          <BsFillChatLeftTextFill />
        </button>
        <button
          className={`page-buttons-button + ${
            props.currentPage === 3 ? "active" : ""
          }}`}
          onClick={() => buttonPressHandler(3)}
        >
          <GiRelationshipBounds />
        </button>
      </div>
    </div>
  );
};

export default PageButtons;
