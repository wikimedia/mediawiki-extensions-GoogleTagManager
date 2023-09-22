window.GoogleTagManager = {

	/**
	 * Initialization script
	 */
	init: function () {
		// Don't load GTM for some user groups
		const userGroups = mw.config.get( 'wgUserGroups' );
		const skipGroups = mw.config.get( 'wgGoogleTagManagerSkipGroups' );
		for ( const userGroup of userGroups ) {
			if ( skipGroups.indexOf( userGroup ) > -1 ) {
				return;
			}
		}

		const containerID = mw.config.get( 'wgGoogleTagManagerContainerID' );
		const method = mw.config.get( 'wgGoogleTagManagerDefer' ) ? 'defer' : 'async';

		/* eslint-disable */
		(function(w,d,s,l,i,m){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j[m]=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer',containerID,method);
		/* eslint-enable */
	}
};

$( GoogleTagManager.init );
