import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

 function Content({widthContent}){
    return (
        <div className={`w-${widthContent} flex flex-col justify-center justify-items-center`}>
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h1 className="font-roboto text-xl text-black">Khaled Mahumd</h1>
            <p className="font-roboto text-base text-[#4e443c] text-justify">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio
            </p>
            <div className="flex flex-row py-2 gap-x-2">
                <Link to="https://www.facebook.com">
                    <FaSquareFacebook />
                </Link>
                <Link to="https://www.twitter.com">
                    <FaSquareXTwitter />
                </Link>
                <Link to="https://www.linkedin.com">
                    <FaLinkedin />
                </Link>
            </div>
            </div>
        </div>
    );
}
export default Content