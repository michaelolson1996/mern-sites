import React from 'react';

class DropDown extends React.Component{
    render() {
        var items = this.props.children;
        var ddId = this.props.ddId;
        
        var itemsList = items.map(function(item, index) {
            return <li key={index}>{item}</li>
        })

        return (
            <ul className='dropdown_global' id={ddId}>
                {itemsList}
            </ul>
        )
    }
}

export default DropDown;