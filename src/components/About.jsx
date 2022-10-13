import React from 'react';
const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/Aboutus.png" alt="abt-us-img" className='w-75 mt-5'/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className='w-50' />
                            <p className="lead mb-4">Lorem ipsum dolor sit amet
                             consectetur adipisicing elit. 
                            Consequuntur doloremque minus officia qui 
                            ratione sed consequatur explicabo quod 
                            consectetur esse quis est magnam architecto 
                            voluptate, facere, harum dicta sint adipisci! 
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Fugit voluptatem vel accusantium quos. Harum
                             ratione, amet eveniet iusto iure hic dolore nostrum 
                             accusantium ex, voluptatibus voluptas facilis 
                             assumenda odio perspiciatis cum. Optio error animi ea
                              dicta accusamus repellendus blanditiis voluptate amet
                               at libero veritatis impedit rerum magni delectus, 
                               eos deleniti?</p>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default About;