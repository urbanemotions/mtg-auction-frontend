import React from "react";
// import MtgcardsDetail from "./MtgcardsDetail";

class AuctionbidsDetail extends React.Component {

    updateBid = () => {
        let updateBid = {
            // bid: auctionbid,
            // mtgcard_id: mtgcard_id, 
            // user_id: user_id
        }  
        fetch(`http://localhost:3000/auctionbids/${this.props.auctionbid.id}`, {
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

    // RAN OUT OF IDEAS WHY - deletes but wont see that until page refresh 
    deleteBid = () => {
        fetch(`http://localhost:3000/auctionbids/${this.props.auctionbid.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        // .then(bids => { this.setState({ bids: this.props.auctionbid})})
        // .then(bids => this.props.auctionbid)
    }

    render() {
        console.log(this.props.auctionbid.id)
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