import React from "react";

class MtgcardsDetail extends React.Component {

    render() {

        // console.log(this.renderMtgcards)
        const { name, image, year, overall_condition, centering, corners, edges, surface, card_serial_number, graded_by } = this.props.mtgcard

        return ( 
            <div className="mtgcard">
                <img alt={name} src={image} />
                <h3>{name}</h3>
                <h4>
                    Year: {year}<br/>
                    Overall Condition: {overall_condition}<br/>
                    Centering: {centering}<br/>
                    Corners: {corners}<br/>
                    Edges: {edges}<br/>
                    Surface: {surface}<br/>
                    Card Serial Number: {card_serial_number}<br/>
                    Graded by: {graded_by}<br/>
                </h4>
            </div>
        );
    }
}

export default MtgcardsDetail;