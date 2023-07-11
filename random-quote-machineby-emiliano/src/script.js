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
  ["It always seems impossible until it's done.", "Nelson Mandela"]
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0]
    };
    this.randomQuote = this.randomQuote.bind(this);
  }
  
  randomQuote() {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }
  
  render() {
    
    const { quote } = this.state;
    
    return (
      <div id="box">
       <div id="quote-box">
          <div id="quote-text">
            <span id="text">"{quote[0]}"</span>
          </div>
          <div id="author-box">
            - <span id="author">{quote[1]}</span>
          </div>
          <div id="buttons">
            <button className="btn"><a target="_blank" id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a></button>
            <button className="btn" id="new-quote" onClick={this.randomQuote}>New Quote</button>
          </div>
        </div>
        <footer>Project by Emiliano</footer>
       </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));