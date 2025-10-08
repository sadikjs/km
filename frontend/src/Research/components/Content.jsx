import "./styles.css"
import { MdOutlineCastForEducation } from "react-icons/md";
function Content({ bg, beBorderFirst, beBorderSecound, beBorderThird, beBorderFour,
    afBorderFirst, afBorderSecound, afBorderThird,
    afBorderFour, borderX, borderT, borderB, borderWX, borderWT, borderWB }) {
    return (
        <div className={`${borderX} ${borderT} ${borderB} ${borderWX} ${borderWT} ${borderWB} 
             container w-[calc(100%-10%)] h-[calc(100%)] flex flex-col items-center justify-center lg:w-[calc(100%-20%)] lg:h-[calc(100%)]`}>
            <span className={`flex flex-col justify-center items-center icon
                ${bg} ${beBorderFirst} ${beBorderSecound} ${beBorderThird} ${beBorderFour}
                ${afBorderFirst} ${afBorderSecound} ${afBorderThird} ${afBorderFour}`}>
                <MdOutlineCastForEducation className="i w-[25px] h-[25px] my-auto mx-auto pt-2" />
            </span>
            <h1 className="text-center font-roboto text-base pt-8">Application</h1>
            <p className="text-center font-roboto text-base text-[#4e443c] p-2 text-justify">Nor
                again is there anyone who
                loves or pursues or desires to obtain pain of itself,
                because it is pain, but because
                <span className="underline cursor-pointer">
                    [more]
                </span>
            </p>
        </div>
    );
}

export default Content