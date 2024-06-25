

import checked from '../images/checked.svg';

const CardComponent = () => {

    return (
        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-2 group">
            <div className="m-1 text-justify text-sm">

                <div className="bg-card text-card-foreground max-w-sm p-6">
                    <h2 className="font-semibold my-4 text-2xl text-center mb-8">Multiple Salary Return</h2>

                    <div className="flex items-center mb-4">
                        <img className="w-10 h-10 rounded-t group-hover:scale-[1.25] transition duration-1000 ease-in-out" src={checked} alt="Checkmark" />
                        <span className="ml-4 text-lg text-primary">More than 1 Salary</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <img className="w-10 h-10 rounded-t group-hover:scale-[1.25] transition duration-1000 ease-in-out" src={checked} alt="Checkmark" />
                        <span className="ml-4 text-lg text-primary">More than 1 House Property</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-destructive line-through mr-2" style={{ color: 'indianred' }}>₹ 1499</span>
                        <span className="text-4xl font-bold text-primary">₹ 949</span>
                        <span className="text-lg text-primary ml-2">per year</span>
                    </div>
                    <div className="text-muted-foreground text-base">Inclusive of Taxes</div>
                </div>
            </div>
        </div>
    )

}


export default CardComponent;
