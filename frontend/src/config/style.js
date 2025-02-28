let videoWidth = 44;
let videoHeight = (44 * 9) / 16;

export const colors = {
  mainBackground: "#E8E5FC",
  text: "#494759",
  textPrint: "rgba(23, 23, 26, 1)",
  popupText: "#212040",
  main: "rgba(109, 105, 242, 1)",
  mainH: "rgba(141, 138, 245, 1)",
  mainOpaque: "rgba(113, 109, 242, 0.25)",
  mainPale: "rgba(218, 217, 255, 1)",
  details: "#ECEBF7",
  neutral: "#B6B4D1",
  neutralPale: "#E1E1E6",
  error: "#E20074",
  errorH: "#E65FA3",
  tertiary: "rgba(229, 110, 170, 1)",
  tertiaryH: "rgba(252, 139, 196, 1)",
  tertiaryBackground: "#FFEBF5",
  positive: "rgba(29, 191, 136, 1)",
  positiveH: "rgba(29, 191, 136, 0.8)",
  positivePale: "rgba(203, 247, 232, 1)",
  positive2: "rgba(111, 152, 250, 1)",
  positive2Pale: "rgba(232, 239, 255, 1)",
  negative: "rgba(240, 108, 108, 1)",
  negativePale: "rgba(250, 204, 202, 1)",
  negative2: "rgba(237, 139, 71, 1)",
  negative2Pale: "rgba(252, 226, 207, 1)",
  background: "rgba(237, 235, 255, 1)",
  disabled: "rgba(248, 247, 255, 1)",
  disabledText: "rgba(161, 159, 204, 1)",
  calculator: "rgba(83, 131, 245, 1)",
  riskUnsure: "rgba(232, 136, 70, 1)",
  riskUnsurePale: "rgba(252, 235, 222, 1)",
  riskNegative: "rgba(250, 125, 167, 1)",
  riskNegativePale: "rgba(255, 232, 240, 1)",
  riskVeryNegative: "rgba(226, 0, 116, 1)",
  riskVeryNegativePale: "rgba(251, 221, 233, 1)",
  backgroundOpaque: "rgba(35, 35, 51, 0.7)",
  black: "rgba(35, 35, 51, 1)",
  blackH: "rgba(35, 35, 51, 0.7)",

  riskUnsureBase: "#E88846",
  riskUnacceptable: "rgba(220, 219, 255, 1)",
  hoverBackground: "#DCDBFF",
};

export const colorsDS = {
  specialHandoff: { textPrint: "rgba(23, 23, 26, 1)" },
  main: {
    mainHighRisk: {
      base: "rgba(109, 105, 242, 1)",
      focused: "rgba(90, 87, 194, 1)",
      hw: "rgba(141, 138, 245, 1)",
      pale: "rgba(220, 219, 255, 1)",
    },
  },
  risks: {
    postiveNoRisk: {
      base: "rgba(19, 191, 145, 1)",
      hw: "rgba(76, 217, 179, 1)",
      pale: "rgba(210, 252, 238, 1)",
    },
    negativeMediumRisk: {
      base: "rgba(235, 94, 94, 1)",
      hw: "rgba(250, 125, 125, 1)",
      pale: "rgba(255, 225, 224, 1)",
    },
    editsLowRisk: {
      base: "rgba(232, 140, 60, 1)",
      hw: "rgba(240, 176, 120, 1)",
      pale: "rgba(252, 236, 222, 1)",
    },
    veryLowRisk: {
      base: "rgba(237, 191, 55, 1)",
      hw: "rgba(240, 210, 120, 1)",
      pale: "rgba(252, 242, 210, 1)",
    },
    borderlineRisk: {
      base: "rgba(165, 201, 20, 1)",
      hw: "rgba(195, 222, 89, 1)",
      pale: "rgba(246, 255, 209, 1)",
    },
  },
};

export const layout = {
  leftMenuWidth: "14vw",
  rightContainerWidth: "86vw",
  fullHeight: "100vh",
  headerHeight: "10vh",
  contnentHeight: "90vh",
  paddingLeft: "1.9vw",
  paddingTop: "1.25vw",
  videoWidth: videoWidth + "vw",
  videoHeight: videoHeight + "vw",
};
