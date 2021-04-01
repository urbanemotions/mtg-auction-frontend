import React from "react";

class AuctionbidForm extends React.Component {

    state = {
        bid: 0
    }

    onBid = event => {
        event.preventDefault();
        let info = {
            bid: this.state.bid
        };
        this.props.handleBid(info)
    };

    render() {
        return (
            <div>
                <h3>Auction Bid: </h3>
                <div className="auctionbid card">
                    <form className="auctionbid form" onSubmit={this.onBid}>
                        <label for="Bid">Bid: </label>
                        <input
                            className="auctionbid field"
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