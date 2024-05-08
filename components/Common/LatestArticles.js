import React from 'react';
import Link from 'next/link';

const LatestArticles = () => {
    return (
		<>
			<div className="blog-area">
                <div className="container">
                    <div className="section-title">
                        <span>Read Our Latest Articles</span>
                        <h2>Latest From Our Blog Post For Business Technology </h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/insta-document-management">
                                        <a><img src="/images/insta.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <a>Admin</a></span>
                                    <h3>
                                        <Link href="/insta-document-management">
                                            <a>InstaFile Document Management</a>
                                        </Link>
                                    </h3>
                                    <p>InstaFile is a unified solution that manages all your organization’s documents regardless of location or media.</p>

                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> October 14, 2021</li>
                                        <li><i className="ri-price-tag-3-line"></i> <a>DMS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/open-source-software-services">
                                        <a><img src="/images/complete1_37f69b432f.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <a>Admin</a></span>
                                    <h3>
                                        <Link href="/open-source-software-services">
                                            <a>Open Source Software Services</a>
                                        </Link>
                                    </h3>
                                    <p>More and more organizations are deploying Open Source Software (OSS)as part of their IT strategy to gain competitive.</p>
                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> September 15, 2023</li>
                                        <li><i className="ri-price-tag-3-line"></i> <a>ERP, CRM</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/what-is-mobile-device-management">
                                        <a><img src="/images/mdm.jpg" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <a>Admin</a></span>
                                    <h3>
                                        <Link href="/what-is-mobile-device-management">
                                            <a>What is Mobile Device Management</a>
                                        </Link>
                                    </h3>
                                    <p>Mobile device management (MDM) is the administrative area dealing with deploying, securing, monitoring, integrating and managing mobile devices.</p>
                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> Janaury 16, 2024</li>
                                        <li><i className="ri-price-tag-3-line"></i> <a>Mobile, Apps, MDM</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
		</>
    );
}

export default LatestArticles;