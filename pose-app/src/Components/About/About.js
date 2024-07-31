import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>Learn more about us on this page.</p>
      
    <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <a href="#" class="block w-full h-full">
            <img alt="blog photo" src="/assets/images/tom1.jpg" class="object-cover w-full max-h-40"/>
            <div class="w-full p-4 bg-white dark:bg-gray-800">
                <p class="font-medium text-indigo-500 text-md">
                    Article
                </p>
                <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                    Supercharged !
                </p>
                <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                    The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on...
                </p>
                <div class="flex items-center mt-4">
                    <a href="#" class="relative block">
                        <img alt="profil" src="/assets/images/tom1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                    <div class="flex flex-col justify-between ml-4 text-sm">
                        <p class="text-gray-800 dark:text-white">
                            Jean Jacques
                        </p>
                        <p class="text-gray-400 dark:text-gray-300">
                            20 mars 2029 - 6 min read
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>

    </div>
  );
};

export default About;
