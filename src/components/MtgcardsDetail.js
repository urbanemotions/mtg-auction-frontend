import React from "react";

class MtgcardsDetail extends React.Component {

    render() {

        console.log(this.props.mtgcard)
        return ( 
            <div className="mtgcard">
                <img alt={this.props.mtgcard.name} src={this.props.mtgcard.image} />
                <h3>{this.props.mtgcard.name}</h3>
                <h4>
                    Year: {this.props.mtgcard.year}<br/>
                    Overall Condition: {this.props.mtgcard.overall_condition}<br/>
                    Centering: {this.props.mtgcard.centering}<br/>
                    Corners: {this.props.mtgcard.corners}<br/>
                    Edges: {this.props.mtgcard.edges}<br/>
                    Surface: {this.props.mtgcard.surface}<br/>
                    Card Serial Number: {this.props.mtgcard.card_serial_number}<br/>
                    Graded by: {this.props.mtgcard.graded_by}<br/>
                </h4>
            </div>
        );
    }
}

export default MtgcardsDetail;