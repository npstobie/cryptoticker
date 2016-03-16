module.exports = function (session) {
  function getAllTickers (args,kwargs) {
  	
  }
  function marketEvent (args,kwargs) {
          console.log(args);
  }
  function tickerEvent (args,kwargs) {
          console.log(args);
  }
  function trollboxEvent (args,kwargs) {
          console.log(args);
  }
  session.subscribe('BTC_XMR', marketEvent);
  session.subscribe('ticker', tickerEvent);
  session.subscribe('trollbox', trollboxEvent);
}