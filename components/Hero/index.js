import style from "./style.module.css"

const Hero = ({className,image,text}) => {
    return (
        <div className={`${className} ${style["reusable-hero-container"]}`}>
           <img src={image} alt="" className="h-full w-full object-cover"/>
           <p className="z-50 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center md:text-5xl font-primary">{text}</p>
        </div>
    )
}

export default Hero
