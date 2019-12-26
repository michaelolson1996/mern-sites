import Link from 'next/link'

const SectionFive = () => {
    return (
        <div className = "founders-container">
            <h2 className = "founders-title">Founders</h2>
            <Link href="/about/[id]" as="/about/don_and_kay">
                <a className = "don-and-kay-image member-image">
                    <div className = "overlay">
                        <p className = "image-inner-text">Don &amp; Kay's Story</p>
                    </div>
                </a>
            </Link>
            <h3 className = "presidents-title">Don and Kay Fox</h3>
        </div>
    )
}

export default SectionFive