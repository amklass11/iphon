
function SoundSection() {
    function handleLearnMore() {
        const element = document.querySelector('.sound-section-content');
        window.scrollTo({
           top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth',
        });
    }
    return (
        <div className="sound-section wrapper">
            <div className="sound-section-content content">
            <h2 className="title"> New Sound system </h2>
            <p className="text">Big and bigger</p>
            <span className="description">
                From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li><button className="button">Buy</button></li>
                <li><a className="link" onClick={handleLearnMore}>Learn More</a></li>
                </ul>
            </div>
           
            </div>
    )
}
export default SoundSection;