import React, {
    Component
} from "react";

export default class MultiCartItemErrorComponent extends Component {

    constructor(props) {
        super(props);
    }

    renderMessage() {
            let messages = this.props.rejectionReasons.map((reason, index) => < span key = {
                    index
                } > {
                    reason
                } < /span>);
                messages.push( < span key = {
                        -1
                    } > Usuń produkt z koszyka. < /span>);
                    return messages;
                }

                render() {
                    return ( <
                        tr >
                        <
                        td colSpan = {
                            3
                        } >
                        <
                        div className = "opl-msg opl-msg--box opl-msg--error" >
                        <
                        div className = "o-icon-list" >
                        <
                        div className = "o-icon-list__item" >
                        <
                        div className = "o-icon-list__icon u-vertical-middle" >
                        <
                        div aria - hidden = "true"
                        className = "g-icon g-icon--error g-icon--before g-icon--s" > < /div> <
                        /div> <
                        div className = "o-icon-list__text u-vertical-middle" >
                        <
                        p >
                        <
                        b > {
                            this.renderMessage.bind(this)()
                        } <
                        /b> <
                        /p> <
                        /div> <
                        /div> <
                        /div> <
                        /div> <
                        /td> <
                        /tr>
                    );
                }

            }