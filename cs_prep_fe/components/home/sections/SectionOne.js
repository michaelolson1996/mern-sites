import { Fragment, Component } from 'react';
import Typed from 'typed.js';
// import { render } from 'react-dom';

class SectionOne extends Component {

	componentDidMount() {
		if (typeof window !== 'undefined') {
			const type= new Typed('.section-one-type', this.options);
		} 
	}

options = {
  strings: ['Secure', 'Fast', 'Easy'],
	typeSpeed: 120,
	loop: true,
	loopCount: Infinity,
	backSpeed: 100
};

render() {
	return (
		<Fragment>
			<div className="section-one-wrap">
				<div className="section-one-container">
					<div className="section-one-image"></div>
					<h1 className="section-one-type">{this.type}</h1>
				</div>
			</div>
			<style jsx>
				{`

					.section-one-wrap {
						height:100vh;
						width:100vw;
						// position:absolute;
						// top: 0;
						// left:0;
						z-index:-100;
						display:flex;
						flex-direction:flex;
						justify-content:center;
						align-items:center;
					}

					.section-one-container {
						width:90%;
						height:400px;
					}

					.section-one-image {
						height:300px;
						// background-color:red;
					}

					.section-one-type {
						font-family: Hack;
						color: white;
						text-align:center;
						margin-top:2em;
					}

					.typed-cursor {
					}

					.typed-fade-out {
					}

				`}
			</style>
		</Fragment>
	)
}
	
}

export default SectionOne;