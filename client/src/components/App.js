import React from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import MainPage from "./MainPage";
import StandupList from "./StandupList";
import DropDownMenu from "./DropDownMenu";
import Create from "./Create";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import history from "../history";
class App extends React.Component {
  state = { uri: "" };
  componentDidMount() {
    history.listen(location => {
      this.setState({ uri: location.pathname });
    });
  }
  render() {
    return (
      <>
        <Header URI={this.state.uri} />
        <DropDownMenu />
        <Switch>
          <Route
            path="/(standup/create|project/create|member/create)/"
            render={props => <Create {...props} URI={this.state.uri} />}
          />
          <Route path="/standup" component={StandupList} />
          <Route path="/" exact component={MainPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}
export default App;
