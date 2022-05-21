import Content from "../common/content/content";
import { FavoritesWrapper } from "./favoritesStyle";

//this is a simple component which will be used to showcase protected routes in action
const Favorites = () => (
  <Content title="Favorites">
    <FavoritesWrapper>
      This serves as a demo component to showcase protected routes in action!
    </FavoritesWrapper>
  </Content>
);

export default Favorites;