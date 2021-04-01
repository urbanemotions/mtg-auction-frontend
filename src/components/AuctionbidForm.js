import React, { Component } from 'react'

class AuctionbidForm extends Component {

    state = {
        bid: 0
    }

    onBid = event => {
        event.preventDefault();
        let info = {
            bid: this.state.bid
        };
    };

    render() {
        return (
            <div>
                <h3>Auction Bid Entry:</h3>
                <div className="Auction Bid Form">
                <form className="auctionbid form" onSubmit={this.onBid}>
                    <input
                        className="auction bid field"
                        name="bid"
                        value={this.state.bid}
                        onChange={event => this.setState({ bid: event.target.value })}
                    />
                    <button className="bid button" type="submit">Bid</button>
                </form>
            </div>
                {/* need to create a form for allowing user to create a bid 
                need to create a form for allowing user to edit a bid
                need to create a form for deleting a bid */}
            </div>
        )
    }
}
export default AuctionbidForm;