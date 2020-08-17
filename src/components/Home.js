import React from 'react';
import picture from '../images/picture.jpeg'
import '../index.css'

function Home() {
    const divStyle = {
        width: '700px', 
        height: '800px', 
        top: '50%', 
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        margin: '0px'
    }
    

    return(
        
        <div>
            <h1 className='homeh1' >Restaurant</h1>
            <img className='homeimg'src={picture}/>
            <p className = 'homep'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere, nisl sed mattis interdum, est leo facilisis arcu, hendrerit bibendum erat urna nec quam. Nunc sit amet tristique massa. Quisque nunc nisl, ornare ac justo eget, luctus gravida magna. Ut ac viverra tortor. Sed tincidunt, orci et mattis ultrices, est erat fermentum urna, interdum scelerisque orci dolor ut leo. Nam bibendum sed nisl eu ornare. Praesent semper vestibulum accumsan. Curabitur enim tortor, luctus ac sagittis non, placerat at quam. Nunc rhoncus, ipsum nec lobortis gravida, neque ipsum lobortis augue, vel lobortis purus turpis eget lectus. Fusce maximus, lacus eget molestie cursus, neque turpis imperdiet ligula, nec sagittis nisl mauris id augue. Morbi tempor felis ipsum, vel malesuada elit vehicula ac. Curabitur eu ante vel sapien ornare faucibus nec in erat. \
            Maecenas sed massa bibendum, volutpat mi eu, euismod augue. Fusce cursus posuere orci, rhoncus posuere magna suscipit vitae. Ut et viverra lectus. Donec tincidunt, massa ac aliquam sollicitudin, lacus ligula lobortis mi, eu vehicula dolor risus at enim. Sed dictum nunc tellus. Vestibulum porta dictum dolor malesuada interdum. Nullam a euismod dui. Mauris fringilla sapien vel porta lobortis. Nam sollicitudin magna a porta ultricies. Sed vel est bibendum, aliquam elit et, bibendum diam. Sed nulla orci, scelerisque vel malesuada a, pulvinar eu dui. Sed accumsan risus eros, id ultrices diam aliquam nec. Suspendisse aliquam nulla et ipsum lacinia pellentesque.</p>
        </div>
    )
}

export default Home