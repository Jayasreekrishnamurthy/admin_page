import React, { useState } from 'react';
import './Dashboard.css';
// import Sidebar from "./components/Sidebar"
import {
  ResponsiveContainer,
BarChart,Bar,
  XAxis,
  Tooltip,


} from "recharts";
import Unitprogress from "./unit";
import { Typography, Box} from "@mui/material";
import ProgressCircle from "./components/ProgressCircle";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: String,
    fat: String,
    carbs: number,
   
  ) {
    return { name, calories, fat, carbs };
  }

const rows = [
    createData('Abstract 3D', '32 in stock', '$45.99', 20,),
    createData('Saephens Illustration', '32 in stock', '$45.99', 20,),
    
  ];
function Dashboard() {

    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        {/* <Sidebar/> */}
                        
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Dashboard </div>
                            <div className="text-center d-none d-md-inline">
                            {/* <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button> */}
                        </div>
                        </a>

                        {/*   <!-- Divider --> */}
                        {/* <hr className="sidebar-divider my-0" /> */}

                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                                </a>
                                
                        </li>

                        {/*  <!-- Divider --> */}
                        {/* <hr className="sidebar-divider" /> */}

                        {/*   <!-- Heading --> */}
                     {/* <div className="sidebar-heading">
                            Interface
                        </div> */}

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Products</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Components:</h6>
                                    <a className="collapse-item" href="buttons.html">Buttons</a>
                                    <a className="collapse-item" href="cards.html">Cards</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>
                                <span>Customers</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Colors</a>
                                    <a className="collapse-item" href="utilities-border.html">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.html">Animations</a>
                                    <a className="collapse-item" href="utilities-other.html">Other</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Divider --> */}
                        {/* <hr className="sidebar-divider" /> */}

                        {/* <!-- Heading --> */}
                        {/* <div className="sidebar-heading">
                            Addons
                        </div> */}

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Income</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Promote</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Help</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>
                        {/* <!-- Divider --> */}
                        {/* <hr className="sidebar-divider d-none d-md-block" /> */}

                        

                        {/*  <!-- Sidebar Message --> */}
                       

                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    {/* < id="content-wrapper" className="d-flex flex-column"> */}

                        {/*  <!-- Main Content --> */}

                     

                        <div id="content">


                              
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/*  <!-- Page Heading --> */}
                                <nav className="navbar topbar mb-4 static-top">

{/*  <!-- Sidebar Toggle (Topbar) --> */}
<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
    <i className="fa fa-bars"></i>
</button>

{/*  <!-- Topbar Search --> */}


{/*  <!-- Topbar Navbar --> */}
<ul className="navbar-nav ml-auto">

    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
   
        {/*   <!-- Dropdown - Messages --> */}
       

  
        {/*   <!-- Dropdown - Alerts --> */}
     
    {/*  <!-- Nav Item - Messages --> */}
  

    <div className="topbar-divider d-none d-sm-block"></div>

    {/* <!-- Nav Item - User Information --> */}
  

</ul>

</nav>
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h5 className="h5 mb-0 text-gray-800">Hello Shahrukh 👏</h5>
                                    {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> */}
                                        <i
                                        className="fas fa-download fa-sm text-white-50"></i> <form className="">
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control bg-white border-0 small"
                                                placeholder="Search..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                        </div>
                                    </form>
                                    {/* </a> */}
                                        
                                </div>

                                {/*  <!-- Content Row --> */}
                                <div className="row">

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                            Earning</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$198K</div>
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            37.8% this month</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            Orders</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$2.4K</div>
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            2% this month</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-success shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col mr-2">
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            Balance</div>
                                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$2.4K</div>
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            2% this month</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-warning shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                    </div>
                                                    <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            Total Sales</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$89K</div>
                                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                            11% this month</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Content Row --> */}

                                <div className="row">

                                    {/*   <!-- Area Chart --> */}
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div align
                                                className="overviewtitle">
                                                <h6 className="m-0 font-weight-bold text-primary">Overview<br/>Monthly Earning</h6>
                                                
                                                    
                                                
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-area">
                                            <ResponsiveContainer width="100%">
      <BarChart data={Unitprogress}>
        <XAxis dataKey="name" stroke="" />
        {/* <YAxis stroke="black"></YAxis> */}
        <Bar dataKey="Progress" stroke="#2884ff" fill="#40E0D0" barSize={30} height={30} />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
                                                    <canvas id="myAreaChart"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pie Chart --> */}
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="overviewtitle">
                                                <h6 className="m-0 font-weight-bold text-primary">Customers<br/>Customers that buy products</h6>
                                                
                                                
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body1">
                                                <div className="chart-pie pt-4 pb-2">
                                                <ProgressCircle size="125" />
            <Typography
              variant="h5"
            //   color={colors.greenAccent[500]}
            
              sx={{ mt: "15px" }}
            >
         </Typography>
                                                    <canvas id="myPieChart"></canvas>
                                                </div>
                                                <div className="mt-4 text-center small">
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-12 col-lg-6">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div align
                                                className="overviewtitle">
                                                
                                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                                <h6 className="m-0 font-weight-bold text-primary">Product Sell</h6>
                                   
                                    {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> */}
                                        <i
                                        className="fas fa-download fa-sm text-white-50"></i> <form className="">
                                        <div className="input-group">
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control bg-white border-0 small"
                                                placeholder="Search..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                        </div>
                                    </form>
                                    {/* </a> */}
                                        
                                </div> 
                                                
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-area">
                                                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Stock&nbsp;</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Sales</TableCell>
            {/* <TableCell align="right"></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

                                                                   <canvas id="myAreaChart"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                </div>
                </div>

                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*  <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

</div>
            </body>
        </div>
    )
}

export default Dashboard;
