import { Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./components/Navigation";
import MovieList from "./features/MovieList";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path = "/movies">
          <MovieList />
        </Route>
      <Redirect to = "/movies"/>
      </Switch>
     
    </>
  );
}
