import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home'
import Contact from './Contact'
import Menu from './Menu'

function Nav() {

    function handleClick(id) {
        const content = document.querySelector('#content');
        if (id === 'home'){
            
            content.style.cssText = 'width: 700px; height:700px; align-items: flex-start; \
            justify-content: center; top: 50%;'
            ReactDom.render(<Home />, document.getElementById('content'))
        } else if (id === 'menu'){
            content.style.cssText = 'width:750px; height: 850px; justify-content: space-around; \
            align-items: center; top: 53%;'
            ReactDom.render(<Menu />, document.getElementById('content'))
        } else if (id === 'contact'){
            content.style.cssText = 'width: 700px; height: 800px; top: 50%;\
            align-items: flex-start; justify-content: center;'
            ReactDom.render(<Contact />, document.getElementById('content'))
        }
    }
    return(
        <nav>
            <a id = 'home' className='nav' onClick={() => handleClick('home')}>Home</a>
            <a id = 'menu' className='nav' onClick={() => handleClick('menu')}>Menu</a>
            <a id = 'contact' className='nav' onClick={() => handleClick('contact')}>Contact</a>
        </nav>
    )
}

export default Nav