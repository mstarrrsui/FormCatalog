import * as React from "react";
import isPropValid from "@emotion/is-prop-valid";

// tslint:disable-next-line
import spinnerimg from "../images/loading.gif";
import styled from "@emotion/styled";

interface Props {
  loading: boolean;
}

const Container = styled("div", {
  shouldForwardProp: prop => isPropValid(prop) && prop !== "loading"
})<Props>(props => {
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