import React from "react";
// import MtgcardsDetail from "./MtgcardsDetail";

class AuctionbidsDetail extends React.Component {

    // const {bid, id} = this.props.auctionbid
    // bid.id is not defined. RAN OUT OF IDEAS WHY ITS UNDEFINED
    deleteBid = (auctionbid) => {
        fetch(`http://localhost:3000/auctionbids/${auctionbid.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
    }

    updateBid = (auctionbid) => {
        let updateBid = {
            bid: auctionbid,
            // mtgcard_id: mtgcard_id, 
            // user_id: user_id
        }  
        fetch(`http://localhost:3000/auctionbids/${auctionbid.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify(updateBid)
        })
        .then(res => res.json())
        .then(bid => this.setState(bid = updateBid))
    }


    render() {
        // console.log(bid.id)
        return (
            <div>
                <div className="bidcard">
                    <h4>
                        Bid: ${this.props.auctionbid.bid}<br />
                        Name: {this.props.auctionbid.user.name}<br />
                        <button 
                            className="update button"   
                            onClick={()=>{this.updateBid(this.props.auctionbid.bid)}}
                            type="submit">Update Bid</button> {" "}
                        <button 
                            className="delete button" 
                            onClick={()=>{this.deleteBid(this.props.auctionbid.bid)}}
                            type="submit">Delete Bid</button>
                    </h4>
                </div>
            </div>
        );
    }
}

export default AuctionbidsDetail;