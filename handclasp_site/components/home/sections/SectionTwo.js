import Link from 'next/link';
import Button from '../../global/Button'

const SectionTwo = () => {
    return (
        <div>
            <div className = "home-section-2-container">
                <h2 className = "home-section-2-title">School of Promise Project</h2>
                <p className = "home-section-2-p">Handclasp is committed to giving a child a chance to develop their skills through your sponsorship donations by sending them to school.  Handclasp has a partnership with Hill Tribes Resources and Development Center that also trains children in Christian education.  Our partnership has allowed many students to advance to a higher education and has been successful in many students graduating from universities with a variety of degrees.  Handclasp thanks all of our sponsors that have helped accomplish these opportunities through prayer and support.
                </p>
                <Link href="/projects">
                    <Button text="Project Details" buttonClass="" />
                </Link>
            </div>
        </div>
    )
}

export default SectionTwo;