export const Orders = () => {
  return (
    <div>
      {/* <div className="flex flex-wrap w-52 h-52  ">
        <div className="bg-teal-700 w-12 h-12">A</div>
        <div className="w-12 h-12 bg-slate-800">B</div>
        <div className="w-12 h-12 bg-red-800">C</div>
        <div className="w-12 h-12 bg-orange-500">D</div>
        <div className="w-12 h-12 bg-cyan-600">E</div>
        <div className="w-12 h-12 bg-lime-700">F</div>
      </div> */}

      <div className="flex flex-row text-orange-400">
        This is the Orders page
      </div>

      <div className="flex gap-2">
        <div className="w-33/100 h-full flex flex-col justify-center items-center">
          <div className="flex my-3 text-green-950 font-thin bg-green-200 rounded-md w-full justify-center">
            RUTA 01
          </div>
          <div className="flex flex-col gap-2 flex-wrap w-full h-screen items-center">
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-full" >
              {" "}
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-green-500 bg-cover" style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/12116143/pexels-photo-12116143.jpeg?auto=compress&cs=tinysrgb&w=400')"}}></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Abarrotes Lupita
                </span>
                <div className="flex flex-col ">
                  <ul>
                  <li className="text-sm text-gray-700 font-thin">
                    - 4 kg Papa
                  </li>
                  <li className="text-sm text-gray-700 font-thin">
                    - 1 caja Pasta Yemina
                  </li>
                  </ul>
                  <span className="text-sm text-green-500 pl-2">...</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-44">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            
            
            
          </div>
        </div>
        <div className="w-33/100 flex flex-col justify-center items-center">
          <div className="flex my-3 text-green-950 font-thin bg-orange-200 rounded-md w-full justify-center">
            RUTA 02
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-33/100 flex flex-col justify-center items-center">
          <div className="flex my-3 text-green-950 font-thin bg-purple-200 rounded-md w-full justify-center">
            RUTA 03
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center w-46">
              {" "}
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500"></div>
              <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">
                  Total Sales
                </span>
                <div className="flex items-center">
                  <strong className="text-xl text-gray-700 font-semibold">
                    $4,625.60
                  </strong>
                  <span className="text-sm text-green-500 pl-2">+234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
