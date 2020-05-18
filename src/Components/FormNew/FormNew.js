import React from "react";
import "./FormNew.scss";

class FormNew extends React.Component {
  render() {
    return (
      <div className="section2">
        <div className="BuiltYourOwnStand">
          <h2>CREA TU PROPIO STAND</h2>
          <h4>
            En 12 horas o menos recibirás el render de tu stand junto con la
            cotización según tu personalización
          </h4>
        </div>

        <div className="form-wrapper">
          <h3>COMIENZA DANDONOS TUS DATOS</h3>
          <form class="w-full max-w-lg">
            <div clasName="flex flex-wrap -mx-3 mb-6">
              <div clasName="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  clasName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  clasName="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                ></input>
                <p clasName="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div clasName="w-full md:w-1/2 px-3">
                <label
                  clasName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  clasName="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                ></input>
              </div>
            </div>
            <div clasName="flex flex-wrap -mx-3 mb-6">
              <div clasName="w-full px-3">
                <label
                  clasName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  clasName="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                ></input>
                <p clasName="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div clasName="flex flex-wrap -mx-3 mb-2">
              <div clasName="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  clasName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  clasName="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                ></input>
              </div>
              <div clasName="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  clasName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  State
                </label>
                <div clasName="relative">
                  <select
                    clasName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div clasName="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      clasName="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div clasName="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  clasName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Zip
                </label>
                <input
                  clasName="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormNew;
