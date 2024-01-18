import React from 'react'

const ProductSales = () => {
  return (
    <div className="page-wrapper">
            
            {/* <!-- Bread crumb and right sidebar toggle --> */}
            
            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 className="page-title">Dashboard</h4>
                    </div>
                    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                        <div className="d-md-flex">
                            <ol className="breadcrumb ms-auto">
                                <li><a href="#" className="fw-normal">Dashboard</a></li>
                            </ol>
                            <a href="https://www.wrappixel.com/templates/ampleadmin/" target="_blank"
                                className="btn btn-danger  d-none d-md-block pull-right ms-3 hidden-xs hidden-sm waves-effect waves-light text-white">Upgrade
                                to Pro</a>
                        </div>
                    </div>
                </div>
                
            </div>
           
            {/* <!-- Container fluid  --> */}
            
            <div className="container-fluid">
                
                {/* <!-- Three charts --> */}
                
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Total Visit</h3>
                            <ul className="list-inline two-part d-flex align-items-center mb-0">
                                <li>
                                    <div id="sparklinedash"><canvas width="67" height="30"
                                            style={{display: "inline-block", width: "67px" ,height: "30px", verticalAlign: "top"}}></canvas>
                                    </div>
                                </li>
                                <li className="ms-auto"><span className="counter text-success">659</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Total Page Views</h3>
                            <ul className="list-inline two-part d-flex align-items-center mb-0">
                                <li>
                                    <div id="sparklinedash2"><canvas width="67" height="30"
                                            style={{display: "inline-block", width: "67px" ,height: "30px", verticalAlign: "top"}}></canvas>
                                    </div>
                                </li>
                                <li className="ms-auto"><span className="counter text-purple">869</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Unique Visitor</h3>
                            <ul className="list-inline two-part d-flex align-items-center mb-0">
                                <li>
                                    <div id="sparklinedash3"><canvas width="67" height="30"
                                            style={{display: "inline-block", width: "67px" ,height: "30px", verticalAlign: "top"}}></canvas>
                                    </div>
                                </li>
                                <li className="ms-auto"><span className="counter text-info">911</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* <!-- PRODUCTS YEARLY SALES --> */}
                
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="white-box">
                            <h3 className="box-title">Products Yearly Sales</h3>
                            <div className="d-md-flex">
                                <ul className="list-inline d-flex ms-auto">
                                    <li className="ps-3">
                                        <h5><i className="fa fa-circle me-1 text-info"></i>Mac</h5>
                                    </li>
                                    <li className="ps-3">
                                        <h5><i className="fa fa-circle me-1 text-inverse"></i>Windows</h5>
                                    </li>
                                </ul>
                            </div>
                            <div id="ct-visits" style={{height: "405px"}}>
                                <div className="chartist-tooltip" style={{top: "-17px" ,left: "-12px"}}><span
                                        className="chartist-tooltip-value">6</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <!-- RECENT SALES --> */}
                
                
              
                
            </div>
           
            {/* <!-- footer --> */}
            
            
            
            {/* <!-- End footer --> */}
            
        </div>
  )
}

export default ProductSales