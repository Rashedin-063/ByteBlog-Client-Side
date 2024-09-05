import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaGithub, FaFigma } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';


AOS.init();

const DeveloperTools = () => {
  const tools = [
    {
      icon: <VscVscode color='blue' />,
      name: 'Visual Studio Code',
      description:
        'Visual Studio Code is a free, lightweight code editor for web and cloud applications. It supports JavaScript, TypeScript, and Node.js, with extensions for many languages and features like IntelliSense for smarter coding.',
      link: 'https://code.visualstudio.com/',
      rating: 4.8,
      downloads: '20M+',
    },
    {
      icon: <SiPostman color='orange' />,
      name: 'Postman',
      description:
        'Postman is an API development platform for building, testing, and documenting APIs. Its tools streamline the API lifecycle with automated testing, collaboration, and mock servers for efficient development.',
      link: 'https://www.postman.com/',
      rating: 4.7,
      downloads: '15M+',
    },
    {
      icon: <FaFigma color='red' />,
      name: 'Figma',
      description:
        'Figma is a collaborative design tool for creating user interfaces. It supports real-time collaboration, vector editing, and prototyping, making it ideal for designing web and mobile interfaces with design system consistency.',
      link: 'https://www.figma.com/',
      rating: 4.9,
      downloads: '10M+',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      description:
        'GitHub is a platform for version control and collaboration, supporting both public and private repositories. It integrates with Git and offers tools for automation, project management, and reviewing code efficiently.',
      link: 'https://github.com/',
      rating: 4.9,
      downloads: '30M+',
    },
  ];

  return (
    <section className='py-4'>
      <div className=' px-4'>
        <div className='text-center'>
          <div
            data-aos='flip-left'
            data-aos-duration='2000'
            className='text-3xl font-bold  mb-4'
          >
            Top Developer Tools & Resources
          </div>
          <p className='mb-8'>
            Discover essential tools and resources to enhance your web
            development workflow.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 mt-10'>
          {tools.map((tool, index) => (
            <div
              key={index}
              className='p-6  drop-shadow-sm border-2 border-b-4  border-royal-amethyst mx-auto border-dashed rounded-xl '
            >
              <div className='text-2xl font-semibold mb-4 flex items-center gap-2'>
                <span>{tool.icon}</span>
                <span> {tool.name}</span>
              </div>
              <p className=' mb-4'>{tool.description}</p>
              <div className='flex justify-between mb-3'>
                <p>
                  Developer Rating:
                  <span className='font-extrabold ml-2'>{tool.rating}</span>
                </p>
                <p>
                  Total Download :
                  <span className='font-extrabold ml-2'>{tool.downloads}</span>
                </p>
              </div>
              <a
                href={tool.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-golden-saffron 
                hover:underline hover:font-semibold'
              >
                Visit {tool.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
