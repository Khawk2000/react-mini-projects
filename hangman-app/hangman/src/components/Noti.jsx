const Noti = ({ showNoti }) => {
  return (
    <div className={`notification-container ${showNoti ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Noti;
