const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Cloud",
				weight: 10
			}, {
				text: "Machine Learning",
				weight: 10
			}, {
				text: "Deep Learning",
				weight: 10
			}, {
				text: "Computer Vision",
				weight: 10
			}, {
				text: "programming",
				weight: 8
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "AWS",
				weight: 12
			}, {
				text: "C | C++",
				weight: 8
			}, {
				text: "IoT",
				weight: 10
			}, {
				text: "NLP",
				weight: 11
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}
	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an Engineer.", "Love to Code.","Love to implement small projects.", "am  a learner.", "Love to solve real world problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function () {},
			onStringTyped: function () {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();