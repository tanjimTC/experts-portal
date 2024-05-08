import PartnersLogoHolder from "../../../Cards/PartnersLogoHolder";

const data = {
    title: 'Our Technology Partners', 
    images: [
        {link: './images/homepage/businessPartners/svg/google.svg'},
        {link: './images/homepage/businessPartners/svg/zoom.svg'},
        {link: './images/homepage/businessPartners/svg/microsoft.svg'},
        {link: './images/homepage/businessPartners/svg/slack.svg'},
    ]
}

const PartnersLogos = () => {
    return (
        <div className={' bg-sectionBG'}>
            <div className={'container'}>
                <div className={'text-2xl md:text-4xl text-center font-bold font-primary pt-20 text-textColor'}>
                    <p>
                        {data.title}
                    </p>
                </div>
                <PartnersLogoHolder data={data.images} />
            </div>
        </div>
    );
}

export default PartnersLogos;