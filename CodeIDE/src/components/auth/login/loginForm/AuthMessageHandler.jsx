import { connect } from "react-redux";

function AuthMessageHandlerComponent({ isError, error }) {
  if (isError && error.status === 401) {
    return (
      <div className="mb-[.5rem] leading-tight">
        <small className="text-[#ed2224] text-center block ">
          {error.message}
        </small>
      </div>
    );
  }

  return (
    <div className="mb-[.3rem] leading-tight">
      <small className="text-[#ed2224] text-center block ">
        Something Went wrong.
      </small>
      <small className="text-[#ed2224] text-center block">
        please try again later.
      </small>
    </div>
  );
}

const mapState = (state) => ({
  isError: state.user.isError,
  error: state.user.error,
});

const mapDispatch = {};

const AuthMessageHandler = connect(
  mapState,
  mapDispatch
)(AuthMessageHandlerComponent);

export default AuthMessageHandler;
