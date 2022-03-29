import React, { Component } from "react";

class Chatbot extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "2e12a8157452efcee6ca1b990be6b950d",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementById("chatbot");
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  render() {
    return <div></div>;
  }
}

export default Chatbot;
