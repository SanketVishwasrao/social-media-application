const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <>
      {/* <h1 className="welcome-message">There are no posts</h1> */}
      <div className="text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-black">There are no posts</h1>
          <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Posts From Server</button>
        </div>
      </div>
      </>
  );
};

export default WelcomeMessage;
