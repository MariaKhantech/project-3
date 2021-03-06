import React, { Component } from 'react';
import forestBackground from './greenforest.jpg';
import { Parallax, Background } from 'react-parallax';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import './style.scss';

export default class RainforestInfo extends Component {

	state = {
		isPlaying: false,
		audioTracks:[]
	}

	componentDidMount () {

		let audioArray = [
			new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/forest-fires.ed367291-bbcf-4606-8d61-11399fc93bb3.mp3'),
			new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/amazonforestfires.9fb9a29e-8580-4ee5-bb06-8b1749f3fcad.mp3'),
			new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/deforestation-orangutans.03d2a93d-8964-44df-bbe1-cc34dddb86f7.mp3'),
			new Audio('https://envirabucket215241-dev.s3.amazonaws.com/polly/americandeforestation.c5ae68b7-3208-4869-9d2c-f6b2c45097c8.mp3')
		];

		this.setState({audioTracks:audioArray})
	}

	//plays the audio
	playAudio(index) {
			this.state.audioTracks[index].play();
			this.setState({isPlaying: true});
	}

	//stops audio//
	pauseAudio(index){
		this.state.audioTracks[index].pause();
		this.setState({ isPlaying: false });
	}

	render() {
		const particles = (
			<Particles
				params={{
					particles: {
						number: {
							value: 75,
							density: {
								enable: false
							}
						},
						size: {
							value: 5,
							random: true,
							anim: {
								speed: 8,
								size_min: 0.3
							}
						},
						line_linked: {
							enable: false
						},
						move: {
							random: true,
							speed: 1,
							direction: 'top',
							out_mode: 'out'
						}
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'bubble'
							},
							onclick: {
								enable: true,
								mode: 'repulse'
							}
						},
						modes: {
							bubble: {
								distance: 250,
								duration: 2,
								size: 0,
								opacity: 0
							},
							repulse: {
								distance: 400,
								duration: 4
							}
						}
					}
				}}
			/>
		);

		const videoStyle = {
			position: 'relative',
			inset: '0px',
			width: '100%',
			height: '1080px',
			maxWidth: 'none',
			maxHeight: 'none',
			margin: '-250px 0px 0px'
		};
		console.log(this.state.audioTracks)

		return (
			<div className="RainforestWrapper">
				<div className="container-fluid entire-container">
					{/* jumbotron rainforst */}
					<div
						className="jumbotron "
						id="jumbotron-rain"
						style={{ backgroundImage: `url(${forestBackground})` }}
					>
						<h1 className="display-4 text-white text-center">Forest fires & Deforestation</h1>
						<p className="lead text-white text-center">The effects of climate change and deforestation</p>
					</div>

					{/* forest fires */}

					<section class="under-rain">
						<Fade left>
						<div class="row mx-auto">
							<div class="col-md-6">
								<div class="mo-fire">
									<svg
										version="1.1"
										id="Layer_1"
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="125px"
										height="189.864px"
										viewBox="0 0 125 189.864"
										enable-background="new 0 0 125 189.864"
									>
										<path
											class="flame-main"
											fill="#F36E21"
											d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465
                                        c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54
                                        c6.806,41.899,16.831,45.301,6.088,53.985"
										/>
										<path
											class="flame-main one"
											fill="#F6891F"
											d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123
                                        c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"
										/>
										<path
											class="flame-main two"
											fill="#FFD04A"
											d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998
                                        C84.858,184.21,125.705,150.905,81.657,79.192z"
										/>
										<path
											class="flame-main three"
											fill="#FDBA16"
											d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79
                                        C95.354,106.319,99.92,114.108,99.92,101.754z"
										/>
										<path
											class="flame-main four"
											fill="#F36E21"
											d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041
                                        S134.387,164.603,103.143,105.917z"
										/>
										<path
											class="flame-main five"
											fill="#FDBA16"
											d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"
										/>
										<path
											class="flame"
											fill="#F36E21"
											d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"
										/>
										<path
											class="flame one"
											fill="#F36E21"
											d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"
										/>
										<path
											class="flame two"
											fill="#F36E21"
											d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"
										/>
									</svg>
								</div>
							</div>
						</div>
						</Fade>

						<Fade left>
						<div class="row mx-auto" style={{ marginTop: '-1.5rem' }}>
							
							<div class="card forest-fire-card mb-3 mx-auto" style={{ maxWidth: '1000px' }}>
								<div class="row">
									<div class="col-md-4">
										<img
											src="https://images.unsplash.com/photo-1553217420-13f2c0ac0002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
											class="card-img"
											alt="forest-floors burning"
										/>
									</div>
									<div class="col-md-8">
										<div class="card-body forest-fire-card ">
											<h2 class="card-title text-white ">Forest Fires</h2>
											<p class="card-text text-white">
												For the United States as a country, the total number of acres burned by
												wildfires and the average acres burned per fire has been ticking up in
												recent decades. From 2000 to 2018, wildfires burned more than twice as
												much land area per year than those from 1985 to 1999.
											</p>

											<p class="text-white">
												In Alaska, temperatures are rising twice as fast as the rest of the
												country. Wildfires have increased in frequency and size. Four of the ten
												most considerable fire years on record have occurred in the past 15
												years, burning over 2 million acres in each large fire.
											</p>

											<p class="text-white">
												As the climate continues to warm, wildfires will increase over the next
												couple of decades. We must take swift action to improve forest and fire
												management practices and reduce our reliance on fossil fuels to limit
												the risks of worsening wildfires and move towards renewable energy. On a
												really hot day, when drought is at it's peak, something as small as a
												spark from a train car's wheel striking the track can ignite a raging
												wildfire. Fires also occur naturally, ignited by heat from the sun or a
												lightning strike.
											</p>
											<p class="card-text">
												<a
													role="button"
													onClick={() => this.state.isPlaying ? this.pauseAudio(0) : this.playAudio(0)}
													class={`btn btn-outline-danger float-right text-danger  ${this.state.isPlaying ? "btn-danger" : ""}`}
												a>
													<i class="fas fa-robot" /></a>
											
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						</Fade>
						<Fade right>
						<div class="row mx-auto">

							<div class="card mb-3 forest-fire-card mt-5 mx-auto" style={{ maxWidth: '1000px' }}>
								<div class="row ">
									<div class="col-md-5 ">
										<div class="card-body forest-fire-card ">
											<h2 class="card-title text-white">Amazon Rainforest Fires</h2>
											<p class="card-text text-white">
												Thousands of fires are burning across a southern swath of the Amazon.
												They emit smoke and soot, blanketing those who live downwind with thick,
												dirty air, hurting wildlife in their path, and destroying one of the
												most crucial carbon storehouses left on the planet.
											</p>

											<p class="text-white ">
												About 76,000 fires were burning across the Brazilian Amazon at last
												official count, an increase of over 80 percent over the same period the
												previous year, according to data from Brazil’s National Institute for
												Space Research (INPE). Since then, even more, fires have appeared in the
												satellite imagery that scientists use to assess the extent and intensity
												of burning. They expect the number to increase over the coming months as
												the dry season intensifies.
											</p>
											<button
													type="button"
													onClick={() => this.state.isPlaying ? this.pauseAudio(1) : this.playAudio(1)}
													class={`btn btn-outline-danger float-right text-danger ${this.state.isPlaying ? "btn-danger" : ""}`}>
													<i class="fas fa-robot" />
												</button>
										</div>
									</div>

									<div class="col-md-4">
										<img
											src="https://images.unsplash.com/photo-1594984820817-d8317f74930c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
											class="card-img "
											alt="picture of a burning forest and firemen"
										/>
									</div>
								</div>
							</div>
						</div>
						</Fade>
					</section>

					<Parallax bgImage={`${forestBackground}`} strength={500}>
					<div style={{ height: 600 }}>
							<iframe
								width="100%"
								height="auto"
								src="https://www.youtube.com/embed/icgEDDrlR28?autohide=1&amp;rel=0&amp;autoplay=0&amp;playsinline=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;disablekb=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen='1'
								style={videoStyle}
							/>
						</div>
					</Parallax>
					<Fade bottom>
					<Parallax strength={500}>
						<div style={{ height: '100%' }}>
						
							<div class="row mb-5">
							
							<div class="col-md-6 ">
								<div class="card mt-5 mx-auto border-0" style={{ width: '25rem' }}>
									<div class="card-body forest-fire-card">
										<h3 class="card-title text-white text-center">Deforestation & Orangutans</h3>
										<div
											id="carouselExampleFade"
											class="carousel slide carousel-fade"
											data-ride="carousel"
										>
											<div class="carousel-inner">
												<div class="carousel-item active">
													<img
														src="../assets/imgs/rainforest/orangutans/babyorangutan.jpg"
														class="d-block w-100 baby-orang"
														alt="..."
													/>
												</div>
												<div class="carousel-item">
													<img
														src="../assets/imgs/rainforest/orangutans/captiveorangutans.jpg"
														class="d-block w-100"
														alt="..."
													/>
												</div>
												<div class="carousel-item">
													<img
														src="../assets/imgs/rainforest/orangutans/motherorangutan.jpg"
														class="d-block w-100"
														alt="..."
													/>
												</div>
											</div>
											<a
												class="carousel-control-prev"
												href="#carouselExampleFade"
												role="button"
												data-slide="prev"
											>
												<span class="carousel-control-prev-icon" aria-hidden="true" />
												<span class="sr-only">Previous</span>
											</a>
											<a
												class="carousel-control-next"
												href="#carouselExampleFade"
												role="button"
												data-slide="next"
											>
												<span class="carousel-control-next-icon" aria-hidden="true" />
												<span class="sr-only">Next</span>
											</a>
										</div>
										<h5 class="card-subtitle mb-2 mt-2 text-muted text-center">Asia</h5>
										<p class="card-text text-white">
										Orangutans are known for their keen intelligence. The United Nations Environmental Program predicts that they will be eliminated in 2 decades if the deforestation continues on its trend. The large demand for palm oil is its main cause. Orangutans are also killed illegally for wildlife trade. The babies sold off as pets. 
										</p>
												<button
													type="button"
													onClick={() => this.state.isPlaying ? this.pauseAudio(2) : this.playAudio(2)}
													class={`btn btn-outline-danger float-right text-danger ${this.state.isPlaying ? "btn-danger" : ""}`}
												>
													<i class="fas fa-robot" />
												</button>
									</div>
								</div>
							</div>
							
								<div class="col-md-5">
								<div className="card forest-fire-card border-0 mt-5 ml-5" style={{width: "18rem;"}}>
							<div className="card-body">
							<hr className="bg-white"/>
								<h3 className="card-title text-white text-center mb-2">Envira</h3>
								<hr className="bg-white"/>
								<h6 className="card-subtitle mb-2 text-white text-center">Questions you can ask Envira</h6>
								<li className="card-text text-white">How many orangutans are left in the world?</li>
								<li className="text-white">How many animals are at risk due to deforestation?</li>
								<li className="text-white">What can we do to help with the Amazon or deforestation?</li>
								<li className="text-white">What was the largest wildfire to date?</li>
								<li className="text-white">What is your favorite Amazon animal?</li>
								<li className="text-white">What do you feel about deforestation?</li>
								<br/>
								<p class="font-weight-bold text-white">Click on the image below click on the ashes.</p>
							</div>
							</div>
								</div>
							</div>
						
						</div>
					
					</Parallax>
					</Fade>
					<Parallax
						bgImage={'https://cdn.pixabay.com/photo/2019/06/14/09/05/ape-4273153_960_720.jpg'}
						strength={500}
					>
						{particles}
					</Parallax>
					<Fade bottom>
					<Parallax strength={500}>
						<div style={{ height: '800px', paddingBottom: "100px" }}>
							<div class="row justify-content-around mb-5 forest-fire-card ">
								<div class="col-5 4 sm-12">
									<div class="card mt-5 mx-auto mb-5 border-0" style={{ width: '30rem' }}>
									<img src="../assets/imgs/rainforest/deforestation.jpg" class="card-img-top" alt="forest cut down"/>
										<div class="card-body forest-fire-card ">
											<h3 class="card-title text-white text-center">American Deforestation</h3>
											<h5 class="card-subtitle mb-2 text-muted text-center">
												America
												
											</h5>
											<p class="card-text text-white text-center">
											United States deforestation has destroyed virgin forests
											by 75% since the 1600's. In 2015, 33.9% of the total land area were forests, including primary, naturally regenerating, and other
											woodlands. One of the biggest problems in America is illegal logging. Illegal logging has caused catastrophic fires. More than 83 million acres have been lost to wildfires.
											</p>
											<button
													type="button"
													onClick={() => this.state.isPlaying ? this.pauseAudio(3) : this.playAudio(3)}
													class={`btn btn-outline-danger float-right text-danger ${this.state.isPlaying ? "btn-danger" : ""}`}
												>
													<i class="fas fa-robot" />
												</button>
										</div>
									</div>
								</div>
								<div class="col-5 sm-12 ">
									<iframe
										class="first-chart mt-5"
										width="600"
										height="600px"
										frameborder="0"
										src="https://www.globalforestwatch.org/embed/widget/treeLossTsc/country/USA?treeLossTsc=eyJpbnRlcmFjdGlvbiI6e30sImhpZ2hsaWdodGVkIjpmYWxzZX0="
									/>
								</div>
							</div>
						</div>
					</Parallax>
				</Fade>
				</div>
			</div>
		);
	}
}

// export default RainforestInfo;
