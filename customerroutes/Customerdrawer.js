import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Customerstack from "./Customerstack";
import Customerviewstatsstack from "./Customerviewstatsstack";
import Myprofilecustomerstack from "./Myprofilecustomerstack";
import Aboutstack from "../routes/Aboutstack";

const rootDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Customerstack,
  },
  Viewstats: {
    screen: Customerviewstatsstack,
  },
  Myprofile: {
    screen: Myprofilecustomerstack,
  },
  About: {
    screen: Aboutstack,
  },
});

export default createAppContainer(rootDrawerNavigator);
