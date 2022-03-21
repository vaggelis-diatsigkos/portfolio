const FooterSection = () => {
    return (
        <div className="py-12">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-12">
                <div className="text-center">
                    <i className="fad fa-heart text-pink-500 fa-10x animate-pulse"></i>
                </div>
                <div className="flex-grow">
                    <div className="text-5xl lg:text-7xl text-center lg:text-left font-extrabold">Thank you for reaching the end!</div>
                    <p className="text-lg lg:text-xl text-center lg:text-left  mt-4">
                        You can find the source code {" "}
                        <a className="text-gray-400 hover:text-gray-500 transition-all ease-out duration-200 underline" target="_blank" rel="noreferrer" href="https://github.com/vaggelis-diatsigkos/portfolio">here</a>{" "}
                        and do not hesitate to contact me at{" "}
                        <a className="text-gray-400 hover:text-gray-500 transition-all ease-out duration-200 underline" href="mailto:vaggelis.diatsigkos@outlook.com">vaggelis.diatsigkos@outlook.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;