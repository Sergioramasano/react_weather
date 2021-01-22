import React from "react";

export const Menu = () => {
  return (
    <section>
      <h1 className="Home">Home</h1>
    </section>
  );
};

{
  ["left", "right", "top", "bottom"].map((anchor) => (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  ));
}
