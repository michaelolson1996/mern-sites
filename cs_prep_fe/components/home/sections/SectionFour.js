import { Fragment, Component } from 'react'

class SectionFour extends Component {
  render() {
    return (
      <Fragment>
        <div className="section-four-wrap">
          <div className="review-card"></div>
          <div className="review-card"></div>
          <div className="review-card"></div>
        </div>
        <style jsx>
          {`

            .section-four-wrap {
              height: 900px;
              width:100vw;
              display:flex;
              flex-direction:column;
              justify-content:space-around;
              align-items:center;
            }

            .review-card {
              // background-color:white;
              border:2px solid #00FFFF;
              height: 200px;
              width:300px;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default SectionFour;