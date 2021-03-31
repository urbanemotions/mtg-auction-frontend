import React from "react";

class MtgcardsDetail extends React.Component {
    render() {
        return (
            <div>
                <img alt={this.props.mtgcard.name} src={this.props.mtgcard.image} />
                <h3>{this.props.mtgcard.name}</h3>
                <h4>
                    {this.props.mtgcard.year}
                    {this.props.mtgcard.overall_condition}
                    {this.props.mtgcard.centering}
                    {this.props.mtgcard.corners}
                    {this.props.mtgcard.edges}
                    {this.props.mtgcard.surface}
                    {this.props.mtgcard.card_serial_number}
                    {this.props.mtgcard.graded_by}
                </h4>
            </div>
        );
    }
}

export default MtgcardsDetail;