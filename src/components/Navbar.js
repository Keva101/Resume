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
        )
    }
}
export default Navbar