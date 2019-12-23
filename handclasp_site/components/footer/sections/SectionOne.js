import Button from '../../nav/components/Button';
import Link from 'next/link';

const SectionOne = () => {
    return (
        <div className="footer_sec_one_wrap">
            <div className="footer_sec_one_column_wrap">
                <div className="footer_sec_one_col_1">
                    <div className="footer_sec_one_container">
                        <h3 className="footer_title">information</h3>
                        <Link href='/'>
                            <Button text="Home" style="footer_button" />
                        </Link>
                        <Link href='/about'>
                            <Button text="About" style="footer_button" />
                        </Link>
                        <Link href='/media'>
                            <Button text="Media" style="footer_button" />
                        </Link>
                    </div>
                    <div className="footer_sec_one_container">
                        <h3 className="footer_title">contact us</h3>
                        <Link href='/questions'>
                            <Button text="FAQ's" style="footer_button" />
                        </Link>
                        <Link href='/inprogress' as='/media'>
                            <Button text="Contact" style="footer_button" />
                        </Link>
                    </div>
                </div>
                <div className="footer_sec_one_col_2">
                    <div className="footer_sec_one_container">
                        <h3 className="footer_title">support</h3>
                        <Link href='/donate'>
                            <Button text="Donate" style="footer_button" />
                        </Link>
                        <Link href='/projects'>
                            <Button text="Projects" style="footer_button" />
                        </Link>
                        <Link href='/sponsor'>
                            <Button text="Sponsor a Kid" style="footer_button" />
                        </Link>
                    </div>
                    <div className="footer_sec_one_container">
                        <h3 className="footer_title">get involved</h3>
                        <Link href='/volunteer'>
                            <Button text="Volunteer" style="footer_button" />
                        </Link>
                        <Link href='/inprogress'>
                            <Button text="Employment" style="footer_button" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne