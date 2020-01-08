import React from 'react';
import {connect} from 'react-redux';
import children from '../../../redux/actions/getChildren';
import Child from '../components/Child';

class SectionOne extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            unsponsoredKids: [],
            currentKidInfo: [],
            loading: true,
            displayKidsInfo: false,
            displayPaymentForm: false
        }
    }

    componentDidUpdate() {
        this.props.children.success && this.state.unsponsoredKids.length == 0 ?
            this.setState(() => ({
                unsponsoredKids: this.props.children.child,
                loading: false
            }))
        :
            <div></div>       
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(children.getChildren());
    }

    renderKids = () => {
        return this.state.unsponsoredKids.map((kid, i) =>
            <Child key={i} image={kid.image} onClick={this.displayChildInfo} />
        )
    }

    displayChildInfo = (id) => {
        console.log(this.state.unsponsoredKids[id])
        this.setState(() => ({
            currentKidInfo: this.state.unsponsoredKids[id]
        }))
    }
    
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <React.Fragment>
            {
                this.state.loading ?
                    <div className = "loading-page background-push">
                        <h3 className = "loading-word">Loading...</h3>
                    </div>
                :
                    <div className = "sponsor-page-wrap background-push">
                        <div className = "sponsor-kids-grid">
                            {this.renderKids()}
                        </div>
                    </div>
            }
            </React.Fragment>
        )
    }
}

function mapStateToProps({children}) {
    return {
        children: children
    };
 }

export default connect(mapStateToProps)(SectionOne)