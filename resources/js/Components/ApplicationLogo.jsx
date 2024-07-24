import image from "../../../public/images/Logo-ESSFAR.png";
export default function ApplicationLogo(props) {
    return (
        <div>
            <img
                src={image}
                alt=""
                className="sm:w-[150px] xl:w-[200px] lg:w-[200px] md:w-[150px]"
            />
        </div>
    );
}
