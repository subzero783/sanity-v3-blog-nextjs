import Image from 'next/image';


function Logo(props: any){
    const {renderDefault, title} = props;
    
    return(
        <div
            className="rounded-full object-cover"
        >
            <Image
                className="rounded-full object-cover"
                height={50}
                width={50}
                src="https://avatars.githubusercontent.com/u/28282324"
                alt="Gustavo Amezcua"
            />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo;