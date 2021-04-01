import React from "react";
import AuctionbidsDetail from "./AuctionbidsDetail";
import AuctionbidForm from "./AuctionbidForm";

class MtgcardsDetail extends React.Component {

    auctionbids = () => {
        return this.props.mtgcard.auctionbids.map(auctionbid => <AuctionbidsDetail auctionbid={auctionbid} key={auctionbid.id}/>)
    }

    render() {
        // console.log(this.props.name)
        // const {name, image, year, overall_condition, centering, corners, edges, surface, card_serial_number, graded_by} = this.props
        // console.log(this.props.mtgcard)
        return ( 
            <div className="mtgcard">
                <img alt={this.props.name} src={this.props.image} />
                <h3>{this.props.name}</h3>
                <h4>
                    Year: {this.props.year}<br/>
                    Overall Condition: {this.props.overall_condition}<br/>
                    Centering: {this.props.centering}<br/>
                    Corners: {this.props.corners}<br/>
                    Edges: {this.props.edges}<br/>
                    Surface: {this.props.surface}<br/>
                    Card Serial Number: {this.props.card_serial_number}<br/>
                    Graded by: {this.props.graded_by}<br/>
                </h4>
                <h4>{this.auctionbids()}</h4>
                <div><AuctionbidForm /></div>
                <br/>
            </div>
        );
    }
}

export default MtgcardsDetail;