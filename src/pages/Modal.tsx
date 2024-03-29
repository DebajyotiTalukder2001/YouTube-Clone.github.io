import React from "react";
import "../index.css";
export default function Modal() {
    const [showModal, setShowModal] = React.useState(true);
    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="modal-fade items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  top-0 right-0 left-0  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                        <div className="relative mx-auto p-2 w-full max-w-2xl max-h-full">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-50 shadow bg-gray-700 outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-400 rounded-t">
                                    <h3 className="text-2xl font-semibold text-white">
                                        Disclaimer
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-5 flex-auto">
                                    <p className="my-3 text-slate-200 text-lg leading-relaxed">
                                        <strong>This page was made as a personal project in connection with an educational exercise.</strong>
                                        This is NOT the official site of the company or brand identified on the page. 
                                        The creator of this page is NOT affiliated with the company or brand in any way. 
                                        DO NOT enter any personal information (such as logins, passwords or credit card numbers) on this site.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-4 md:p-5 border-t border-solid border-gray-400 rounded-b">
                                    <button
                                        className="py-2.5 px-5 ms-3 mx-3 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        I accept
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}