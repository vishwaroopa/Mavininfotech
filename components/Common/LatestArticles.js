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
                                    <Link href="/blog-details">
                                        <a><img src="/images/insta.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <Link href="/author"><a>Admin</a></Link></span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>InstaFile Document Management</a>
                                        </Link>
                                    </h3>
                                    <p>InstaFile is a unified solution that manages all your organization’s documents regardless of location or media.</p>

                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> October 14, 2021</li>
                                        <li><i className="ri-price-tag-3-line"></i> <Link href="/tags"><a>DMS</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src="/images/complete1_37f69b432f.png" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <Link href="/author"><a>Admin</a></Link></span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Open Source Software Services</a>
                                        </Link>
                                    </h3>
                                    <p>More and more organizations are deploying Open Source Software (OSS)as part of their IT strategy to gain competitive.</p>
                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> September 15, 2023</li>
                                        <li><i className="ri-price-tag-3-line"></i> <Link href="/tags"><a>ERP, CRM</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src="/images/mdm.jpg" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <Link href="/author"><a>Admin</a></Link></span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>What is Mobile Device Management</a>
                                        </Link>
                                    </h3>
                                    <p>Mobile device management (MDM) is the administrative area dealing with deploying, securing, monitoring, integrating and managing mobile devices.</p>
                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> Janaury 16, 2024</li>
                                        <li><i className="ri-price-tag-3-line"></i> <Link href="/tags"><a>Mobile, Apps, MDM</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view-more-btn">
                        <Link href="/blog">
                            <a className="default-btn">View More</a>
                        </Link>
                    </div>
                </div>
            </div>
		</>
    );
}

export default LatestArticles;