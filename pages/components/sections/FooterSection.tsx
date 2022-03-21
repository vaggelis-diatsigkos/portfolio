const FooterSection = () => {
    return (
        <div className="py-12">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-12">
                <div className="text-center">
                    <i className="fad fa-heart text-pink-400 fa-6x animate-pulse"></i>
                </div>
                <div className="flex-grow">
                    <div className="text-5xl lg:text-7xl text-center lg:text-left font-extrabold">Thank you for reaching out!</div>
                    <p className="text-lg lg:text-xl text-center lg:text-left mt-4">
                        You can find the source code {" "}
                        <a className="text-gray-500 hover:text-gray-600 transition-all ease-in-out duration-75 underline italic" target="_blank" rel="noreferrer" href="https://github.com/vaggelis-diatsigkos/portfolio">here</a>{" "}
                        and do not hesitate to contact me at{" "}
                        <a className="text-gray-500 hover:text-gray-600 transition-all ease-in-out duration-75 underline italic" href="mailto:vaggelis.diatsigkos@outlook.com">vaggelis.diatsigkos@outlook.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;