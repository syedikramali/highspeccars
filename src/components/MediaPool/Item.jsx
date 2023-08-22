import { Close, Grid4x4 } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Stack } from "@mui/material";
import { Fragment, forwardRef } from "react";
import { createPortal } from "react-dom";

const Item = forwardRef(
  (
    {
      id,
      withOpacity,
      isDragging,
      url,
      style,
      index,
      faded,
      setDeleteDialog,
      ...props
    },
    ref
  ) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      aspectRatio: 16 / 9,
      textAlign: "right",
      cursor: withOpacity ? "grabbing" : "grab",
      zIndex: withOpacity ? 2 : 1,
      position: "relative",
      ...style,
    };
    return <Paper ref={ref} style={inlineStyles} id={id} {...props}></Paper>;
  }
);

export default Item;
