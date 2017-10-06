
class Home extends React.Component {
	render() {
		return (
			<div className="main-content home">
				<h2>Front End Course Directory</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>

			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}

class Teachers extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>Teachers</h2>
        <ul>
          <li className="teacher">
            <img className="teacher-img" src="https://www.creativosonline.org/blog/wp-content/uploads/2016/06/freelance-gif.png" alt=""/>
            <h2>Teacher 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://blog.getmagic.com/wp-content/uploads/2017/05/freelancer-hire-1.jpg" alt=""/>
            <h2>Teacher 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.researchsnipers.com/wp-content/uploads/2017/02/How-to-Become-a-Successful-Pakistani-Freelancer.jpg" alt=""/>
            <h2>Teacher 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.researchsnipers.com/wp-content/uploads/2017/02/How-to-Become-a-Successful-Pakistani-Freelancer.jpg" alt=""/>
            <h2>Teacher 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.creativosonline.org/blog/wp-content/uploads/2016/06/freelance-gif.png" alt=""/>
            <h2>Teacher 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://www.creativosonline.org/blog/wp-content/uploads/2016/06/freelance-gif.png" alt=""/>
            <h2>Teacher 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad harum tenetur officiis quisquam eius maiores animi hic ipsum impedit perferendis nesciunt, rerum earum odit fugiat laborum numquam eveniet placeat?</p>
          </li>
        </ul>
       
			</div>
		);
	}
}
class Repos extends React.Component {
render() {
		const {route} = this.props;
		let CurrentList = null;
		switch (route) {

			case 'css':
				CurrentList = ['How to Make a CSS', 'HTML CSS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			case 'javascript':
				CurrentList = ['How to Make a JS', 'HTML JS'].map( (item, index) => {
					return <div><li key = {index}> {item} </li></div>
          
				});
				break;
			default: //'html'
				CurrentList = ['How to Make a Website', 'HTML Forms'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
		}
		return (

			<div className="main-content courses">
				<div className="course-header group">
					<h2>REPOS</h2>
          
					<ul className="course-nav">
						<li><a href='#/repos/html'>HTML</a></li>
						<li><a href='#/repos/css'>CSS</a></li>
						<li><a href='#/repos/javascript'>JavaScript</a></li>
					</ul>

					<ul>
						{CurrentList}
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	//  $(document).ready ()
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			//<a href="#/about">About</a>
			//<li><a href='#/repos/html'>HTML</a></li>
			console.log ( window.location.hash.substr(1) );

			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		let propsForRepos = null;
		switch (this.state.route) {
			case '/about':
				Child = About;
				break;
      case '/teachers':
				Child = Teachers;
				break;
			case '/repos':
				Child = Repos;
				break;
			case '/repos/html':
				Child = Repos;
				propsForRepos = 'html';
				break;
			case '/repos/css':
				Child = Repos;
				propsForRepos = 'css';
				break;
			case '/repos/javascript':
				Child = Repos;
				propsForRepos = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (
         <div >
            <header><span className="icn-logo"> ► ► </span>
               <ul className="main-nav">
                  <li><a href="#">Home</a></li>
                  <li><a href="#/about">About</a></li>
                  <li><a href="#/teachers">Teachers</a></li>
                  <li><a href="#/repos">Repos</a></li>
               </ul>
            </header>

	         {
	         	propsForRepos?
			         <Child route = {propsForRepos} />
		         :
			         <Child />
	         }
         </div>
		);
	}
}


      ReactDOM.render(
        <App />,
         document.getElementById("container")
     );
   

