

import img4 from './../images/consultation.svg';

const CardComponent = ({ itm }) => {
    return (
        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-2 group">
            <div className="m-1 text-justify text-sm">

                <div className="bg-card text-card-foreground max-w-sm p-6">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />

                    <h2 className="font-semibold my-4 text-2xl text-center mb-8">{itm.title}</h2>
                    <p className="text-md font-medium">{itm.description}
                    </p>
                </div>
            </div>
        </div>
    )

}


export default CardComponent;
