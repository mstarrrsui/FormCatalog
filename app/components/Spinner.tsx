import * as React from "react";

// tslint:disable-next-line
import spinnerimg from "../images/loading.gif";
import styled from "@emotion/styled";

interface Props {
  loading: boolean;
}

const Container = styled("div")<Props>(props => {
  if (!props.loading) {
    return {
      display: "none"
    };
  } else {
    return {
      left: "50%",
      position: "absolute",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)"
    };
  }
});

const Spinner: React.SFC<Props> = ({ loading }) => {
  return (
    <Container loading={loading}>
      <img alt="" src={spinnerimg} />
    </Container>
  );
};

export default Spinner;
