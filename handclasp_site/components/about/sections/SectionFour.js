import Director from '../components/Director';

const SectionFour = () => {
    return (
        <div className = "directors-founders-page">
            <h2 className = "directors-title">Directors</h2>
            <div className = "directors-container">
                <Director className="dave-image" name="David Palacios" position="President" />
                <Director className="daveC-image" name="David Carpenter" position="Director" />
                <Director className="bob-image" name="Bob Carpenter" position="Treasurer" />
            </div>
        </div>
    )
};

export default SectionFour;