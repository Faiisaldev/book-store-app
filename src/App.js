import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import BookList from "./components/BookList";
import CategoryList from "./components/CategoryList";
import Navigation from "./components/Navigation";
import BookForm from "./components/BookForm";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/categories" component={CategoryList} />
          <Route path="/add-book" component={BookForm} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
