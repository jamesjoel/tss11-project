import React from 'react'

const RecentComment = () => {
  return (
    <div className="row">
                    {/* <!-- .col --> */}
                    <div className="col-md-12 col-lg-8 col-sm-12">
                        <div className="card white-box p-0">
                            <div className="card-body">
                                <h3 className="box-title mb-0">Recent Comments</h3>
                            </div>
                            <div className="comment-widgets">
                                {/* <!-- Comment Row --> */}
                                <div className="d-flex flex-row comment-row p-3 mt-0">
                                    <div className="p-2"><img src="/assets/plugins/images/users/varun.jpg" alt="user" width="50" className="rounded-circle"/></div>
                                    <div className="comment-text ps-2 ps-md-3 w-100">
                                        <h5 className="font-medium">James Anderson</h5>
                                        <span className="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries. </span>
                                        <div className="comment-footer d-md-flex align-items-center">
                                             <span className="badge bg-primary rounded">Pending</span>
                                             
                                            <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">April 14, 2021</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Comment Row --> */}
                                <div className="d-flex flex-row comment-row p-3">
                                    <div className="p-2"><img src="/assets/plugins/images/users/genu.jpg" alt="user" width="50" className="rounded-circle"/></div>
                                    <div className="comment-text ps-2 ps-md-3 active w-100">
                                        <h5 className="font-medium">Michael Jorden</h5>
                                        <span className="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries. </span>
                                        <div className="comment-footer d-md-flex align-items-center">

                                            <span className="badge bg-success rounded">Approved</span>
                                            
                                            <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">April 14, 2021</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Comment Row --> */}
                                <div className="d-flex flex-row comment-row p-3">
                                    <div className="p-2"><img src="/assets/plugins/images/users/ritesh.jpg" alt="user" width="50" className="rounded-circle"/></div>
                                    <div className="comment-text ps-2 ps-md-3 w-100">
                                        <h5 className="font-medium">Johnathan Doeting</h5>
                                        <span className="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries. </span>
                                        <div className="comment-footer d-md-flex align-items-center">

                                            <span className="badge rounded bg-danger">Rejected</span>
                                            
                                            <div className="text-muted fs-2 ms-auto mt-2 mt-md-0">April 14, 2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="card white-box p-0">
                            <div className="card-heading">
                                <h3 className="box-title mb-0">Chat Listing</h3>
                            </div>
                            <div className="card-body">
                                <ul className="chatonline">
                                    <li>
                                        <div className="call-chat">
                                            <button className="btn btn-success text-white btn-circle btn" type="button">
                                                <i className="fas fa-phone"></i>
                                            </button>
                                            <button className="btn btn-info btn-circle btn" type="button">
                                                <i className="far fa-comments text-white"></i>
                                            </button>
                                        </div>
                                        <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                src="/assets/plugins/images/users/varun.jpg" alt="user-img" className="img-circle"/>
                                            <div className="ms-2">
                                                <span className="text-dark">Varun Dhavan <small
                                                        className="d-block text-success d-block">online</small></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="call-chat">
                                            <button className="btn btn-success text-white btn-circle btn" type="button">
                                                <i className="fas fa-phone"></i>
                                            </button>
                                            <button className="btn btn-info btn-circle btn" type="button">
                                                <i className="far fa-comments text-white"></i>
                                            </button>
                                        </div>
                                        <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                src="/assets/plugins/images/users/genu.jpg" alt="user-img" className="img-circle"/>
                                            <div className="ms-2">
                                                <span className="text-dark">Genelia
                                                    Deshmukh <small className="d-block text-warning">Away</small></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="call-chat">
                                            <button className="btn btn-success text-white btn-circle btn" type="button">
                                                <i className="fas fa-phone"></i>
                                            </button>
                                            <button className="btn btn-info btn-circle btn" type="button">
                                                <i className="far fa-comments text-white"></i>
                                            </button>
                                        </div>
                                        <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                src="/assets/plugins/images/users/ritesh.jpg" alt="user-img" className="img-circle"/>
                                            <div className="ms-2">
                                                <span className="text-dark">Ritesh
                                                    Deshmukh <small className="d-block text-danger">Busy</small></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="call-chat">
                                            <button className="btn btn-success text-white btn-circle btn" type="button">
                                                <i className="fas fa-phone"></i>
                                            </button>
                                            <button className="btn btn-info btn-circle btn" type="button">
                                                <i className="far fa-comments text-white"></i>
                                            </button>
                                        </div>
                                        <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                src="/assets/plugins/images/users/arijit.jpg" alt="user-img" className="img-circle"/>
                                            <div className="ms-2">
                                                <span className="text-dark">Arijit
                                                    Sinh <small className="d-block text-muted">Offline</small></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="call-chat">
                                            <button className="btn btn-success text-white btn-circle btn" type="button">
                                                <i className="fas fa-phone"></i>
                                            </button>
                                            <button className="btn btn-info btn-circle btn" type="button">
                                                <i className="far fa-comments text-white"></i>
                                            </button>
                                        </div>
                                        <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                src="/assets/plugins/images/users/govinda.jpg" alt="user-img"
                                                className="img-circle"/>
                                            <div className="ms-2">
                                                <span className="text-dark">Govinda
                                                    Star <small className="d-block text-success">online</small></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="call-chat">
                                            <button className="btn btn-success text-white btn-circle btn" type="button">
                                                <i className="fas fa-phone"></i>
                                            </button>
                                            <button className="btn btn-info btn-circle btn" type="button">
                                                <i className="far fa-comments text-white"></i>
                                            </button>
                                        </div>
                                        <a href="javascript:void(0)" className="d-flex align-items-center"><img
                                                src="/assets/plugins/images/users/hritik.jpg" alt="user-img" className="img-circle"/>
                                            <div className="ms-2">
                                                <span className="text-dark">John
                                                    Abraham<small className="d-block text-success">online</small></span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
  )
}

export default RecentComment