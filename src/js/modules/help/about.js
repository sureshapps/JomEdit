import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'hello@suresh.app';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:64px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">JomEdit</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online Image Editor."},
				{title: "Author:", value: 'Suresh Kaleyannan'},
				{title: "Country:", value: 'Malaysia'},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "Website:", html: '<a href="https://suresh.app/">https://suresh.app</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
