import React from "react";
import MtgcardsDetail from "./MtgcardsDetail";
// import AuctionbidForm from "./AuctionbidForm";

class MtgcardsContainer extends React.Component {

    renderMtgcards = () => {
        return this.props.renderMtgcards.map(mtgcard => <MtgcardsDetail
            image={mtgcard.image}
            name={mtgcard.name}
            year={mtgcard.year}
            overall_condition={mtgcard.overall_condition}
            centering={mtgcard.centering}
            corners={mtgcard.corners}
            edges={mtgcard.edges}
            surface={mtgcard.surface}
            card_serial_number={mtgcard.card_serial_number}
            graded_by={mtgcard.graded_by}
            key={mtgcard.id}
            mtgcard={mtgcard}
            handleBid={this.props.handleBid}
        />)
    }

    render() {
        // console.log(this.props.renderMtgcards)
        return (
            <div>
                <div>{this.renderMtgcards()}</div>
            </div> 
        )
    }
}

export default MtgcardsContainer;