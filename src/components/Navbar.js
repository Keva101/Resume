import React, { Component } from 'react';
import Navitem from './Navitem';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemId': x }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 w-full h-6 text-right pb-10">
                    <div className="flex items-center flex-shrink-0 text-white">
                        <span className="font-semibold text-xl tracking-tight">Keva Newman</span>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <div href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                            </div>
                            <div href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                <Navitem item="Experiences" tolink="/experiences" activec={this.activeitem}></Navitem>
                            </div><div href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                            </div><div href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
                            </div><div href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                <Navitem item="Contacts" tolink="/contacts" activec={this.activeitem}></Navitem>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="h-screen flex overflow-hidden bg-gray-100">
                    <div className="md:hidden">
                        <div className="fixed inset-0 flex z-40">
                            <div className="fixed inset-0">
                                <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                            </div>

                            <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                <div class="absolute top-0 right-0 -mr-14 p-1">
                                    <button class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
                                        <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="mt-5 flex-1 h-0 overflow-y-auto">
                                    <nav class="px-2 space-y-1 ">
                                        <div href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-teal-500 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                                            <svg class="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                                            </svg>
                                            Home
                                            </div>
                                        <div href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-teal-500 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                                            <svg class="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <Navitem item="Experiences" tolink="/experiences" activec={this.activeitem}></Navitem>
                                            </svg>
                                            Experiences
                                            </div>
                                        <div href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-teal-500 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                                            <svg class="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                                            </svg>
                                            Education
                                            </div>
                                        <div href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-teal-500 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                                            <svg class="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
                                            </svg>
                                            Skills
                                            </div>
                                        <div href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-teal-500 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                                            <svg class="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <Navitem item="Contacts" tolink="/contacts" activec={this.activeitem}></Navitem>
                                            </svg>
                                            Contacts
                                            </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Navbar