window.GoogleTagManager = {

	/**
	 * Initialization script
	 */
	init: function () {
		// Don't load Google Tag Manager for some user groups
		const userGroups = mw.config.get( 'wgUserGroups' );
		const skipGroups = mw.config.get( 'wgGoogleTagManagerSkipGroups' );
		for ( const userGroup of userGroups ) {
			if ( skipGroups.indexOf( userGroup ) > -1 ) {
				return;
			}
		}
		const containerID = mw.config.get( 'wgGoogleTagManagerContainerID' );
		GoogleTagManager.add( containerID );
	},

	/**
	 * Add the official Google Tag Manager initialization code
	 */
	add: function () {
		/* eslint-disable */
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer',containerID);
		/* eslint-enable */
	}
};

$( GoogleTagManager.init );
