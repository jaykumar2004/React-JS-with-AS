const Shimmer = () => {
    return(
        <div className="grid grid-cols-5 gap-4 p-4">
            {[...Array(10)].map((_, index) => (
                <div key={index} className="m-4 p-4 w-[280px] h-[420px] rounded-2xl bg-gray-100 animate-pulse">
                    <div className="h-[180px] w-full bg-gray-200 rounded-2xl mb-4"></div>
                    <div className="space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;