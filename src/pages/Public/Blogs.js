import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5 p-5'>
            <h2 className='text-center text-3xl'>Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-5'>
                <div className="card max-h-72 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                        <ul>
                            <li>1. By organizing React code in components.</li>
                            <li>2. By avoiding code duplication/repetition.</li>
                            <li>3. By creating custom hooks.</li>
                            <li>4. By lazy loading images.</li>
                            <li>5. By using the best existing technique for any code.</li>
                        </ul>
                    </div>
                </div>

                <div className="card max-h-72 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <ul>
                            <li>1. Local State: useState, useReducer hook</li>
                            <li>2. Global State: Context API, Recoil, Jotai</li>
                            <li>3. Server State: SWR, React Query</li>
                            <li>4. URL State: useHistory, useLocation, useRouter, useParams</li>
                        </ul>
                    </div>
                </div>
                <div className="card max-h-72 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a technique in javascript, Which is used to add methods and properties in objects. It is a technique by which an object can inherit the properties and methods of another object.</p>
                    </div>
                </div>

                <div className="card max-h-72 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Why you do not set the state directly in React.</h2>
                        <p>As we know, React use the diff algorithms. It compares the new updated DOM with the old DOM. That is why we shouldn't update the state directly, so we can have two different object references in memory.Then react will figure out what is changed in Virtual DOM and based on that it will update the real DOM accordingly.</p>
                    </div>
                </div>
                <div className="card max-h-72 bg-base-100 shadow-xl">
                    <div className="card-body overflow-x-auto overflow-y-auto">
                        <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                        <pre>
                            {`
const findProduct = productName => {
const matchedProduct = products.find(product => product.name === productName);
console.log(matchedProduct);
}

const products = [{},{},{},...,{}];
const name = 'productName';
console.log(findProduct(name));
`}
                        </pre>
                    </div>
                </div>

                <div className="card max-h-72 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>Unit testing is a technique, which individual modules are tested to determine if there are any issues by the developer himself.
                            <br /><br />
                            Unit testing ensures that all code meets quality standards before it's deployed.Unit tests are also especially useful when it comes to refactoring or re-writing a piece a code.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;