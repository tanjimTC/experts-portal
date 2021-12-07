const CompanyMotoCard = ({data}) => {
    return (
        <div className={'h-96 max-w-sm m-3 rounded-md bg-white'} style={{boxShadow: '0.2px 0.2px 15px 0 rgba(0, 0, 0, 0.16)'}}>
            <div className={'grid place-items-center'}>
                <div>
                    <div className={'bg-aboutusCardBG mt-8 w-32 h-32 rounded-full absolute'}></div>
                    <img className={'relative w-28 h-28 mt-16 ml-2'} src={data.link} alt='not found' />
                </div>
            </div>
            <div className={'font-primary text-textColor text-center m-5'}>
                <p className={'font-bold text-lg'}>
                    {data.title}
                </p>
                <p className={'text-sm mt-5'}>
                    {data.text}
                </p>
            </div>

        </div>
    );
}

export default CompanyMotoCard;