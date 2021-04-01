import React from "react";
import MtgcardsDetail from "./MtgcardsDetail";

class MtgcardsContainer extends React.Component {

// change to props when using cdm in app
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
        />)
    }

    render() {
        // console.log(this.props.renderMtgcards)
        return (
            <div>{this.renderMtgcards()}</div>
        )
    }
}

export default MtgcardsContainer;