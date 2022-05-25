import React from 'react';

const Portfolio = () => {
    return (
        <div className='m-5 p-5 shadow-2xl rounded-box'>
            <div className='flex mx-10 mt-10'>
                <div className='flex-1 text-left'>
                    <p><span className='font-bold'>Email:</span> azmainafridi@gmail.com</p>
                    <p><span className='font-bold'>Contact:</span> +88 01765388951</p>
                    <p><span className='font-bold'>Address:</span> Rajshahi-6000, Bangladesh</p>
                    <p><span className='font-bold'>Github:</span> <a href="https://github.com/Azmain951" target='_blank'>https://github.com/Azmain951</a></p>
                    <p><span className='font-bold'>LinkedIn:</span> <a href="https://www.linkedin.com/in/azmain951" target="_blank">https://www.linkedin.com/in/azmain951</a></p>
                </div>
                <div className='flex-1'>
                    <h2 className='text-right text-4xl'>Ahmed-Al-Azmain</h2>
                    <h5 className='text-right text-2xl'>Front End Web Developer</h5>
                </div>
            </div>
            <div className="divider px-10"></div>
            <div className='flex justify-between py-5'>
                <div className='ml-10'>
                    <h2 className='text-2xl mb-3 uppercase'>Technical Skills</h2>
                    <p><span className='font-bold'>Expertise:</span> JavaScript, ES6, REST API, React, React Router, React Hooks, HTML5, CSS3, Bootstrap-5, SPA</p>
                    <p><span className='font-bold'>Comfortable:</span> Node.js, Express.js, MongoDB, C, C++, Firebase, Tailwind CSS, MySQL</p>
                    <p><span className='font-bold'>Familiar:</span> Python, Java, Assembly Language, Data Structure</p>
                    <p><span className='font-bold'>Tools:</span> VS Code, Github, Heroku, Netlify, Figma, Chrome Dev Tools</p>
                </div>
                <div className='mr-10'>
                    <h2 className='text-2xl mb-3 uppercase'>Educational Background</h2>
                    <p>Bachelor of Science: <span className='font-bold'>Computer Science and Engineering</span></p>
                    <p><span className='font-bold'>Varendra University</span> - kazla, Rajshahi-6204</p>
                    <p>Duration: <span className='font-bold'>January, 2018 - May, 2022</span></p>
                    <p>CGPA: <span className='font-bold'>3.98 out of 4.00</span></p>
                </div>
            </div>
            <div className="divider px-10"></div>
            <div className='mb-10'>
                <h2 className='text-2xl text-center uppercase mb-3'>Top Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Fruit Basket</h2>
                            <p className='capitalize'>Web based fruit warehouse management system</p>
                            <a className="btn btn-primary btn-xs text-white" href='https://fruit-basket-523c2.web.app/' target='_blank'>Visit Website</a>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Exam Prep</h2>
                            <p className='capitalize'>Web based exam preparation website</p>
                            <a className="btn btn-primary btn-xs text-white" href='https://examprep-1edff.web.app/' target='_blank'>Visit Website</a>

                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Personal Gym Trainer</h2>
                            <p className='capitalize'>Web based website for personal gym trainer</p>
                            <a className="btn btn-primary btn-xs text-white" href='https://personal-gym-trainer.web.app/' target='_blank'>Visit Website</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;