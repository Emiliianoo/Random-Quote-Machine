var quotes = [
["The only way to do great work is to love what you do.", "Steve Jobs"],
["In the middle of every difficulty lies opportunity.", "Albert Einstein"],
["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
["The best way to predict the future is to create it.", "Peter Drucker"],
["Believe you can and you're halfway there.", "Theodore Roosevelt"],
["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
["Do not wait for leaders; do it alone, person to person.", "Mother Teresa"],
["It always seems impossible until it's done.", "Nelson Mandela"]];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0] };

    this.randomQuote = this.randomQuote.bind(this);
  }

  randomQuote() {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)] });

  }

  render() {

    const { quote } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", { id: "box" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-text" }, /*#__PURE__*/
      React.createElement("span", { id: "text" }, "\"", quote[0], "\"")), /*#__PURE__*/

      React.createElement("div", { id: "author-box" }, "- ", /*#__PURE__*/
      React.createElement("span", { id: "author" }, quote[1])), /*#__PURE__*/

      React.createElement("div", { id: "buttons" }, /*#__PURE__*/
      React.createElement("button", { className: "btn" }, /*#__PURE__*/React.createElement("a", { target: "_blank", id: "tweet-quote", href: "twitter.com/intent/tweet" }, "Tweet")), /*#__PURE__*/
      React.createElement("button", { className: "btn", id: "new-quote", onClick: this.randomQuote }, "New Quote"))), /*#__PURE__*/


      React.createElement("footer", null, "Project by Emiliano")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));