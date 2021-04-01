import React from "react";
import MtgcardsContainer from "./MtgcardsContainer";

class MtgcardsDetail extends React.Component {

    render() {

        // console.log(this.props.mtgcards)
        // const {name, image, year, overall_condition, centering, corners, edges, surface, card_serial_number, graded_by} = this.props.renderMtgcards

        return ( 
            <div className="mtgcard">
                <img alt={this.props.renderMtgcards.name} src={this.props.renderMtgcards.image} />
                <h3>{this.props.mtgcards.name}</h3>
                <h4>
                    Year: {this.props.mtgcards.year}<br/>
                    Overall Condition: {this.props.mtgcards.overall_condition}<br/>
                    Centering: {this.props.mtgcards.centering}<br/>
                    Corners: {this.props.mtgcards.corners}<br/>
                    Edges: {this.props.mtgcards.edges}<br/>
                    Surface: {this.props.mtgcards.surface}<br/>
                    Card Serial Number: {this.props.mtgcards.card_serial_number}<br/>
                    Graded by: {this.props.mtgcards.graded_by}<br/>
                </h4>
            </div>
        );
    }
}

export default MtgcardsDetail;