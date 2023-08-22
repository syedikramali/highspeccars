const { useTheme, useMediaQuery } = require("@mui/material");

const useScreenWidth = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const sm = {
    sm: useMediaQuery(theme.breakpoints.only("sm")),
    down: useMediaQuery(theme.breakpoints.down("md")),
  };

  const isMd = useMediaQuery(theme.breakpoints.only("sm"));
  const isLg = useMediaQuery(theme.breakpoints.only("sm"));

  return { isXs, isSm: sm.sm || sm.down, isMd, isLg };
};

export default useScreenWidth;
