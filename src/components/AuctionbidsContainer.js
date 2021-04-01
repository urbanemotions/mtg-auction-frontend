import React from "react";
import AuctionbidForm from "./AuctionbidForm";

class AuctionbidsContainer extends React.Component {

    renderAuctionbids = () => {
        return this.props.renderAuctionbids.map(auctionbid => <AuctionbidForm
            bid={auctionbid.bid}
            // key={auctionbid.id}
        />)
    }

    render() {
        // console.log(this.props.renderAuctionbids)
        return (
            <div>{this.renderAuctionbids()}</div>
        )
    }
}

export default AuctionbidsContainer;