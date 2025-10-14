import React , {useState , useEffect} from 'react'

const ResizeComponent = () => {

    const [windowWidth , setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {

        const handleResize = () => setWindowWidth(window.innerWidth);

        console.log('event listener added')
        window.addEventListener('resize' , handleResize);


        return () => {
            console.log('event listener remove')
            window.removeEventListener('resize' , handleResize);
        };

    }, []);

    // it will run only on first render

  return (
    <div>
      <h1>window width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent
