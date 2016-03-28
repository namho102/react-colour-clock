import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			getTime(type) {
				let date = new Date();
				switch (type) {
					case 'hours': return this.date.getHours();
					case 'mins': 
						let mins = this.date.getMinutes();
						if(mins < 10) mins = '0' + mins.toString();
						return mins;
					case 'secs':
						let secs = this.date.getSeconds();
						if(secs < 10) secs = '0' + secs.toString();
						return secs; 	
				}
			}
		};
	}

	update() {
		let hex = '#' + this.state.getTime('hours') + this.state.getTime('mins') + this.state.getTime('secs');
		hex = hex.length < 6 ? '0'+hex:hex;
		document.body.style.background = hex;
		this.setState({
			date: new Date()
		});
	}

	componentDidMount() {
		setInterval(() => {
			this.update();
		})
	}



	render() {
		return <div >
			< span > {
				this.state.getTime('hours')
			} < /span>: < span > {
				this.state.getTime('mins')
			} < /span>: < span > {
				this.state.getTime('secs')
			} < /span>			 < /div>;
	}
}

export default Timer;