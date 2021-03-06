import React from "react";
import { NavigationBar, MainDashboard } from "./views";

require('./app.css');
/**
 * Main application component.
 */
export default class App extends React.Component {
  render() {
    return (
      <div className="application-wrapper">
        <NavigationBar />
        <MainDashboard />
      </div>
    );
  }
}
