import React from "react";

class AuctionbidForm extends React.Component {

    state = {
        bid: 0
    }

    onBid = event => {
        event.preventDefault();
        let info = this.state;
        
        this.props.handleBid(info, this.props.mtgcardid)
    };

    render() {
        console.log(this.props.handleBid)
        return (
            <div>
                <h3>Auction Bid: </h3>
                <div className="auctionbid card">
                    <form className="auctionbid form" onSubmit={this.onBid}>
                        <label for="Bid">$ </label>
                        <input
                            className="auctionbid field"
                            name="bid"
                            value={this.state.bid}
                            onChange={event => this.setState({ bid: event.target.value })}
                            // onClick={} dont need onclick since i have onsubmit
                        />
                        <button className="bid button" type="submit">Bid</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AuctionbidForm;