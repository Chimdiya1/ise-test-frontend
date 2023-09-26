function DashboardFooter() {
    return (
      <div className="bg-gray-900 w-full pt-10 pr-4 pb-10 pl-4 md:px-6 lg:px-8 mt-10">
        <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8">
          <div className="mt-0 mr-0 mb-8 ml-0 lg:grid-cols-6 grid row-gap-10">
            <div className="lg:col-span-4 md:grid-cols-4 grid grid-cols-2 gap-5 row-gap-8">
              <div>
                <p className="tracking-wide text-gray-300 text-medium">
                  Category
                </p>
                <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Headlines
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      World news
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Sports
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Blogs
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="tracking-wide text-gray-300 text-medium">
                  Category
                </p>
                <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Headlines
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      World news
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Sports
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Blogs
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="tracking-wide text-gray-300 text-medium">
                  Category
                </p>
                <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Headlines
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      World news
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Sports
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Blogs
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="tracking-wide text-gray-300 text-medium">
                  Category
                </p>
                <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Headlines
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      World news
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Sports
                    </p>
                  </div>
                  <div>
                    <p className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">
                      Blogs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:max-w-md lg:col-span-2">
              <p className="tracking-wide font-medium text-base text-gray-300">
                Subscribe for updates
              </p>
              <div className="md:flex-row mt-4 mr-0 mb-0 ml-0 flex">
                <input
                  type="text"
                  placeholder="Email"
                  className="border-gray-300 border flex-grow transition duration-200 rounded
                appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline w-full h-12
                pt-0 pr-4 pb-0 pl-4 mt-0 mr-0 mb-4 ml-0 bg-white shadow-sm md:mr-2 md:mb-0"
                />
                <button
                  type="submit"
                  className="inline-flex text-white rounded transition duration-200 hover:bg-deep-blue-900
                focus:shadow-outline focus:outline-none items-center justify-center h-12 pt-0 pr-6 pb-0 pl-6 mt-0 mr-0
                mb-4 ml-2 font-medium bg-blue-700 tracking-wide shadow-md"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 mr-0 mb-0 ml-0 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minimh.
              </p>
            </div>
          </div>
          <div className="flex-col justify-between pt-5 pr-0 pb-10 pl-0 sm:flex-row flex border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © Copyright 2021 Lorem Inc. All rights reserved.
            </p>
            {/* <div className="items-center mt-4 sm:mt-0 flex space-x-4">
              <div className="h-5 fa-twitter fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"></div>
              <div
                className="h-5 fa-instagram fab text-gray-500 transition-colors duration-300
              hover:text-teal-accent-400"
              ></div>
              <div className="h-5 fa-facebook fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"></div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  
  export default DashboardFooter;
  