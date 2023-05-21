import Container from "@mui/material/Container";
import React from "react";

function PostLayout() {
  return (
    <Container maxWidth='md'>
      <div id='post'>
        <slot />
      </div>
    </Container>
  );
}

export default PostLayout;
