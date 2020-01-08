import {Component} from 'react';
import Link from 'next/link';
import {connect} from 'react-redux';
import projects from '../../../redux/actions/getProjects';
import Project from '../components/Project';
import Button from '../../global/Button';

class SectionOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(projects.getProjects());
    }

    componentDidUpdate() {
        if (this.state.projects.length <= 0 && this.props.data.success == true) {
            this.setState(() => ({
                projects: this.props.data.projects
            }))
        }
    }

    mapProjects = () => {

    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.projects.length === 0 ?
                        <div className = "loading-page background-push">
                            <h3 className = "loading-word">Loading...</h3>
                        </div>
                    :
                        <div className="projects_wrap">
                            <div className="projects_flex_wrap">
                                {
                                    this.state.projects.length > 0 ?
                                        this.state.projects.map(project => {
                                            return (
                                                <Project
                                                    name = {project[0]}
                                                    description = {project[1]}
                                                    cost = {project[2]}
                                                    savings = {project[3]}
                                                    image = {project[4]} />
                                            )
                                        })
                                    :
                                        ''
                                }
                            </div>
                            
                            <Button text="Make a Donation" style="projects_button" />

                            <style jsx>{`
                                .projects_wrap {
                                    width:100vw;
                                    height:auto;
                                    min-height:100vh;
                                    display:flex;
                                    flex-direction:column;
                                    justify-content:center;
                                    align-items:center;
                                    overflow:hidden;
                                    margin-top:50px;
                                    margin-bottom:50px;
                                    padding-bottom:50px;
                                }

                                .projects_flex_wrap {
                                    width:90%;
                                    height:auto;
                                    display:flex;
                                    flex-wrap:wrap;
                                    align-items:center;
                                    justify-content:space-around;
                                }
                            `}</style>
                        </div>
                }
            </React.Fragment>
            
        );
    };
};

function mapStateToProps({data}) {
    return {
        data: data
    };
 }

export default connect(mapStateToProps)(SectionOne);