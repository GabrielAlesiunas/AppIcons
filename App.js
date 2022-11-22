import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaFeather from "./componets/TelaFeather";
import TelaFontAwesome from "./componets/TelaFontAwesome";
import TelaFontAwesome5 from "./componets/TelaFontAwesome5";

const menu = createBottomTabNavigator().Navigator;
const itensMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <itensMenu name = "Feather" componets={TelaFeather} />
        <itensMenu name = "FontAwesome" componets={TelaFontAwesome} />
        <itensMenu name = "FontAwesome5" componets={TelaFontAwesome5} />
      </Menu>
    </NavigationContainer>
  );
}
