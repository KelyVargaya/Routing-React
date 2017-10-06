
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
            <p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
          </li>
          <li className="teacher">
            <img className="teacher-img" src="https://blog.getmagic.com/wp-content/uploads/2017/05/freelancer-hire-1.jpg" alt=""/>
            <h2>Teacher 2</h2>
            <p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
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

		let HTMLrepos = [{
			title: "How to Make a Website",
			description: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
			img_html: "https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png",
			
		},
		{
			title: "HTML FORMS",
			description: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
			img_html: "https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png",
			
		},
		{
			title: "HTML Video and Audio",
			description: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
			img_html: "https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png",
			
		},
		{
			title: "SVG Basics",
			description: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density.",
			img_html: "https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png",
			
		},
		{
			title: "Responsive Images",
			description: "Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible.",
			img_html: "https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png",
			
		},
		{
			title: "Introduction to HTML and CSS",
			description: "Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like.",
			img_html: "https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png",
			
		},
		];

		let CSSrepos = [{
			title: "CSS Basic",
			description: "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.",
			img_css: "https://achievement-images.teamtreehouse.com/badges_css_basics_stage6.png",
			
		},
		{
			title: "CSS Selectors",
			description: "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements.",
			img_css: "https://achievement-images.teamtreehouse.com/badges_css_selectors_stage01.png",
			
		},
		
		{
			title: "Responsive Layouts",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_css: "https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage3.png",
			
		},
		{
			title: "CSS Flexbox Layout",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_css: "https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage1.png",
			
		},
		{
			title: "CSS Transitions and Transforms",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_css: "https://achievement-images.teamtreehouse.com/css-transitions-and-transforms-badge-02.png",
			
		},
		{
			title: "Bootstrap 4 Basics",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_css: "https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage01.png",
			
		}

		];

		let JSrepos = [{
			title: "JAVASCRIPT Basic",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_js: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png",
			
		},
		{
			title: "JavaScript Loops, Arrays and Objects",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_js: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",
			
		},
		
		{
			title: "jQuery Basics",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_js: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",
		
		},
		{
			title: "jQuery Basics",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_js: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",
		
		},
		{
			title: "jQuery Basics",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate non quia, nulla dolorem reprehenderit laboriosam officiis nemo provident odit, aspernatur animi! Accusantium iste nobis neque sit minus dicta, quisquam magnam.",
			img_js: "https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",
		
		}
		];

		
		let CurrentList = null;

		switch (route) {

			case 'css':
				CurrentList = CSSrepos.map( (item, index) => {
					return <div id="content">
							<li key = {index} className="course media group" id="repos">
									<img className= "course-img" src={item.img_css} alt=""/>
								<div >
									<h2>{item.title}</h2><br/><br/><br/>
									<p>{item.description} </p>
								</div>
						 	</li>
						 </div>
				});
				break;
			case 'javascript':
				CurrentList = JSrepos.map( (item, index) => {
					return <div id="content">
							<li key = {index} className="course media group" id="repos">
								<img className= "course-img" src={item.img_js} alt=""/>
								<div>
									<h2>{item.title}</h2><br/><br/><br/>
									<p>{item.description} </p>
								</div>
						 	</li>
						 </div>
          
				});
				break;
			default: //'html'
				CurrentList = HTMLrepos.map( (item, index) => {
					return <div id="content">
							<li key = {index} className="course media group" id="repos">
								<img className= "course-img" src={item.img_html} alt=""/>
								<div>
									<h2>{item.title}</h2><br/><br/><br/>
									<p>{item.description} </p>
								</div>
						 </li>
					</div>
				});
				break;
		}
		return (

			<div className="main-content courses">
				<div className="course-header group">							
					<h2>Courses Available</h2>
					<ul className="course-nav">
						<li><a href='#/repos/html'className="active">HTML</a></li>
						<li><a href='#/repos/css'>CSS</a></li>
						<li><a href='#/repos/javascript'>JavaScript</a></li>
					</ul>
					</div>
					<div id="contenidos">
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
			 
            <header><span className="icn-logo"><i className="material-icons">code</i> </span>
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
   

