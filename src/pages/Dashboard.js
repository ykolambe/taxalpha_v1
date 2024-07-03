import React, { useEffect, useState } from 'react';
import { getAggCount, getCategoryById } from '../utils/services';
import NavBarAdmin from '../components/Navbar/NavBarAdmin';

const Dashboard = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getCounts();
  }, []);

  const getCounts = async () => {
    await getAggCount().then(async (response) => {
      if (response.data) {
        setData(response.data);
      } else if (response.error) {
        setData({});
      }
    });
  };
  return (
    <>
      <div>
        <NavBarAdmin />
      </div>

      <div className="px-12 mt-8 py-12 lg:py-24" data-aos="fade-down" data-aos-delay="600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {Object.keys(data).map((e) => {
            return (
              <>
                <CustomCardComp title={e} count={data[e]} />
              </>
            );
          })}
        </div>
      </div>

      {/* </div>
      </div> */}
    </>
  );
};

const CustomCardComp = ({ title, count }) => {
  return (
    <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-400 hover:text-white rounded-lg shadow-2xl p-2 group">
      <div className="m-1 text-justify text-sm">
        <div className="bg-card text-card-foreground max-w-sm p-2">
          <h2 className="font-semibold my-2 text-6xl text-center mb-4">{count}</h2>
          <p className="text-md font-semibold text-center uppercase">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
