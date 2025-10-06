import Picture from "./components/Picture.jsx";
import Content from "./components/Content.jsx";
function HomePage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center">
            <div className="w-4/5 flex flex-col justify-center items-start gap-y-6 lg:flex-row lg:justify-center lg:items-center">
                <Picture
                    widthPicture="1/2"
                />
                <Content
                    widthContent="1/2"
                />
            </div>
        </div>
    );
}

export default HomePage