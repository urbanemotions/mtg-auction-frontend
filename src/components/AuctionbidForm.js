import React from "react";

class AuctionbidForm extends React.Component {

    state = {
        bid: 0
    }

    handleBid = (bidData) => {
    fetch('http://localhost:3000/auctionbids')
      .then(res => res.json())
      .then(bidData => {
        this.setState({ bid: bidData })
      })
  }

    onBid = event => {
        event.preventDefault();
        let info = {
            bid: this.state.bid,
            user_id: this.state.bid.user_id,
            mtgcard_id: this.state.bid.mtgcard_id
        };
        this.props.handleBid(info)
    };

    render() {
        return (
            <div>
                <h3>Auction Bid: </h3>
                <div className="auctionbid card">
                    <form className="auctionbid form" onSubmit={this.onBid}>
                    {/* <form className="auctionbid form" onSubmit={this.handleBid}> */}
                        <label for="Bid">$ </label>
                        <input
                            className="auctionbid field"
                            name="bid"
                            value={this.state.bid}
                            onChange={event => this.setState({ bid: event.target.value })}
                            // onClick={}
                        />
                        <button className="bid button" type="submit">Bid</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AuctionbidForm;