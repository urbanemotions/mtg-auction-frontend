import React from "react";
// import MtgcardsDetail from "./MtgcardsDetail";

class AuctionbidsDetail extends React.Component {

    onUpdateBid = event => {
        event.preventDefault();
        let info = this.state;
        this.props.updateBid(info, this.props.auctionbid.bid)
    };

    
    deleteBid = () => {
        fetch(`http://localhost:3000/auctionbids/${this.props.auctionbid.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        // SETSTATE ISSUE - deletes but wont see that until page refresh 
        // this.setState({...this.state})
        // this.setState({auctionbids: this.props.mtgcard.auctionbids.map(auctionbid => <AuctionbidsDetail auctionbid={auctionbid} key={auctionbid.id}/>)})
        // this.setState({ auctionbids: this.props.auctionbid.filter(bids => bids.id !== this.props.auctionbid.id)})
    }

    render() {
        console.log(this.props.auctionbid.id)
        return (
            <div>
                <div className="bidcard">
                    <h4>
                        Bid: ${this.props.auctionbid.bid}<br />
                        Name: {this.props.auctionbid.user.name}<br />
                        <form className="update form" onSubmit={this.onUpdateBid}>
                            <label for="Bid">$ </label>
                            <input
                                className="update auctionbid field"
                                name="update bid"
                                value={this.state.bid}
                                onChange={event => this.setState({ bid: event.target.value })}
                            />
                            <button 
                                className="update button"   
                                // onClick={()=>{this.updateBid(this.props.auctionbid.bid)}}
                                type="submit">Update Bid</button> 
                        </form>
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