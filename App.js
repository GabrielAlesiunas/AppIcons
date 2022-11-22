import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feather from "./componets/Feather";
import FontAwesome from "./componets/FontAwesome";
import FontAwesome5 from "./componets/FontAwesome5";

const menu = createBottomTabNavigator().Navigator;
const itensMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <itensMenu name = "Feather" componets={Feather} />
        <itensMenu name = "FontAwesome" componets={FontAwesome} />
        <itensMenu name = "FontAwesome5" componets={FontAwesome5} />
      </Menu>
    </NavigationContainer>
  );
}
