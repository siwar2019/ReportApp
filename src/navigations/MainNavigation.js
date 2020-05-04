import { StackNavigator, StackViewTransitionConfigs } from "react-navigation";

import { LiveStream } from "../components/LiveStream";

const MainNavigation = StackNavigator(
  {
    LiveStream: { screen: LiveStream },
  },
  {
    headerMode: "none",
    transitionConfig: () =>
      StackViewTransitionConfigs.SlideFromRightIOS
  }
);

export default MainNavigation;
