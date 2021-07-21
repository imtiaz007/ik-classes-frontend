import React from 'react';
import { Link } from 'react-router-dom';

const AllCoursesPage = () => (
  <div className="flex flex-col sm:flex-row flex-wrap justify-start sm:space-x-7 w-full h-full px-10 pt-5 sm:px-0">
    <div className="flex flex-col w-full sm:w-1/4 sm:ml-7 mb-5 rounded-md shadow-xl bg-gray-200">
      <Link to="course">
        <img
          src="https://picsum.photos/400/200"
          alt=""
          className="rounded-t-xl w-full"
        />
        <div className="p-5 space-y-3">
          <p className="text-2xl font-semibold text-gray-700">Azure 101</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut labore
            provident enim voluptas natus quod itaque saepe quas excepturi
            similique incidunt, sit eius, nobis minus rem veritatis ratione
            vitae numquam?
          </p>
        </div>
      </Link>
    </div>
    <div className="flex flex-col w-full sm:w-1/4 sm:ml-7 mb-5 rounded-md shadow-xl bg-gray-200">
      <Link to="course">
        <img
          src="https://picsum.photos/400/200"
          alt=""
          className="rounded-t-xl w-full"
        />
        <div className="p-5 space-y-3">
          <p className="text-2xl font-semibold text-gray-700">Azure 101</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut labore
            provident enim voluptas natus quod itaque saepe quas excepturi
            similique incidunt, sit eius, nobis minus rem veritatis ratione
            vitae numquam?
          </p>
        </div>
      </Link>
    </div>
    <div className="flex flex-col w-full sm:w-1/4 sm:ml-7 mb-5 rounded-md shadow-xl bg-gray-200">
      <Link to="course">
        <img
          src="https://picsum.photos/400/200"
          alt=""
          className="rounded-t-xl w-full"
        />
        <div className="p-5 space-y-3">
          <p className="text-2xl font-semibold text-gray-700">Azure 101</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut labore
            provident enim voluptas natus quod itaque saepe quas excepturi
            similique incidunt, sit eius, nobis minus rem veritatis ratione
            vitae numquam?
          </p>
        </div>
      </Link>
    </div>
    <div className="flex flex-col w-full sm:w-1/4 sm:ml-7 mb-5 rounded-md shadow-xl bg-gray-200">
      <Link to="course">
        <img
          src="https://picsum.photos/400/200"
          alt=""
          className="rounded-t-xl w-full"
        />
        <div className="p-5 space-y-3">
          <p className="text-2xl font-semibold text-gray-700">Azure 101</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut labore
            provident enim voluptas natus quod itaque saepe quas excepturi
            similique incidunt, sit eius, nobis minus rem veritatis ratione
            vitae numquam?
          </p>
        </div>
      </Link>
    </div>
    <div className="flex flex-col w-full sm:w-1/4 sm:ml-7 mb-5 rounded-md shadow-xl bg-gray-200">
      <Link to="course">
        <img
          src="https://picsum.photos/400/200"
          alt=""
          className="rounded-t-xl w-full"
        />
        <div className="p-5 space-y-3">
          <p className="text-2xl font-semibold text-gray-700">Azure 101</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut labore
            provident enim voluptas natus quod itaque saepe quas excepturi
            similique incidunt, sit eius, nobis minus rem veritatis ratione
            vitae numquam?
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default AllCoursesPage;
