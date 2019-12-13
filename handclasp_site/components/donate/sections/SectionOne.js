import Button from '../components/Button';
import Link from 'next/link';

const SectionOne = () => {
    return (                  
        <div className = "donate-page-1">
            <div className = "donate-options-container">
                <div className = "donation-options-inside-container">
                    <Link href="/payment">
                        <Button amount="5" />
                    </Link>
                </div>
                <div className = "donation-options-inside-container">
                    <Link href="/payment">
                        <Button amount="10" />
                    </Link>
                </div>
                <div className = "donation-options-inside-container">
                    <Link href="/payment">
                        <Button amount="20" />
                    </Link>
                </div>
                <div className = "donation-options-inside-container">
                    <Link href="/payment">
                        <Button amount="50" />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SectionOne;